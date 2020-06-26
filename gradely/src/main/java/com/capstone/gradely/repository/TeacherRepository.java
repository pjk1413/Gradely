package com.capstone.gradely.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.capstone.gradely.model.userModels.Parent;
import com.capstone.gradely.model.userModels.Teacher;

@CrossOrigin(origins = "http://localhost:3000")
public interface TeacherRepository extends JpaRepository<Teacher, Long> {
	
	@Query("SELECT c.teacher FROM Course c WHERE c.id=?1")
	Optional<Teacher> findTeacherByClassId(Long id);
	
	@Query("FROM Teacher WHERE user_id=?1")
	Optional<Teacher> findTeacherById(Long id);
	
}
