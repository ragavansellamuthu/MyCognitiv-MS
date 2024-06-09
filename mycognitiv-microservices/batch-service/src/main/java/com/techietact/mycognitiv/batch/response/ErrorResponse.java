package com.techietact.mycognitiv.batch.response;

import java.util.Map;

import lombok.Data;

@Data
public class ErrorResponse {

	private final int code ;
	
	private final String message ;
	
	private final Map<String,String> fieldErrors;
	
}
