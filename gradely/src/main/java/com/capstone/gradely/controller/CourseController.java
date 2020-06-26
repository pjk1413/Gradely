package com.capstone.gradely.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.capstone.gradely.model.Assignment;
import com.capstone.gradely.model.Course;
import com.capstone.gradely.model.StudentScore;
import com.capstone.gradely.model.enums.UserType;
import com.capstone.gradely.model.userModels.Student;
import com.capstone.gradely.model.userModels.Teacher;
import com.capstone.gradely.repository.AssignmentRepository;
import com.capstone.gradely.repository.CourseRepository;

import com.capstone.gradely.repository.StudentScoreRepository;
import com.capstone.gradely.service.StudentService;
import com.capstone.gradely.service.TeacherService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/course")
public class CourseController {

	@Autowired
	private CourseRepository courseRepository;
	
	@Autowired
	private StudentService studentService;
	
	@Autowired
	private TeacherService teacherService;
	
	@Autowired
	private AssignmentRepository assignmentRepository;
	
	@Autowired
	private StudentScoreRepository studentScoreRepository;
	
	//MAPPINGS
	
	// ************************************************
	// RULES:
	// 1. UPDATE OR ADD OR CHANGE A COURSE - RETURN ENTIRE LIST OF COURSES
	
	//DONE
	@GetMapping("/all")
	public List<Course> getAllCourses() {
		return courseRepository.findAll();
	}
	
	//DONE
	@GetMapping("/{id}")
	public Course getCourseById(@PathVariable Long id) {
		return courseRepository.findById(id).get();
	}
	
	//DONE
	@PostMapping("/new")
	public List<Course> save(@RequestBody Course course) {
		course.setTeacher(teacherService.findById(course.getTeacher().getId()).get());
		courseRepository.save(course);
		return courseRepository.findAll();
	}

	//DONE
	@PostMapping("/update")
	public List<Course> update(@RequestBody Course course) {
		courseRepository.findById(course.getId()).ifPresent(currentCourse -> {
			currentCourse.setName(course.getName());
			currentCourse.setTeacher(teacherService.findById(course.getTeacher().getId()).get());//Any bad dependencies may occur here, teacher may need to be found before entered
			currentCourse.setStartDate(course.getStartDate());
			currentCourse.setEndDate(course.getEndDate());
			currentCourse.setMeetsOn(course.getMeetsOn());
			currentCourse.setTime(course.getTime());
			currentCourse.setRoom(course.getRoom());
			currentCourse.setStudents(course.getStudents());
			
			courseRepository.save(currentCourse);
		});
		
		return courseRepository.findAll();
	}
	
	//DONE
	@GetMapping("/delete/{id}")
	public List<Course> deleteCourse(@PathVariable Long id) {
		courseRepository.deleteById(id);
		return courseRepository.findAll();
	}
	
	//DONE
	@PostMapping("/student/add/")
	public Course addStudentsToCourse(@RequestBody Course course) {

		courseRepository.findById(course.getId()).ifPresent(currentCourse -> {
			List<Student> studentList = course.getStudents();
			Teacher teacher = teacherService.findTeacherByClassId(course.getId()).get(); //
			//teacher.addCourse(currentCourse); //cannot find the teacher right now, need to figure out how to find a teacher
			currentCourse.setTeacher(teacher);
			
			currentCourse.setStudents(studentList);
			
			courseRepository.save(currentCourse);
		});
		return courseRepository.findById(course.getId()).get();
	}
	
	// ********************** TEACHER *************************
	
	@GetMapping("/teacherCourses/{id}")
	public List<Course> getTeacherCourses(@PathVariable Long id) {
		return courseRepository.getTeacherCoursesById(id).get();
	}
	
	@GetMapping("/studentCourses/{id}")
	public List<Course> getStudentCourses(@PathVariable Long id) {
		return courseRepository.getStudentCoursesById(id).get();
	}
	
	//**************** ASSIGNMENTS ************************
	
	//CHECKED
	@GetMapping("/assignment/delete/{id}")
	public void deleteAssignment(@PathVariable Long id) {
		studentScoreRepository.deleteRelatedScores(id);
		assignmentRepository.deleteById(id);
	}
	
	
	//Think about in terms of object you are adding
	//DONE
	@PostMapping("/assignment/new")
	public Course newAssignment(@RequestBody Assignment assignment) {
		Assignment savedAssignment = assignmentRepository.save(assignment);
		
		courseRepository.findById(assignment.getCourseId()).ifPresent(currentCourse -> {
			currentCourse.addAssignment(savedAssignment);
			
			//DESIGNED TO ADD THE ASSIGNMENT TO ALL STUDENTS AND PREPARE THE OBJECT
			for (Student student : currentCourse.getStudents()) {
				
				StudentScore studentScore = new StudentScore();
				studentScore.setName(assignment.getName());
				studentScore.setTotalPoints(assignment.getTotalPoints());
				studentScore.setDueDate(assignment.getDueDate());
				studentScore.setDescription(assignment.getDescription());
				studentScore.setStudent(student);
				studentScore.setAssignment(savedAssignment);
				
				studentScoreRepository.save(studentScore);
			}
			courseRepository.save(currentCourse);
		});
		
		return courseRepository.findById(assignment.getCourseId()).get();
	}
	
//	@GetMapping("/studentList/{id}")
//	public List<Student> courseStudentList(@PathVariable Long id) {
//		return courseRepository.findById(id).get().getStudentList();
//	}
	
	//CHECKED
	@PostMapping("/assignment/update")
	public void updateAssignment(@RequestBody Assignment assignment) {
		
		assignmentRepository.findById(assignment.getId()).ifPresent(temp -> {
			temp.setName(assignment.getName());
			temp.setDueDate(assignment.getDueDate());
			temp.setTotalPoints(assignment.getTotalPoints());
			temp.setAssignmentType(assignment.getAssignmentType());
			assignmentRepository.save(temp);
		});
	}
	
	
	//For initial loading of the teacher page
	//Scores linked to student, not assignment on the course side
	@GetMapping("/scores/all/{id}")
	public List<Course> getAllCourseTeacherData(@PathVariable Long id) {
		List<Course> courses = courseRepository.getTeacherCoursesById(id).get();
		
		for (Course course : courses) {
			List<Student> students = course.getStudents();
			
			for (Student student : students) {
				List<StudentScore> scores = studentScoreRepository.findAllStudentScores(student.getId());
				
				for (StudentScore score : scores) {
					score.setStudentTempId(student.getId());
					score.setAssignmentTempId(score.getAssignment().getId());
				}
				student.setAssignmentScores(scores);
			}
			
			course.setStudents(students);
		}
		
		return courses;
	}
	
	
	//SINGLE COURSE UPLOAD for TEACHER DONE
	@GetMapping("/student/assignments/{id}")
	public Course getAllAssignmentData(@PathVariable Long id) {
		Course course = courseRepository.findById(id).get();
		List<Student> students = course.getStudents();
		
		for (Student student : students) {
			List<StudentScore> scores = studentScoreRepository.findAllStudentScores(student.getId());
			
			for (StudentScore score : scores) {
				score.setStudentTempId(student.getId());
				score.setAssignmentTempId(score.getAssignment().getId());
			}
			student.setAssignmentScores(scores);
		}
		course.setStudents(students);
		return course;
	}
	

	
	
}
