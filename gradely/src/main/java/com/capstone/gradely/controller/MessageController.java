package com.capstone.gradely.controller;

import java.sql.Timestamp;
import java.time.Instant;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.capstone.gradely.model.Message;
import com.capstone.gradely.model.userModels.User;
import com.capstone.gradely.repository.MessageRepository;
import com.capstone.gradely.repository.UserRepository;
import com.capstone.gradely.service.UserService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/message")
public class MessageController {
	//Create - DONE
	//Read - DONE
	//Update - NO UPDATING OF SENT MESSAGES - Could possibly update status of a message later
	//Delete - DONE
	
	//Extra usage
	//Contact List Search and Update
	//Contact List needs to be validated based on user type and lists
	
	
	@Autowired
	private UserService userService;
	
	@Autowired 
	private MessageRepository messageRepository;
	
	
	@GetMapping("/search/{keyword}")
	public Set<Message> searchMessages(@PathVariable String keyword) {
		return null;
	}
	
	@PostMapping("/getAllTotal") //FOr admin use only
	public Set<Message> getAllMessages() {
		return null;
	}
	
	@PostMapping("/getAllSent") //For that user only
	public Set<Message> sentMessages(@RequestParam Long id) {
		
		//Make a custom query here
		return null;
	}
	
//	@GetMapping("/all/{id}") //For that user only
//	 public List<Message> getMessages(@PathVariable Long id) {
//		return userService.findById(id).get().getMessages();
//	 }
	
	
	@GetMapping("/remove/{userId}/from/{messageId}")
	public List<Message> removeUserFromMessage(@PathVariable Long userId, @PathVariable Long messageId) {
		messageRepository.findById(messageId).ifPresent(m -> {
			List<User> userList = m.getRecipients();
			userList.remove(userService.findById(userId).get());
			m.setRecipients(userList);
			messageRepository.save(m);
		});
		
		return messageRepository.getUserMessages(userId);
	}
	
	@GetMapping("/get/{id}")
	public List<Message> getUserMessages(@PathVariable Long id) {
		List<Message> tempList = messageRepository.getUserMessages(id);
		
		return tempList;
	}
	
	@PostMapping("/send")
	public void sendMessage(@RequestBody Message message) {
		messageRepository.save(message);
	}
	
//	@GetMapping("/delete/{messageId}/{userId}")
//	public void deleteMessage(@PathVariable Long userId, @PathVariable Long messageId) {
//		userService.findById(userId).ifPresent(currentUser -> {
//			currentUser.removeMessage(messageRepository.findById(messageId).get());
//		});
//	}
	
}
