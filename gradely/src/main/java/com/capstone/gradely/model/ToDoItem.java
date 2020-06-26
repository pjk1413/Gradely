package com.capstone.gradely.model;

import javax.persistence.*;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.capstone.gradely.model.userModels.User;

@Entity
public class ToDoItem {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	
	private Long tempUserId;
	
	private String description;
	private Boolean checked;
	
	
	public ToDoItem() {}

	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}


	public Boolean getChecked() {
		return checked;
	}

	public void setChecked(Boolean checked) {
		this.checked = checked;
	}


	public Long getTempUserId() {
		return tempUserId;
	}


	public void setTempUserId(Long tempUserId) {
		this.tempUserId = tempUserId;
	}


	@Override
	public String toString() {
		return "ToDoItem [id=" + id + ", tempUserId=" + tempUserId + ", description=" + description + ", checked="
				+ checked + "]";
	}






	
	
	
}
