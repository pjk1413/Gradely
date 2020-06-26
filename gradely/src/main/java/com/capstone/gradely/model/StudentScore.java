package com.capstone.gradely.model;


import javax.persistence.*;

import com.capstone.gradely.model.userModels.Student;
import com.capstone.gradely.utils.StudentScoreId;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
public class StudentScore {
	
	@Id
	@GeneratedValue
	private Long id;
	
	private Long assignmentTempId;
	private Long studentTempId;
	private Long courseTempId;
	
	@JsonBackReference(value="assignment")
	@ManyToOne
	private Assignment assignment;
	
	@JsonBackReference(value="student")
	@ManyToOne
	private Student student;

	private String name;
	private String description;
	private String dueDate;
	
	private Integer totalPoints;
	private Integer points = null;
	private String notes;
	private Boolean turnedIn = false;
	
	// ********************* CONSTRUCTOR *************************
	
	public StudentScore() {}

	// *********************** GETTERS AND SETTERS *******************


	public Assignment getAssignment() {
		return assignment;
	}
	public Student getStudent() {	
		return student;
	}
	
//	public Long getStudent() {
//		return student.getId();
//	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getDueDate() {
		return dueDate;
	}

	public void setDueDate(String dueDate) {
		this.dueDate = dueDate;
	}

	public Integer getTotalPoints() {
		return totalPoints;
	}

	public void setTotalPoints(Integer totalPoints) {
		this.totalPoints = totalPoints;
	}

	public Long getAssignmentTempId() {
		return assignmentTempId;
	}

	public Long getCourseTempId() {
		return courseTempId;
	}

	public void setCourseTempId(Long courseId) {
		this.courseTempId = courseId;
	}

	public void setAssignmentTempId(Long assignmentTempId) {
		this.assignmentTempId = assignmentTempId;
	}

	public Long getStudentTempId() {
		return studentTempId;
	}

	public void setStudentTempId(Long studentTempId) {
		this.studentTempId = studentTempId;
	}

	public void setStudent(Student student) {
		this.student = student;
	}
	
//	public Long getAssignment() {
//		return assignment.getId();
//	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public void setAssignment(Assignment assignment) {
		this.assignment = assignment;
	}

	public Integer getPoints() {
		return points;
	}

	public void setPoints(Integer points) {
		this.points = points;
	}

	public String getNotes() {
		return notes;
	}
	
	public void setNotes(String notes) {
		this.notes = notes;
	}

	public Boolean getTurnedIn() {
		return turnedIn;
	}

	public void setTurnedIn(Boolean turnedIn) {
		this.turnedIn = turnedIn;
	}

	@Override
	public String toString() {
		return "StudentScore [id=" + id + ", assignmentTempId=" + assignmentTempId + ", studentTempId=" + studentTempId
				+ ", courseTempId=" + courseTempId + ", assignment=" + assignment + ", student=" + student + ", name="
				+ name + ", description=" + description + ", dueDate=" + dueDate + ", totalPoints=" + totalPoints
				+ ", points=" + points + ", notes=" + notes + ", turnedIn=" + turnedIn + "]";
	}

	

	


	
}
