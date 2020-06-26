package com.capstone.gradely.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.capstone.gradely.model.userModels.User;


public interface UserRepository extends JpaRepository<User, Long> {

	@Query("FROM User WHERE email=?1 AND password=?2")
	Optional<User> login(String email, String password);
	
	@Query("FROM User WHERE email=?1")
	Optional<User> findByEmail(String email);
}
