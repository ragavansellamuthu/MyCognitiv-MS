package com.techietact.mycognitiv.batch.model;

import com.techietact.mycognitiv.batch.annotation.MaximumCapacity;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.Size;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = false)
public class BatchModel extends AuditableModel {

	private static final long serialVersionUID = 6205305264083330343L;

	private long batchId;

	@NotBlank(message = "Batch name is required")
	@Pattern(regexp = "^[a-zA-Z ]+$", message = "Batch name must contain only letters and spaces")
	@Size(max = 25, message = "Batch name must be less than or equal to 25 characters")
	private String batchName;
	
	@MaximumCapacity(message="Batch capacity should be less than or equal to 25")
	private int maximumCapacity ;
	
	@Positive
	private int currentSize ; 
	
	private boolean isVacant ;
	
}
