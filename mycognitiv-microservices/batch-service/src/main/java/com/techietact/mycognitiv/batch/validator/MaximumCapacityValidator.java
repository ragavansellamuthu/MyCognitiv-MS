package com.techietact.mycognitiv.batch.validator;

import com.techietact.mycognitiv.batch.annotation.MaximumCapacity;

import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

public class MaximumCapacityValidator implements ConstraintValidator<MaximumCapacity,Integer>{

	@Override
	public boolean isValid(Integer value, ConstraintValidatorContext context) {
		return value>=25;
	}

}
