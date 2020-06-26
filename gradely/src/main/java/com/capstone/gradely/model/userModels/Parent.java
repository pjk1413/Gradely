package com.capstone.gradely.model.userModels;

import java.util.List;

import javax.persistence.*;

@Entity
public class Parent {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	
	@OneToOne(cascade = CascadeType.ALL)
	private User user;
	
	@OneToMany
	private List<Student> students;
	
	// ************************** CONSTRUCTOR ************************************
	
	public Parent() {}

	// *************************** GETTERS AND SETTERS *****************************
	
	public List<Student> getStudents() {
		return students;
	}

	public void setStudents(List<Student> students) {
		this.students = students;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	@Override
	public String toString() {
		return "Parent [id=" + id + ", user=" + user + ", students=" + students + "]";
	}
	
	
	
	
	
	
	
}
