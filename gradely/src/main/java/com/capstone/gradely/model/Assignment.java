package com.capstone.gradely.model;

import java.util.List;

import javax.persistence.*;

import com.capstone.gradely.model.enums.AssignmentType;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
public class Assignment {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	
	private Long courseId;
//	@JsonBackReference
//	@ManyToOne(fetch = FetchType.LAZY)
//	@JoinColumn(name = "course_id")
//	private Course course;
	
	private String name;
	private Integer totalPoints;
	private String description;
	private String dueDate;
	
	private AssignmentType assignmentType;
	
	@JsonManagedReference(value="assignment")
	@OneToMany
	private List<StudentScore> assignmentScores;
	
	
	// ******************* METHODS **********************
	
	public void addStudentAssignment(StudentScore studentAssignment) {
		assignmentScores.add(studentAssignment);
	}

	// ************************** CONSTRUCTOR *************************************
	
	public Assignment() {}


	// ************************** GETTERS AND SETTERS ***********************************
	



	public List<StudentScore> getAssignmentScores() {
		return assignmentScores;
	}


	public void setAssignmentScores(List<StudentScore> assignmentScores) {
		this.assignmentScores = assignmentScores;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}

	public String getDueDate() {
		return dueDate;
	}

	public void setDueDate(String dueDate) {
		this.dueDate = dueDate;
	}


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public Integer getTotalPoints() {
		return totalPoints;
	}


	public void setTotalPoints(Integer totalPoints) {
		this.totalPoints = totalPoints;
	}


	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
	}


	public AssignmentType getAssignmentType() {
		return assignmentType;
	}


	public void setAssignmentType(AssignmentType assignmentType) {
		this.assignmentType = assignmentType;
	}


	public Long getCourseId() {
		return courseId;
	}


	public void setCourseId(Long course_id) {
		this.courseId = course_id;
	}


	@Override
	public String toString() {
		return "Assignment [id=" + id + ", name=" + name + ", totalPoints=" + totalPoints + ", description="
				+ description + ", dueDate=" + dueDate + ", assignmentType=" + assignmentType + ", assignmentScores="
				+ assignmentScores + "]";
	}







	
	
	
	
	
	
}
