package com.techietact.mycognitiv.batch.annotation;

import static java.lang.annotation.ElementType.FIELD;
import static java.lang.annotation.RetentionPolicy.RUNTIME;

import java.lang.annotation.Documented;
import java.lang.annotation.Retention;
import java.lang.annotation.Target;

import com.techietact.mycognitiv.batch.validator.MaximumCapacityValidator;

import jakarta.validation.Constraint;
import jakarta.validation.Payload;

@Documented
@Retention(RUNTIME)
@Target(FIELD)
@Constraint(validatedBy = MaximumCapacityValidator.class)
public @interface MaximumCapacity {

	String message() default "Capacity cannot exceed 25";

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};
    
}
