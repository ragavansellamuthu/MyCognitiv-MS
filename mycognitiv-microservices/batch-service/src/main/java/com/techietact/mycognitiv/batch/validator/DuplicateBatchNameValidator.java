package com.techietact.mycognitiv.batch.validator;

import org.springframework.beans.factory.annotation.Autowired;

import com.techietact.mycognitiv.batch.annotation.UniqueBatchName;
import com.techietact.mycognitiv.batch.service.BatchService;

import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

public class DuplicateBatchNameValidator implements ConstraintValidator<UniqueBatchName,String> {

	@Autowired
	BatchService batchService ;
	
	@Override
	public boolean isValid(String batchName, ConstraintValidatorContext context) {
		return batchName != null ? !batchService.isDuplicateBatchName(batchName): false;
	}

}
