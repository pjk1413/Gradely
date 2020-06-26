package com.capstone.gradely.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.capstone.gradely.model.userModels.Parent;
import com.capstone.gradely.model.userModels.Student;

@CrossOrigin(origins = "http://localhost:3000")
public interface StudentRepository extends JpaRepository<Student, Long> {
	
	@Query("FROM Student WHERE user_id=?1")
	Optional<Student> findStudentById(Long id);
	
	//This may not work
	@Query("FROM User WHERE email=?1 AND password=?2")
	Optional<Student> login(String email, String password);
}
