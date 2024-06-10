package com.techietact.mycognitiv.batch.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;
import com.techietact.mycognitiv.batch.annotation.MaximumCapacity;
import com.techietact.mycognitiv.batch.annotation.UniqueBatchName;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = false)
public class BatchModel extends AuditableModel {

	private static final long serialVersionUID = 6205305264083330343L;

	private long id;

	@NotBlank(message = "Batch name is required" , groups = {BatchCreation.class,BatchUpdation.class})
	@Pattern(regexp = "^[a-zA-Z ]+$", message = "Batch name must contain only letters and spaces", groups = {BatchCreation.class,BatchUpdation.class})
	@Size(max = 25, message = "Batch name must be less than or equal to 25 characters", groups = {BatchCreation.class,BatchUpdation.class})
	@UniqueBatchName(message="Batch name is already taken" , groups = BatchCreation.class)
	private String batchName;
	
	@MaximumCapacity(message="Batch capacity should be less than or equal to 25", groups = {BatchCreation.class,BatchUpdation.class})
	private int maximumCapacity ;
	
	@JsonProperty(access=Access.READ_ONLY)
	private int currentSize ; 
	
	@JsonProperty(access=Access.READ_ONLY)
	private boolean isVacant ;
	
	// Validation Groups : 
	
	public interface BatchCreation {}
	
	public interface BatchUpdation {} 
	
}
