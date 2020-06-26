package com.capstone.gradely.model;




import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Absent {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="id", updatable = false, nullable = false)
	private Long id;
	//use index as a way to determine which hour student was absent
	
	private Integer hoursAbsent;
	private String description;
	private Boolean excused;
	
	
	public Absent() {}


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public Integer getHoursAbsent() {
		return hoursAbsent;
	}


	public void setHoursAbsent(Integer hoursAbsent) {
		this.hoursAbsent = hoursAbsent;
	}


	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
	}


	public Boolean getExcused() {
		return excused;
	}


	public void setExcused(Boolean excused) {
		this.excused = excused;
	}


	@Override
	public String toString() {
		return "Absent [id=" + id + ", hoursAbsent=" + hoursAbsent + ", description=" + description + ", excused="
				+ excused + "]";
	}
	
	
	
}
