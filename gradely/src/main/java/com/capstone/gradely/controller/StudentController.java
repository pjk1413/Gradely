package com.capstone.gradely.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.capstone.gradely.model.Assignment;
import com.capstone.gradely.model.StudentScore;
import com.capstone.gradely.model.userModels.Student;
import com.capstone.gradely.repository.AssignmentRepository;
import com.capstone.gradely.repository.CourseRepository;
import com.capstone.gradely.repository.StudentScoreRepository;
import com.capstone.gradely.service.StudentService;



@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/student")
public class StudentController {

	@Autowired
	private AssignmentRepository assignmentRepository;
	
	@Autowired
	private CourseRepository courseRepository;
	
	@Autowired 
	private StudentScoreRepository studentScoreRepository;
	
	@Autowired
	private StudentService studentService;
	
	@PostMapping("/login")
	public Student login(@RequestParam String email, @RequestParam String password) {
		
		if(studentService.login(email, password).isPresent()) {
			Student student  = studentService.findByEmail(email).get();
			student.getUser().setPassword("");
			return student;
		} else{
			return null;
		}
	}
	
	@GetMapping("/all")
	public List<Student> get() {
		return studentService.findAll();
	}
	
	@PostMapping("/new")
	 public Student save(@RequestBody Student student) {
		//When student is saved, need to make sure it is added to a course
		studentService.save(student);
		return studentService.findByEmail(student.getUser().getEmail()).get();
	 }	

	 @GetMapping("/find/{id}")
	 public Student get(@PathVariable Long id) {
	  return studentService.findById(id).get();
	 }
	 
	 @GetMapping("/delete/{id}")
	 public void deleteById(@PathVariable Long id) {
		 studentService.delete(id);
	 }
	 
	 @PostMapping("/new/score")
	 public void newStudentScore(@RequestBody StudentScore score) {
		 Assignment assignment = assignmentRepository.findById(score.getAssignmentTempId()).get();
		 score.setAssignment(assignment);
		 Student student = studentService.findById(score.getStudentTempId()).get();
		 score.setStudent(student);
		 
		 studentScoreRepository.save(score);

		 assignmentRepository.findById(assignment.getId()).ifPresent(tempAssignment -> {
			 List<StudentScore> assignmentScores = tempAssignment.getAssignmentScores();
			 assignmentScores.add(score);
			 tempAssignment.setAssignmentScores(assignmentScores);
			 assignmentRepository.save(tempAssignment);
		 });
		 
		 studentService.findById(student.getId()).ifPresent(tempStudent -> {
			 List<StudentScore> studentScores = student.getAssignmentScores();
			 studentScores.add(score);
			 student.setAssignmentScores(studentScores);
			 studentService.save(tempStudent);
		 });
	 }
	 
	 @PostMapping("/update/score")
	 public void updateStudentScore(@RequestBody StudentScore score) {
		 
			studentScoreRepository.findById(score.getId()).ifPresent(currentScore -> {
				 currentScore.setPoints(score.getPoints());
				 currentScore.setTurnedIn(score.getTurnedIn());
				 
				 Assignment assignment = assignmentRepository.findById(score.getAssignmentTempId()).get();
				 currentScore.setAssignment(assignment);
				 Student student = studentService.findById(score.getStudentTempId()).get();
				 currentScore.setStudent(student);
				 
				 studentScoreRepository.save(currentScore);

//				 assignmentRepository.findById(assignment.getId()).ifPresent(tempAssignment -> {
//					 List<StudentScore> assignmentScores = tempAssignment.getAssignmentScores();
//					 assignmentScores.add(currentScore);
//					 tempAssignment.setAssignmentScores(assignmentScores);
//					 assignmentRepository.save(tempAssignment);
//				 });
				 
//				 studentService.findById(student.getId()).ifPresent(tempStudent -> {
//					 List<StudentScore> studentScores = student.getAssignmentScores();
//					 studentScores.add(currentScore);
//					 student.setAssignmentScores(studentScores);
//					 studentService.save(tempStudent);
//				 });
				 
				 
			 });
		 
		 
	 }
	 
}
