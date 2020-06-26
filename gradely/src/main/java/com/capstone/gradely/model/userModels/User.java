package com.capstone.gradely.model.userModels;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import javax.persistence.*;

import com.capstone.gradely.model.Calendar;
import com.capstone.gradely.model.ContactInformation;
import com.capstone.gradely.model.ExtraCurricular;
import com.capstone.gradely.model.Message;
import com.capstone.gradely.model.ToDoItem;
import com.capstone.gradely.model.enums.UserType;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
public class User {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	
	private String picture;
	private String firstName;
	private String lastName;
	private String dob;
	
	private String email;
	private String password;
	
	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	@JoinColumn(name = "user_id")
	private List<ContactInformation> contactInformation;
	
	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	@JoinColumn(name="user_id")
	private List<Calendar> calendarList; 
	
	@ElementCollection
	@CollectionTable(name="phoneNumbers", joinColumns=@JoinColumn(name="user_id"))
	@Column(name="phone")
	private List<String> phone;
	
	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	@JoinColumn(name = "user_id")
	private List<ToDoItem> toDoList;
	
	@ManyToMany
	private List<ExtraCurricular> extraCurriculars;
	
	// *********************  METHODS *****************************************
	

	
	//********************** CONSTRUCTORS ****************************************
	
	public User() {}

	

	
	//********************** GETTERS AND SETTERS ************************************
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}


	public String getPicture() {
		return picture;
	}


	public void setPicture(String picture) {
		this.picture = picture;
	}


	public String getFirstName() {
		return firstName;
	}


	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}




	public String getLastName() {
		return lastName;
	}




	public void setLastName(String lastName) {
		this.lastName = lastName;
	}




	public String getDob() {
		return dob;
	}




	public void setDob(String dob) {
		this.dob = dob;
	}




	public String getEmail() {
		return email;
	}




	public void setEmail(String email) {
		this.email = email;
	}




	public String getPassword() {
		return password;
	}




	public void setPassword(String password) {
		this.password = password;
	}




	public List<ContactInformation> getContactInformation() {
		return contactInformation;
	}




	public void setContactInformation(List<ContactInformation> contactInformation) {
		this.contactInformation = contactInformation;
	}




	public List<Calendar> getCalendarList() {
		return calendarList;
	}




	public void setCalendarList(List<Calendar> calendarList) {
		this.calendarList = calendarList;
	}




	public List<String> getPhone() {
		return phone;
	}




	public void setPhone(List<String> phone) {
		this.phone = phone;
	}




//	public List<Message> getMessages() {
//		return messages;
//	}
//
//
//
//
//	public void setMessages(List<Message> messages) {
//		this.messages = messages;
//	}




	public List<ExtraCurricular> getExtraCurriculars() {
		return extraCurriculars;
	}




	public List<ToDoItem> getToDoList() {
		return toDoList;
	}




	public void setToDoList(List<ToDoItem> toDoList) {
		this.toDoList = toDoList;
	}




	public void setExtraCurriculars(List<ExtraCurricular> extraCurriculars) {
		this.extraCurriculars = extraCurriculars;
	}




	@Override
	public String toString() {
		return "User [id=" + id + ", picture=" + picture + ", firstName=" + firstName + ", lastName=" + lastName
				+ ", dob=" + dob + ", email=" + email + ", password=" + password + ", contactInformation="
				+ contactInformation + ", calendarList=" + calendarList + ", phone=" + phone + ", toDoList=" + toDoList
				+ ", extraCurriculars=" + extraCurriculars + "]";
	}















	
	




	
	


	
	
	
	
	
}
