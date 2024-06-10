package com.techietact.mycognitiv.batch.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import com.techietact.mycognitiv.batch.entity.BatchEntity;

public interface BatchRepository extends JpaRepository<BatchEntity, Long> {

	BatchEntity findAllByBatchNameAndIsDeletedFalse(String email);

	BatchEntity findByIdAndIsDeletedFalse(long BatchId);

	List<BatchEntity> findAllByIsDeletedFalse(Sort sort);

	Page<BatchEntity> findAllByIsDeletedFalse(Pageable pagebale);

	Page<BatchEntity> findAllByBatchNameContainingIgnoreCaseAndIsDeletedFalse(String batchName, Pageable pagebale);

}
