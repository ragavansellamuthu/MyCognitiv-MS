package com.techietact.mycognitiv.candidate.request;

import java.util.HashSet;

import lombok.Data;

@Data
public class BatchCandidateUpdateRequest {
	
	private long batchId ; 
	
	private long modifiedBy ;
	
	private HashSet<Long> candidateIds ;
	
	private int count ; 

}
