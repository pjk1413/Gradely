package com.capstone.gradely.model.userModels;

import java.util.List;

import javax.persistence.*;

import com.capstone.gradely.model.Observation;

@Entity
public class Administration {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	
	@OneToOne(cascade = CascadeType.ALL)
	private User user;
	
	private String staff = "admin";
	
	private Integer salary;
	private Integer personalTimeOff;
	private Integer sickTimeOff;
	
	@OneToMany
	private List<Observation> observations;
	
	
	// ************************ CONSTRUCTOR ********************************
	
	public Administration() {}
	
	// ************************ GETTERS AND SETTERS ****************************

	
	
	public Long getId() {
		return id;
	}


	public String getStaff() {
		return staff;
	}

	public void setStaff(String staff) {
		this.staff = staff;
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


	public Integer getSalary() {
		return salary;
	}


	public void setSalary(Integer salary) {
		this.salary = salary;
	}


	public Integer getPersonalTimeOff() {
		return personalTimeOff;
	}


	public void setPersonalTimeOff(Integer personalTimeOff) {
		this.personalTimeOff = personalTimeOff;
	}


	public Integer getSickTimeOff() {
		return sickTimeOff;
	}


	public void setSickTimeOff(Integer sickTimeOff) {
		this.sickTimeOff = sickTimeOff;
	}


	public List<Observation> getObservations() {
		return observations;
	}


	public void setObservations(List<Observation> observations) {
		this.observations = observations;
	}

	@Override
	public String toString() {
		return "Administration [id=" + id + ", user=" + user + ", salary=" + salary + ", personalTimeOff="
				+ personalTimeOff + ", sickTimeOff=" + sickTimeOff + ", observations=" + observations + "]";
	}

	
	
	
	
	
	
	
	
	
	
	
}
