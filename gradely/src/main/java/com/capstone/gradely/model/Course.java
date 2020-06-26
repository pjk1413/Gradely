package com.capstone.gradely.model;

import java.sql.Date;
import java.util.List;

import javax.persistence.*;

import com.capstone.gradely.model.userModels.Student;
import com.capstone.gradely.model.userModels.Teacher;

@Entity
public class Course {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	
	private Date startDate;
	private Date endDate;
	
	private String name;
	
	@ManyToOne
	@JoinColumn(name = "teacher_id")
	private Teacher teacher;
	
	private String time;
	
	private String meetsOn; //M,T,W,Th,F,S,Su - use a string to determine what days it meets on
	
	private String room;
	
	@ManyToMany
	@JoinColumn(name = "student_id")
	private List<Student> students;
	
	@OneToMany
	private List<Assignment> assignments;
	
	
	
	//************ METHODS ***************************
	
//	public void addStudent(Student student) {
//		studentList.add(student);
//		List<Course> tempCourseList = student.getCourseList();
//		tempCourseList.add(this);
//		student.setCourseList(tempCourseList);
//	}
//	
//	public void removeStudent(Student student) {
//		studentList.remove(student);
//		List<Course> tempCourseList = student.getCourseList();
//		tempCourseList.remove(this);
//		student.setCourseList(tempCourseList);
//	}
	
	public void addAssignment(Assignment assignment) {
        assignments.add(assignment);
    }

    public void removeAssignment(Assignment assignment) {
        assignments.remove(assignment);
    }
	
    
    // ************************ CONSTRUCTOR ***********************************
    
	public Course() {}


	// ************************** GETTERS AND SETTERS ****************************

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public Date getEndDate() {
		return endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}

	public Teacher getTeacher() {
		return teacher;
	}

	
	public void setTeacher(Teacher teacher) {
		this.teacher = teacher;
	}

	public String getTime() {
		return time;
	}

	public void setTime(String time) {
		this.time = time;
	}

	public String getMeetsOn() {
		return meetsOn;
	}

	public void setMeetsOn(String meetsOn) {
		this.meetsOn = meetsOn;
	}

	public String getRoom() {
		return room;
	}

	public void setRoom(String room) {
		this.room = room;
	}


	public List<Assignment> getAssignments() {
		return assignments;
	}

	public void setAssignments(List<Assignment> assignments) {
		this.assignments = assignments;
	}

	public List<Student> getStudents() {
		return students;
	}

	public void setStudents(List<Student> students) {
		this.students = students;
	}

	@Override
	public String toString() {
		return "Course [id=" + id + ", startDate=" + startDate + ", endDate=" + endDate + ", name=" + name
				+ ", teacher=" + teacher + ", time=" + time + ", meetsOn=" + meetsOn + ", room=" + room + ", students="
				+ students + ", assignments=" + assignments + "]";
	}







	
	
	



	
	
	
	
}
