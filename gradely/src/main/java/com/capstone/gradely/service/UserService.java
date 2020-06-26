package com.capstone.gradely.service;

import java.util.List;
import java.util.Optional;

import com.capstone.gradely.model.userModels.User;


public interface UserService {

	Optional<User> findByEmail(String email);
	
	Optional<User> login(String email, String password);
	
	Optional<User> findById(Long id);
	
	void deleteUser(Long id);
	
	void saveUser(User user);
	
	Optional<User> updateDetails(User user);
	
	Optional<User> addContact(User user);
	
	Optional<User> addPhoneNumber(String number,Long id);
	
	Optional<User> deletePhoneNumber(String number, Long id);
	
	Optional<User> deleteContact(Long contactId, Long userId);
	
	List<User> findAll();
	
	
}
