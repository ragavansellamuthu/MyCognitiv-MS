package com.techietact.mycognitiv.batch.entity;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity
@Table(name = "batch")
@Data
@EqualsAndHashCode(callSuper = false)
public class BatchEntity extends AuditableEntity implements Serializable {

	private static final long serialVersionUID = -2056986936523768802L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long batchId;

	@Column(name = "batch_name", nullable = false, length = 25)
	private String batchName;

	@Column(name = "max_capacity" , nullable = false)
	private int maximumCapacity;

	@Column(name = "current_size" , nullable=false)
	private int currentSize;

	@Column(name="is_vacant")
	private boolean isVacant;

}