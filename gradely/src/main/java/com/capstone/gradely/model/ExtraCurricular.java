package com.capstone.gradely.model;

import java.util.List;

import javax.persistence.*;

import com.capstone.gradely.model.enums.ActivityType;
import com.capstone.gradely.model.userModels.User;

@Entity
public class ExtraCurricular {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="id", updatable = false, nullable = false)
	private Long id;
	
	private ActivityType activityType;
	
	@ManyToMany(mappedBy = "extraCurriculars")
	private List<User> participants;
	
	private String description;
	
	
	
	
	public ExtraCurricular() {}




	public Long getId() {
		return id;
	}




	public void setId(Long id) {
		this.id = id;
	}




	public ActivityType getActivityType() {
		return activityType;
	}




	public void setActivityType(ActivityType activityType) {
		this.activityType = activityType;
	}




	public List<User> getParticipants() {
		return participants;
	}




	public void setParticipants(List<User> participants) {
		this.participants = participants;
	}




	public String getDescription() {
		return description;
	}




	public void setDescription(String description) {
		this.description = description;
	}




	@Override
	public String toString() {
		return "ExtraCurricular [id=" + id + ", activityType=" + activityType + ", participants=" + participants
				+ ", description=" + description + "]";
	}


	
	

	

	
}
