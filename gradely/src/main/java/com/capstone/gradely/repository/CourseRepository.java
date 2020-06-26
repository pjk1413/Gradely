package com.capstone.gradely.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.capstone.gradely.model.Course;

@CrossOrigin(origins = "http://localhost:3000")
public interface CourseRepository extends JpaRepository<Course, Long> {
	
//	@Query("SELECT m FROM Message m JOIN m.recipients WHERE recipients_id =?1")
//	List<Message> getUserMessages(Long id);
	
	@Query("SELECT c FROM Course c JOIN c.students WHERE students_id =?1")
	Optional <List<Course>> getStudentCoursesById(Long id);
	
	@Query("FROM Course WHERE teacher.id =?1")
	Optional <List<Course>> getTeacherCoursesById(Long id);
}
