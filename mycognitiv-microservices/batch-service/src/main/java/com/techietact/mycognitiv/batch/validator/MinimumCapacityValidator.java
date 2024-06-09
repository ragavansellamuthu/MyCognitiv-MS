package com.techietact.mycognitiv.batch.validator;

import com.techietact.mycognitiv.batch.annotation.MinimumCapacity;

import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

public class MinimumCapacityValidator implements ConstraintValidator<MinimumCapacity, Integer>{

	@Override
	public boolean isValid(Integer value, ConstraintValidatorContext context) {
		return false;
	}

}
