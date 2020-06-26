package com.capstone.gradely.impl;


import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import com.capstone.gradely.model.ContactInformation;
import com.capstone.gradely.model.userModels.Student;
import com.capstone.gradely.model.userModels.User;
import com.capstone.gradely.repository.StudentRepository;
import com.capstone.gradely.repository.UserRepository;
import com.capstone.gradely.service.StudentService;

@Service
@Transactional
public class StudentImpl implements StudentService {

	@Autowired
	private StudentRepository studentRepository;
	
	@Autowired 
	private UserRepository userRepository;


	@Override
	public Optional<Student> findById(Long id) {
		return studentRepository.findById(id);
	}

	@Override
	public void delete(Long id) {
		studentRepository.deleteById(id);
	}

	@Override
	public void save(Student student) {
		studentRepository.save(student);
	}

	@Override
	public List<Student> findAll() {
		return studentRepository.findAll();
	}
	@Override
	public Optional<Student> login(String email, String password) {
		return studentRepository.findStudentById(userRepository.login(email, password).get().getId());
	}

	@Override
	public Optional<Student> findByEmail(String email) {
		return studentRepository.findStudentById(userRepository.findByEmail(email).get().getId());
	}

	
	
	
	
}
