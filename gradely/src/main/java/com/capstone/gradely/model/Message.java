package com.capstone.gradely.model;

import java.sql.Timestamp;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.*;

import com.capstone.gradely.model.userModels.User;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;


@Entity
public class Message {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO) //Generated Type Identity?
	private Long id;
	private String subject;
	private String bodyText;
	
	private Long sentById; //id of user it was sent by
	private String sentByName;
	private String sentByEmail;
	//@JsonBackReference
	
	@ManyToMany
	private List<User> recipients;
	
	private Timestamp sentOn;
	private Boolean sendEmail;
	
	
	
	public Message() {}

	
	
	
	

	public Long getSentById() {
		return sentById;
	}






	public void setSentById(Long sentById) {
		this.sentById = sentById;
	}






	public Boolean getSendEmail() {
		return sendEmail;
	}






	public void setSendEmail(Boolean sendEmail) {
		this.sendEmail = sendEmail;
	}






	public String getSentByName() {
		return sentByName;
	}






	public void setSentByName(String sentByName) {
		this.sentByName = sentByName;
	}






	public String getSentByEmail() {
		return sentByEmail;
	}






	public void setSentByEmail(String sentByEmail) {
		this.sentByEmail = sentByEmail;
	}






	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getSubject() {
		return subject;
	}


	public void setSubject(String subject) {
		this.subject = subject;
	}


	public String getBodyText() {
		return bodyText;
	}


	public void setBodyText(String bodyText) {
		this.bodyText = bodyText;
	}

	public List<User> getRecipients() {
		return recipients;
	}


	public void setRecipients(List<User> recipients) {
		this.recipients = recipients;
	}


	public Timestamp getSentOn() {
		return sentOn;
	}


	public void setSentOn(Timestamp sentOn) {
		this.sentOn = sentOn;
	}


	
	
	
	
	
}
