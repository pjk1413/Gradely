package com.capstone.gradely.model;

import javax.persistence.*;


@Entity
public class Observation {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="id", updatable = false, nullable = false)
	private Long id;
	
	private Integer highestScore = 10;
	private Integer score;
	private String notes;
	
	
	public Observation() {}


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public Integer getHighestScore() {
		return highestScore;
	}


	public void setHighestScore(Integer highestScore) {
		this.highestScore = highestScore;
	}


	public Integer getScore() {
		return score;
	}


	public void setScore(Integer score) {
		this.score = score;
	}


	public String getNotes() {
		return notes;
	}


	public void setNotes(String notes) {
		this.notes = notes;
	}


	@Override
	public String toString() {
		return "Observation [id=" + id + ", highestScore=" + highestScore + ", score=" + score + ", notes=" + notes
				+ "]";
	}

	
	
	

	
	
}
