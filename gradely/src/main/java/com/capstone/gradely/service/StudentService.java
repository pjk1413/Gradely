package com.capstone.gradely.service;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.RequestParam;

import com.capstone.gradely.model.userModels.Student;

public interface StudentService {

	Optional<Student> findByEmail(String email);
	
	Optional<Student> login(String email, String password);
	
	Optional<Student> findById(Long id);
	
	void delete(Long id);
	
	void save(Student student);
	
	List<Student> findAll();

}
