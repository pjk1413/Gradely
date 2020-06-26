package com.capstone.gradely.impl;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.capstone.gradely.model.userModels.Administration;
import com.capstone.gradely.repository.AdministrationRepository;
import com.capstone.gradely.repository.UserRepository;
import com.capstone.gradely.service.AdministrationService;

@Service
@Transactional
public class AdministrationImpl implements AdministrationService {

	//************************ Repositories ********************************
	@Autowired 
	private AdministrationRepository administrationRepository;
	
	@Autowired 
	private UserRepository userRepository;

	//************************ Methods ********************************


	@Override
	public Optional<Administration> findById(Long id) {
		return administrationRepository.findById(id);
	}

	@Override
	public void deleteAdmin(Long id) {
		administrationRepository.deleteById(id);
	}

	@Override
	public void saveAdmin(Administration administration) {
		administrationRepository.save(administration);
	}

	@Override
	public List<Administration> findAll() {
		return administrationRepository.findAll();
	}
	
	@Override
	public Optional<Administration> login(String email, String password) {
		return administrationRepository.findAdministrationById(userRepository.login(email, password).get().getId());
	}

	@Override
	public Optional<Administration> findByEmail(String email) {
		return administrationRepository.findAdministrationById(userRepository.findByEmail(email).get().getId());
	}
	
	
	
}
