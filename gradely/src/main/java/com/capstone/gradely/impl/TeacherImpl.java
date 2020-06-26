package com.capstone.gradely.impl;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.capstone.gradely.model.userModels.Teacher;
import com.capstone.gradely.repository.TeacherRepository;
import com.capstone.gradely.repository.UserRepository;
import com.capstone.gradely.service.TeacherService;

@Service
@Transactional
public class TeacherImpl implements TeacherService {

	//************************ Repositories ********************************
	@Autowired
	private TeacherRepository teacherRepository;
	
	@Autowired
	private UserRepository userRepository;

	//************************ Methods ********************************
	
	@Override
	public Optional<Teacher> findByEmail(String email) {
		return teacherRepository.findTeacherById(userRepository.findByEmail(email).get().getId());
	}

	@Override
	public Optional<Teacher> findById(Long id) {
		return teacherRepository.findById(id);
	}

	@Override
	public void deleteTeacher(Long id) {
		teacherRepository.deleteById(id);
	}

	@Override
	public void saveTeacher(Teacher teacher) {
		teacherRepository.save(teacher);
	}

	@Override
	public List<Teacher> findAll() {
		return teacherRepository.findAll();
	}

	@Override
	public Optional<Teacher> login(String email, String password) {
		return teacherRepository.findTeacherById(userRepository.login(email, password).get().getId());
	}

	@Override
	public Optional<Teacher> findTeacherByClassId(Long id) {
		// TODO Auto-generated method stub
		return teacherRepository.findTeacherByClassId(id);
	}


	
}
