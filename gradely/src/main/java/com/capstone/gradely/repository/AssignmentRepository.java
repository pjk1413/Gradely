package com.capstone.gradely.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.capstone.gradely.model.Assignment;

@CrossOrigin(origins = "http://localhost:3000")
public interface AssignmentRepository extends JpaRepository<Assignment, Long>{

}
