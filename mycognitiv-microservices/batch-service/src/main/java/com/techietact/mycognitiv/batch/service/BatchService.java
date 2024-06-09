package com.techietact.mycognitiv.batch.service;

import java.util.List;

import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.domain.Page;

import com.techietact.mycognitiv.batch.model.BatchModel;

public interface BatchService {
	
	Boolean isDuplicateBatchName (String batchName);
	
	Boolean isDuplicateBatchName (long BatchId, String batchName);

	BatchModel createBatch (BatchModel model) ;
	
	BatchModel viewBatch (long batchId);
	
	@CacheEvict(value = "Batches", allEntries = true)
	BatchModel updateBatch (BatchModel model);
	
	@CacheEvict(value = "Batches", allEntries = true)
	Boolean deleteBatch (long batchId , long deletedBy);
	
	Page<BatchModel> paginateBatches (int pageIndex , int pageSize , String attributeName , String sortOrder , String searchText);

	@Cacheable(value = "Batches")
	List<BatchModel> listAllBatches();
		
}
