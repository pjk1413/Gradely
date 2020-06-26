package com.capstone.gradely.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import com.capstone.gradely.model.Assignment;
import com.capstone.gradely.model.StudentScore;
import com.capstone.gradely.utils.StudentScoreId;

public interface StudentScoreRepository extends JpaRepository<StudentScore, Long> {

	@Query("FROM StudentScore WHERE student.id =?1")
	List<StudentScore> findAllStudentScores(Long id);
	
	@Transactional
	@Modifying
	@Query("DELETE FROM StudentScore WHERE assignment.id =?1")
	void deleteRelatedScores(Long id);
	
}
