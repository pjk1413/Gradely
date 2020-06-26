package com.capstone.gradely.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.capstone.gradely.model.Assignment;
import com.capstone.gradely.model.Course;
import com.capstone.gradely.model.enums.AssignmentType;
import com.capstone.gradely.repository.AssignmentRepository;
import com.capstone.gradely.repository.CourseRepository;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/assignment/")
public class AssignmentController {
	
	@Autowired
	private AssignmentRepository assignmentRepository;
	
	@Autowired
	private CourseRepository courseRepository;
	
	@GetMapping("getTypes")
	public AssignmentType[] getAssignmentTypes() {
		return AssignmentType.values();
	}
	

}
