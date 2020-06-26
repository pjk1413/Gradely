package com.capstone.gradely.model;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.*;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.capstone.gradely.model.enums.Infraction;

@Entity
public class Discipline {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="id", updatable = false, nullable = false)
	private Long id;
	
	private Infraction infractionType;
	private Date infractionDate;
	private Boolean completed;
	private String description;
	
	
	public Discipline() {}


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public Infraction getInfractionType() {
		return infractionType;
	}


	public void setInfractionType(Infraction infractionType) {
		this.infractionType = infractionType;
	}


	public Date getInfractionDate() {
		return infractionDate;
	}


	public void setInfractionDate(Date infractionDate) {
		this.infractionDate = infractionDate;
	}


	public Boolean getCompleted() {
		return completed;
	}


	public void setCompleted(Boolean completed) {
		this.completed = completed;
	}


	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
	}


	@Override
	public String toString() {
		return "Discipline [id=" + id + ", infractionType=" + infractionType + ", infractionDate=" + infractionDate
				+ ", completed=" + completed + ", description=" + description + "]";
	}
	
	
	
	
}
