package com.techietact.mycognitiv.batch.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.techietact.mycognitiv.batch.entity.BatchEntity;
import com.techietact.mycognitiv.batch.exception.InvalidPropertyException;
import com.techietact.mycognitiv.batch.exception.InsufficientCapacityException;
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
	public Boolean isInvalidCapacity(long batchId, int capacity) {
		BatchEntity entity = getBatch(batchId);
		return capacity<entity.getCurrentSize();
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
		if(model!=null && model.getId()>0 && model.getModifiedBy()>0) {
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
		List<BatchEntity> entities = batchRepository.findAllByIsDeletedFalse(CustomUtils.sort("batchName", "asc"));
		return entities.stream().map(this::convert).collect(Collectors.toList());
	}

	@Override
	public Page<BatchModel> paginateBatches(int pageIndex, int pageSize, String attributeName, String sortOrder,
			String searchText) {
		Pageable pageable = CustomUtils.pageable(pageIndex, pageSize, attributeName, sortOrder, searchText);
		Page<BatchEntity> entityPage = null;
		if (StringUtils.hasText(searchText)) {
			entityPage = batchRepository.findAllByBatchNameContainingIgnoreCaseAndIsDeletedFalse(searchText, pageable);
		} else {
			entityPage = batchRepository.findAllByIsDeletedFalse(pageable);
		}
		List<BatchModel> models = entityPage.getContent().stream().map(this::convert).collect(Collectors.toList());
		return new PageImpl<>(models, pageable, entityPage.getTotalElements());
	}
	
	@Override
	public Boolean increaseBatchSize(long batchId , int count) {
		BatchEntity entity = getBatch(batchId);
		if(entity.isVacant()) {
			int newSize = entity.getCurrentSize() + count ;
			if(entity.getMaximumCapacity()>=newSize) {
				entity.setCurrentSize(newSize);
				batchRepository.save(entity);
				return true;
			}
		}
		throw new InsufficientCapacityException("Insufficient Seats");
	}

	@Override
	public Boolean decreaseBatchSize(long batchId , int count) {
		BatchEntity entity = getBatch(batchId);
	    int currentSize = entity.getCurrentSize();
		if(currentSize>=count) {
			int newSize = currentSize - count ;
			entity.setCurrentSize(newSize);
			batchRepository.save(entity);
			return true;
		}
		throw new InsufficientCapacityException("Insufficient Seats");
	}


	// private methods

	private BatchModel convert(BatchEntity entity) {
		return modelMapper.map(entity, BatchModel.class);
	}

	private BatchEntity convert(BatchModel model) {
		return modelMapper.map(model, BatchEntity.class);
	}

	private BatchEntity getBatch(long batchId) {
		BatchEntity entity = batchRepository.findByIdAndIsDeletedFalse(batchId);
		if (entity == null) {
			throw new EntityNotFoundException("Batch not found for ID : " + batchId);
		}
		return entity;
	}

}
