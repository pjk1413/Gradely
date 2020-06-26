package com.capstone.gradely.service;

import java.util.List;
import java.util.Optional;

import com.capstone.gradely.model.userModels.Administration;

public interface AdministrationService {

	Optional<Administration> findByEmail(String email);
	
	Optional<Administration> login(String email, String password);
	
	Optional<Administration> findById(Long id);
	
	void deleteAdmin(Long id);
	
	void saveAdmin(Administration administration);
	
	List<Administration> findAll();
	
}
