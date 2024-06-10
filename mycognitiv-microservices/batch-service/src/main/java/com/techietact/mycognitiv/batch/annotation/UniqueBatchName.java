package com.techietact.mycognitiv.batch.annotation;

import static java.lang.annotation.ElementType.FIELD;
import static java.lang.annotation.ElementType.PARAMETER;
import static java.lang.annotation.RetentionPolicy.RUNTIME;

import java.lang.annotation.Documented;
import java.lang.annotation.Retention;
import java.lang.annotation.Target;

import com.techietact.mycognitiv.batch.validator.DuplicateBatchNameValidator;

import jakarta.validation.Constraint;
import jakarta.validation.Payload;

@Documented
@Retention(RUNTIME)
@Target({ FIELD, PARAMETER })
@Constraint(validatedBy = DuplicateBatchNameValidator.class)
public @interface UniqueBatchName {

	String message() default "Duplicate Batch name";

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};
    
}
