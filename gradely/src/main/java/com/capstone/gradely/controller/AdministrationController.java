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

import com.capstone.gradely.model.userModels.Administration;
import com.capstone.gradely.service.AdministrationService;
import com.capstone.gradely.service.UserService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/admin")
public class AdministrationController {

	@Autowired
	public UserService userService;
	
	@Autowired
	public AdministrationService adminService;
	
	@PostMapping("/login")
	public Administration login(@RequestParam String email, @RequestParam String password) {
		
		if(adminService.login(email, password).isPresent()) {
			Administration admin = adminService.findByEmail(email).get();
			admin.getUser().setPassword("");
			return admin;
		} else{
			return null;
		}
	}
	
	@GetMapping("/all")
	public List<Administration> findAll() {
		return adminService.findAll();
	}
	
	@PostMapping("/new")
	 public Administration save(@RequestBody Administration admin) {
		admin.setPersonalTimeOff(36);
		admin.setSickTimeOff(72);
		adminService.saveAdmin(admin);
		return adminService.findByEmail(admin.getUser().getEmail()).get();
	 }
	
	@GetMapping("/find/{id}")
	public Administration findById(@PathVariable Long id) {
		return adminService.findById(id).get();
	}
	
	@GetMapping("/delete/{id}")
	public void deleteById(@PathVariable Long id) {
		adminService.deleteAdmin(id);
	}

}
