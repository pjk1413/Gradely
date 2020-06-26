package com.capstone.gradely.utils;

import java.io.Serializable;

import javax.persistence.Embeddable;

@Embeddable
public class StudentScoreId implements Serializable  {

	/**
	 * 
	 */
	private static final long serialVersionUID = -2860921194216546287L;

	private Long studentId;
	private Long courseId;
	private Long assignmentId;
	
	public StudentScoreId() {}
	
	public StudentScoreId(Long studentId, Long courseId, Long assignmentId) {
		this.studentId = studentId;
		this.courseId = courseId;
		this.assignmentId = assignmentId;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	public Long getStudentId() {
		return studentId;
	}

	public Long getCourseId() {
		return courseId;
	}

	public Long getAssignmentId() {
		return assignmentId;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((assignmentId == null) ? 0 : assignmentId.hashCode());
		result = prime * result + ((courseId == null) ? 0 : courseId.hashCode());
		result = prime * result + ((studentId == null) ? 0 : studentId.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		StudentScoreId other = (StudentScoreId) obj;
		if (assignmentId == null) {
			if (other.assignmentId != null)
				return false;
		} else if (!assignmentId.equals(other.assignmentId))
			return false;
		if (courseId == null) {
			if (other.courseId != null)
				return false;
		} else if (!courseId.equals(other.courseId))
			return false;
		if (studentId == null) {
			if (other.studentId != null)
				return false;
		} else if (!studentId.equals(other.studentId))
			return false;
		return true;
	}
	
	
	
	
}
