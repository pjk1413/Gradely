package com.capstone.gradely.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.capstone.gradely.model.enums.UserType;
import com.capstone.gradely.model.userModels.Administration;
import com.capstone.gradely.model.userModels.Student;
import com.capstone.gradely.model.userModels.Teacher;
import com.capstone.gradely.model.userModels.User;
import com.capstone.gradely.repository.TeacherRepository;
import com.capstone.gradely.service.TeacherService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/teacher")
public class TeacherController {

	@Autowired
	private TeacherService teacherService;
	
	@GetMapping("/all")
	public List<Teacher> getAll() {
		return teacherService.findAll();
	}
	
	@PostMapping("/login")
	public Teacher login(@RequestParam String email, @RequestParam String password) {
		
		if(teacherService.login(email, password).isPresent()) {
			Teacher teacher = teacherService.findByEmail(email).get();
			teacher.getUser().setPassword("");
			return teacher;
		} else{
			return null;
		}
	}
	
	//This should be a post
	@GetMapping("/{email}")
	public Teacher getByEmail(@PathVariable String email) {
		return teacherService.findByEmail(email).get();
	}
	
	//Only use for registering a new teacher
	@PostMapping("/new")
	 public Teacher save(@RequestBody Teacher teacher) {
		teacher.setPersonalTimeOff(36);
		teacher.setSickTimeOff(72);
		teacher.setPersonalDevelopmentHours(0);
		teacherService.saveTeacher(teacher);
		return teacherService.findByEmail(teacher.getUser().getEmail()).get();
	 }
	 
	 @GetMapping("/find/{id}")
	 public Teacher findById(@PathVariable Long id) {
	  return teacherService.findById(id).get();
	 }
	 
	 @GetMapping("/delete/{id}")
	 public void delete(@PathVariable Long id) {
	  teacherService.deleteTeacher(id);
	 }
	 
	 
//	 @PostMapping("/update")
//	 public Teacher update(@RequestBody Teacher teacher) {
//		 teacherRepository.findById(teacher.getId()).ifPresent(currentTeacher -> {
//			 currentTeacher.setFirstName(teacher.getFirstName());
//			 currentTeacher.setLastName(teacher.getLastName());
//			 currentTeacher.setEmail(teacher.getEmail());
//			 currentTeacher.setPassword(teacher.getEmail());
//		 });
//		 teacherRepository.save(teacher);
//	  teacherRepository.save(teacher);
//	  return teacher;
//	 }
	
}
