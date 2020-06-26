package com.capstone.gradely.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.capstone.gradely.model.userModels.Administration;

@CrossOrigin(origins = "http://localhost:3000")
public interface AdministrationRepository extends JpaRepository<Administration, Long> {
	
	@Query("FROM Administration WHERE user_id=?1")
	Optional<Administration> findAdministrationById(Long id);
}
