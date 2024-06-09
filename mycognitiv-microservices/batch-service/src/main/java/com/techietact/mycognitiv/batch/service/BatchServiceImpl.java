package com.techietact.mycognitiv.batch.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.techietact.mycognitiv.batch.entity.BatchEntity;
import com.techietact.mycognitiv.batch.exception.InvalidPropertyException;
import com.techietact.mycognitiv.batch.model.BatchModel;
import com.techietact.mycognitiv.batch.repository.BatchRepository;
import com.techietact.mycognitiv.batch.util.CustomUtils;

import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class BatchServiceImpl implements BatchService {

	private final BatchRepository batchRepository;

	private final ModelMapper modelMapper;

	@Override
	public Boolean isDuplicateBatchName(String batchName) {
		BatchEntity entity = batchRepository.findAllByBatchNameAndIsDeletedFalse(batchName);
		return entity != null;
	}

	@Override
	public Boolean isDuplicateBatchName(long batchId, String batchName) {
		BatchEntity entity = getBatch(batchId);
		String existingName = entity.getBatchName();
		if (batchName.equals(existingName)) {
			return false;
		}
		return isDuplicateBatchName(batchName);
	}

	@Override
	public BatchModel createBatch(BatchModel model){
		if(model!=null && model.getCreatedBy()>0) {
			return convert(batchRepository.save(convert(model)));
		}
		throw new InvalidPropertyException("Invalid or Missing property : 'createdBy'");
	}

	@Override
	public BatchModel viewBatch(long batchId) {
		if(batchId > 0) {
			return convert(getBatch(batchId));
		}
		throw new InvalidPropertyException("Invalid or Missing  Property : 'batchId'");
	}

	@Override
	public BatchModel updateBatch(BatchModel model) {
		if(model!=null && model.getBatchId()>0 && model.getModifiedBy()>0) {
			return convert(batchRepository.save(convert(model)));
		}
		throw new InvalidPropertyException("Invalid or Missing Property : Check validity for Properties : 'batchId' and 'modifiedBy'");
	}

	@Override
	public Boolean deleteBatch(long batchId, long deletedBy) {
		if( batchId > 0 && deletedBy > 0) {
			BatchEntity entity = getBatch(batchId);
			entity.setDeleted(true);
			entity.setDeletedBy(deletedBy);
			entity = batchRepository.save(entity);
			return entity.isDeleted();
		}
		throw new InvalidPropertyException("Invalid or Missing  Property : Check validity for Properties : 'batchId' and 'deletedBy'");
	}
	
	@Override
	public List<BatchModel> listAllBatches() {
		List<BatchEntity> entities = batchRepository.findAllByIsDeletedFalse(CustomUtils.sort("name", "asc"));
		return entities.stream().map(this::convert).collect(Collectors.toList());
	}

	@Override
	public Page<BatchModel> paginateBatches(int pageIndex, int pageSize, String attributeName, String sortOrder,
			String searchText) {
		Pageable pageable = PageRequest.of(pageIndex, pageSize, CustomUtils.sort(attributeName, sortOrder));
		Page<BatchEntity> entityPage = null;
		if (StringUtils.hasText(searchText)) {
			entityPage = batchRepository.findAllByBatchNameContainingIgnoreCaseAndIsDeletedFalse(searchText, pageable);
		} else {
			entityPage = batchRepository.findAllByIsDeletedFalse(pageable);
		}
		List<BatchModel> models = entityPage.getContent().stream().map(this::convert).collect(Collectors.toList());
		return new PageImpl<>(models, pageable, entityPage.getTotalElements());
	}

	// private methods

	private BatchModel convert(BatchEntity entity) {
		BatchModel model = modelMapper.map(entity, BatchModel.class);
		return model;
	}

	private BatchEntity convert(BatchModel model) {
		return modelMapper.map(model, BatchEntity.class);
	}

	private BatchEntity getBatch(long batchId) {
		BatchEntity entity = batchRepository.findByBatchIdAndIsDeletedFalse(batchId);
		if (entity == null) {
			throw new EntityNotFoundException("Batch not found for ID : " + batchId);
		}
		return entity;
	}

}
