package com.techietact.mycognitiv.batch.request;

import java.io.Serializable;

import lombok.Data;

@Data
public class BatchUpdateRequest implements Serializable{
	
	private static final long serialVersionUID = 4506261130161506640L;
	
	private int count;
	
	private long batchId;
	
	private long modifiedBy;

}
