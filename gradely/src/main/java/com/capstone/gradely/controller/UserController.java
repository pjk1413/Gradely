package com.capstone.gradely.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import org.springframework.web.bind.annotation.RestController;

import com.capstone.gradely.model.Calendar;
import com.capstone.gradely.model.ToDoItem;
import com.capstone.gradely.model.enums.States;

import com.capstone.gradely.model.userModels.User;
import com.capstone.gradely.repository.CalendarRepository;
import com.capstone.gradely.repository.ToDoItemRepository;
import com.capstone.gradely.service.UserService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/")
public class UserController {

	@Autowired
	private UserService userService;
	
	@Autowired
	private CalendarRepository calendarRepository;
	
	@Autowired
	private ToDoItemRepository toDoItemRepository;


	@GetMapping("getStates")
	public States[] getStates() {
		return States.values();
	}
	
	@GetMapping("/user/all")
	public List<User> getAllUsers() {
		return userService.findAll();
	}

	@GetMapping("/user/find/{id}")
	public User findById(@PathVariable Long id) {
		return userService.findById(id).get();
	}

	@PostMapping("/user/update/details")
	public User userUpdateDetails(@RequestBody User user) {
		return userService.updateDetails(user).get();
	}

	@PostMapping("/user/add/contact")
	public User userAddContact(@RequestBody User user) {
		return userService.addContact(user).get();
	}

	@PostMapping("/user/delete/contact/")
	public User deleteContact(@RequestParam Long contactId, @RequestParam Long userId) {
		return userService.deleteContact(contactId, userId).get();
	}

	@PostMapping("/user/add/phone/")
	public User userAddPhone(@RequestParam String phone, @RequestParam Long userId) {
		return userService.addPhoneNumber(phone, userId).get();
	}

	@PostMapping("/user/delete/phone/")
	public User userDeletePhone(@RequestParam String phone, @RequestParam Long userId) {
		return userService.deletePhoneNumber(phone, userId).get();
	}
	
	@GetMapping("/user/removeCalendarItem/{calendarId}")
	public void removeCalendarItem(@PathVariable Long calendarId) {
		calendarRepository.deleteById(calendarId);
	}
	
	@GetMapping("/user/updateToDoItem/{itemId}")
	public ToDoItem updateToDoItem(Long itemId) {
		toDoItemRepository.findById(itemId).ifPresent(item -> {
			item.setChecked(!item.getChecked());
			toDoItemRepository.save(item);
		});
		
		return toDoItemRepository.findById(itemId).get();
	}
	
	@GetMapping("/user/removeToDoItem/{itemId}")
	public void removeToDoItem(@PathVariable Long itemId) {
		toDoItemRepository.deleteById(itemId);
	}
	
	@PostMapping("/user/addToDoItem")
	public ToDoItem addToDoItem(@RequestBody ToDoItem item) {
		ToDoItem newItem = toDoItemRepository.save(item);
		
		userService.findById(item.getTempUserId()).ifPresent(currentUser -> {
			List<ToDoItem> items = currentUser.getToDoList();
			items.add(newItem);
			currentUser.setToDoList(items);
			userService.saveUser(currentUser);
		});
		
		return newItem;
	}
	
	@PostMapping("/user/addCalendarItem/")
	public User addCalendarItem(@RequestBody Calendar calendar, @RequestParam Long userId) {
		Calendar c = calendarRepository.save(calendar);
		
		userService.findById(userId).ifPresent(currentUser -> {
			List<Calendar> calendarList = currentUser.getCalendarList();
			calendarList.add(calendar);
			currentUser.setCalendarList(calendarList);
			userService.saveUser(currentUser);
		});
		System.out.println(userId);
		return userService.findById(userId).get();
	}

}
