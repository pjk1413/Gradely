package com.capstone.gradely.service;

import java.util.List;
import java.util.Optional;

import com.capstone.gradely.model.userModels.Parent;
import com.capstone.gradely.model.userModels.Student;

public interface ParentService {
	
	Optional<Parent> findByEmail(String email);
	
	Optional<Parent> login(String email, String password);
	
	Optional<Parent> findById(Long id);
	
	void delete(Long id);
	
	void save(Parent parent);
	
	List<Parent> findAll();
}
