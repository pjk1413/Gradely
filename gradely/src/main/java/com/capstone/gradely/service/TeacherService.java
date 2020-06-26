package com.capstone.gradely.service;

import java.util.List;
import java.util.Optional;

import com.capstone.gradely.model.userModels.Parent;
import com.capstone.gradely.model.userModels.Teacher;

public interface TeacherService {

	Optional<Teacher> findByEmail(String email);
	
	Optional<Teacher> login(String email, String password);
	
	Optional<Teacher> findById(Long id);
	
	void deleteTeacher(Long id);
	
	void saveTeacher(Teacher teacher);
	
	List<Teacher> findAll();
	
	Optional<Teacher> findTeacherByClassId(Long id);
	
}
