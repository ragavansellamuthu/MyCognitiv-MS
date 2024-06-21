package com.techietact.mycognitiv.candidate.service;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.reactive.function.client.WebClient;

import com.techietact.mycognitiv.candidate.entity.CandidateEntity;
import com.techietact.mycognitiv.candidate.exception.InvalidPropertyException;
import com.techietact.mycognitiv.candidate.model.CandidateModel;
import com.techietact.mycognitiv.candidate.repository.CandidateRepository;
import com.techietact.mycognitiv.candidate.request.BatchCandidateUpdateRequest;
import com.techietact.mycognitiv.candidate.util.CustomUtils;

import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import reactor.core.publisher.Mono;

@Log4j2
@Service
@RequiredArgsConstructor
public class CandidateServiceImpl implements CandidateService {

	private final CandidateRepository candidateRepository;

	private final WebClient.Builder webClientBuilder;

	private final ModelMapper modelMapper;

	@Override
	public Boolean isDuplicateEmail(String email) {
		CandidateEntity entity = candidateRepository.findAllByEmailAndIsDeletedFalse(email);
		return entity != null;
	}

	@Override
	public Boolean isDuplicateEmail(long candidateId, String email) {
		CandidateEntity entity = getCandidate(candidateId);
		String existingEmail = entity.getEmail();
		if (email.equals(existingEmail)) {
			return false;
		}
		return isDuplicateEmail(email);
	}

	@Override
	public CandidateModel createCandidate(CandidateModel model) {
		if (model != null && model.getCreatedBy() > 0) {
			return convert(candidateRepository.save(convert(model)));
		}
		throw new InvalidPropertyException("Invalid or Missing property : 'createdBy'");
	}

	@Override
	public CandidateModel viewCandidate(long candidateId) {
		if (candidateId > 0) {
			return convert(getCandidate(candidateId));
		}
		throw new InvalidPropertyException("Invalid or Missing  Property : 'candidateId'");
	}

	@Override
	public CandidateModel updateCandidate(CandidateModel model) {
		if (model != null && model.getCandidateId() > 0 && model.getModifiedBy() > 0) {
			CandidateEntity entity = convert(model);
			entity.setPassword(getCandidate(model.getCandidateId()).getPassword());
			return convert(candidateRepository.save(entity));
		}
		throw new InvalidPropertyException(
				"Invalid or Missing Property : Check validity for Properties : 'candidateId' and 'modifiedBy'");
	}

	@Override
	public Boolean deleteCandidate(long candidateId, long deletedBy) {
		if (candidateId > 0 && deletedBy > 0) {
			CandidateEntity entity = getCandidate(candidateId);
			entity.setDeleted(true);
			entity.setDeletedBy(deletedBy);
			entity = candidateRepository.save(entity);
			return entity.isDeleted();
		}
		throw new InvalidPropertyException(
				"Invalid or Missing  Property : Check validity for Properties : 'candidateId' and 'deletedBy'");
	}
	
	@Override
	public Boolean undoDeletion(long candidateId) {
		if (candidateId > 0) {
			CandidateEntity entity = candidateRepository.findById(candidateId).orElseThrow(()->new EntityNotFoundException("Candidate not found for ID : " + candidateId));
			entity.setDeleted(false);
			entity.setDeletedAt(null);
			entity.setModifiedBy(entity.getDeletedBy());
			entity.setDeletedBy(0);
			entity = candidateRepository.save(entity);
			return !entity.isDeleted();
		}
		throw new InvalidPropertyException(
				"Invalid or Missing  Property : 'candidateId'");
	}

	@Override
	public List<CandidateModel> listAllCandidates() {
		List<CandidateEntity> entities = candidateRepository.findAllByIsDeletedFalse(CustomUtils.sort("name", "asc"));
		return entities.stream().map(this::convert).collect(Collectors.toList());
	}

	@Override
	public Page<CandidateModel> paginateCandidates(int pageIndex, int pageSize, String attributeName, String sortOrder,
			String searchText) {
		Pageable pageable = PageRequest.of(pageIndex, pageSize, CustomUtils.sort(attributeName, sortOrder));
		Page<CandidateEntity> entityPage = null;
		if (StringUtils.hasText(searchText)) {
			entityPage = candidateRepository.findAllByNameContainingIgnoreCaseAndIsDeletedFalse(searchText, pageable);
		} else {
			entityPage = candidateRepository.findAllByIsDeletedFalse(pageable);
		}
		List<CandidateModel> models = entityPage.getContent().stream().map(this::convert).collect(Collectors.toList());
		return new PageImpl<>(models, pageable, entityPage.getTotalElements());
	}

	@Override
	public Boolean updateBatchIdforCandidates(BatchCandidateUpdateRequest request) {
		request.setCount(request.getCandidateIds().size());
		log.info("CALLING-BATCH-SERVICE : " + request);
		if (callBatchService(request)) {
			int rowCount = candidateRepository.updateBatchIdForCandidates(request.getBatchId(), request.getModifiedBy(),
					new Date(), request.getCandidateIds());
			return rowCount == request.getCount();
		}
		return false;
	}

	// private methods

	private CandidateModel convert(CandidateEntity entity) {
		CandidateModel model = modelMapper.map(entity, CandidateModel.class);
		model.setPassword(null);
		return model;
	}

	private CandidateEntity convert(CandidateModel model) {
		return modelMapper.map(model, CandidateEntity.class);
	}

	private CandidateEntity getCandidate(long candidateId) {
		CandidateEntity entity = candidateRepository.findByCandidateIdAndIsDeletedFalse(candidateId);
		if (entity == null) {
			throw new EntityNotFoundException("Candidate not found for ID : " + candidateId);
		}
		return entity;
	}

	// Inter-service Connection :
	
	private boolean callBatchService(BatchCandidateUpdateRequest request) {
		try {
			WebClient webClient = webClientBuilder.baseUrl("http://localhost:8083/mycognitiv/batch-service/batch").build();
			ResponseEntity<Boolean> responseEntity = webClient.patch()
															  .uri("/increase-batch-size")
															  .body(Mono.just(request), BatchCandidateUpdateRequest.class)
															  .retrieve()
															  .toEntity(Boolean.class)
															  .block();
			return responseEntity != null && responseEntity.getStatusCode().is2xxSuccessful();
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	}

}
