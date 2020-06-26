package com.capstone.gradely.impl;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.capstone.gradely.model.userModels.Parent;
import com.capstone.gradely.model.userModels.Student;
import com.capstone.gradely.repository.ParentRepository;
import com.capstone.gradely.repository.UserRepository;
import com.capstone.gradely.service.ParentService;

@Service
@Transactional
public class ParentImpl implements ParentService {
	
	@Autowired
	private ParentRepository parentRepository;
	
	@Autowired
	private UserRepository userRepository;
	

	@Override
	public Optional<Parent> findById(Long id) {
		return parentRepository.findById(id);
	}

	@Override
	public void delete(Long id) {
		parentRepository.deleteById(id);
	}

	@Override
	public void save(Parent parent) {
		parentRepository.save(parent);
	}

	@Override
	public List<Parent> findAll() {
		return parentRepository.findAll();
	}
	
	@Override
	public Optional<Parent> findByEmail(String email) {
		return parentRepository.findParentById(userRepository.findByEmail(email).get().getId());
	}

	@Override
	public Optional<Parent> login(String email, String password) {
		// TODO Auto-generated method stub
		return null;
	}
}
