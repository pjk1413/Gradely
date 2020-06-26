package com.capstone.gradely.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.capstone.gradely.model.userModels.Parent;
import com.capstone.gradely.model.userModels.Student;

public interface ParentRepository extends JpaRepository<Parent, Long> {
	
	@Query("FROM Parent WHERE user_id=?1")
	Optional<Parent> findParentById(Long id);
	
	//This may not work
	@Query("FROM User WHERE email=?1 AND password=?2")
	Optional<Parent> login(String email, String password);
}
