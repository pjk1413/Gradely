package com.capstone.gradely.model;

import java.sql.Date;

import javax.persistence.*;

import com.capstone.gradely.model.enums.Frequency;

@Entity
public class Calendar {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="id", updatable = false, nullable = false)
	private Long id;
	
	private Date date;
	private String description;
	
	
	public Calendar() {}


	
	
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}


	public Date getDate() {
		return date;
	}


	public void setDate(Date date) {
		this.date = date;
	}


	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
	}





	@Override
	public String toString() {
		return "Calendar [id=" + id + ", date=" + date + ", description=" + description + "]";
	}





	
	
	
	
	
	
}
