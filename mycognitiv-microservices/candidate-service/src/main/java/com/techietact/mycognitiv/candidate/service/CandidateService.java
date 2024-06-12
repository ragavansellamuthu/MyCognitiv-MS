package com.techietact.mycognitiv.candidate.service;

import java.util.List;

import org.springframework.data.domain.Page;

import com.techietact.mycognitiv.candidate.model.CandidateModel;
import com.techietact.mycognitiv.candidate.request.BatchCandidateUpdateRequest;

public interface CandidateService {
	
	Boolean isDuplicateEmail (String email);
	
	Boolean isDuplicateEmail (long candidateId, String email);

	CandidateModel createCandidate (CandidateModel model) ;
	
	CandidateModel viewCandidate (long candidateId);
	
	//@CacheEvict(value = "Candidates", allEntries = true)
	CandidateModel updateCandidate (CandidateModel model);
	
	//@CacheEvict(value = "Candidates", allEntries = true)
	Boolean deleteCandidate (long candidateId , long deletedBy);
	
	Page<CandidateModel> paginateCandidates (int pageIndex , int pageSize , String attributeName , String sortOrder , String searchText);

	//@Cacheable(value = "Candidates")
	List<CandidateModel> listAllCandidates();
	
	Boolean updateBatchIdforCandidates(BatchCandidateUpdateRequest request);

		
}
