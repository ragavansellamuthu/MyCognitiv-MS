package com.techietact.mycognitiv.candidate.repository;

import java.util.Date;
import java.util.HashSet;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import com.techietact.mycognitiv.candidate.entity.CandidateEntity;

public interface CandidateRepository extends JpaRepository<CandidateEntity, Long> {
	
	CandidateEntity findAllByEmailAndIsDeletedFalse(String email);
	
	CandidateEntity findByCandidateIdAndIsDeletedFalse(long candidateId);
	
	List<CandidateEntity> findAllByIsDeletedFalse(Sort sort);
	
	Page<CandidateEntity> findAllByIsDeletedFalse(Pageable pagebale);
	
	Page<CandidateEntity> findAllByNameContainingIgnoreCaseAndIsDeletedFalse(String name,Pageable pagebale);
	
	@Transactional
	@Modifying
	@Query("UPDATE CandidateEntity c SET c.batchId = :batchId, c.modifiedBy = :modifiedBy , c.modifiedAt = :modifiedAt WHERE c.candidateId IN :candidateIds")
	int updateBatchIdForCandidates(long batchId , long modifiedBy , Date modifiedAt ,HashSet<Long> candidateIds);
	
	
}
