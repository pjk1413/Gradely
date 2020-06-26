package com.capstone.gradely.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.capstone.gradely.model.enums.UserType;
import com.capstone.gradely.model.userModels.Parent;
import com.capstone.gradely.repository.ParentRepository;
import com.capstone.gradely.service.ParentService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/parent/")
public class ParentController {
	
	@Autowired
	private ParentService parentService;
	
	@GetMapping("/delete/{id}")
	public void deleteParent(@PathVariable Long id) {
		parentService.delete(id);
	}
	
	@GetMapping("/all")
	public List<Parent> findAll() {
		return parentService.findAll();
	}
	
	@PostMapping("/new")
	 public Parent save(@RequestBody Parent parent) {
		parentService.save(parent);
		return parentService.findByEmail(parent.getUser().getEmail()).get();
	 }
	
}
