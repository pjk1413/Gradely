package com.capstone.gradely.impl;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import com.capstone.gradely.model.ContactInformation;
import com.capstone.gradely.model.userModels.Student;
import com.capstone.gradely.model.userModels.User;
import com.capstone.gradely.repository.UserRepository;
import com.capstone.gradely.service.UserService;

@Service
@Transactional
public class UserImpl implements UserService {
	
	@Autowired
	private UserRepository userRepository;
	
	@Override
	public Optional<User> findByEmail(String email) {
		return userRepository.findByEmail(email);
	}

	@Override
	public Optional<User> findById(Long id) {
		return userRepository.findById(id);
	}

	@Override
	public void deleteUser(Long id) {
		userRepository.deleteById(id);
	}

	@Override
	public void saveUser(User user) {
		userRepository.save(user);
	}


	@Override
	public Optional<User> login(String email, String password) {
		return userRepository.login(email, password);
	}
	
	public Optional<User> editDetails(User user) {
		return userRepository.findById(user.getId());
	}
	
	
	//Update user details (first,last,email,password,dob)
	@Override
	public Optional<User> updateDetails(User newUser) {

		userRepository.findById(newUser.getId()).ifPresent(user -> {
			
			user.setFirstName(newUser.getFirstName());
			user.setLastName(newUser.getLastName());
			user.setEmail(newUser.getEmail());
			user.setPassword(newUser.getPassword());
			user.setDob(newUser.getDob());
			
			userRepository.save(user);
		});
		
		return userRepository.findById(newUser.getId());
	}

	
	//Add contact to user list of contacts
	@Override
	public Optional<User> addContact(User newUser) {
		userRepository.findById(newUser.getId()).ifPresent(user -> {
			List<ContactInformation> contactList = user.getContactInformation();
			
			contactList.add(newUser.getContactInformation().get(0));
			user.setContactInformation(contactList);
			
			userRepository.save(user);
		});
		
		return userRepository.findById(newUser.getId());
	}
	
	
	
	//Add phone number to user list of phone numbers
	@Override
	public Optional<User> addPhoneNumber(@RequestParam String number, @RequestParam Long id) {
		userRepository.findById(id).ifPresent(user -> {
			
			List<String> numbers = user.getPhone();
			numbers.add(number);
			user.setPhone(numbers);
			userRepository.save(user);
		});
		
		return userRepository.findById(id);
	}

	
	//Delete a phone number from a users list
	@Override
	public Optional<User> deletePhoneNumber(@RequestParam String number, @RequestParam Long id) {
		
		userRepository.findById(id).ifPresent(user -> {
			
			user.getPhone().remove(number);
			
			userRepository.save(user);
		});
		
		return userRepository.findById(id);
	}

	@Override
	public Optional<User> deleteContact(Long contactId, Long userId) {
		
		userRepository.findById(userId).ifPresent(user -> {
			List<ContactInformation> contactInfo = user.getContactInformation();
			
			
			for (int i = 0; i < contactInfo.size(); i++) {
				if (contactInfo.get(i).getId().equals(contactId)) {

					contactInfo.remove(i);
				}
			}
			
			user.setContactInformation(contactInfo);
			userRepository.save(user);
		});
		
		return userRepository.findById(userId);
	}

	@Override
	public List<User> findAll() {
		return userRepository.findAll();
	}
	
	
}
