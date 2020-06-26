package com.capstone.gradely.model.userModels;

import java.util.List;

import javax.persistence.*;

import com.capstone.gradely.model.Course;
import com.capstone.gradely.model.ExtraCurricular;
import com.capstone.gradely.model.Observation;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

//@JsonIdentityInfo(
//		  generator = ObjectIdGenerators.PropertyGenerator.class, 
//		  property = "id")
@Entity
public class Teacher {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	
	@OneToOne(cascade = CascadeType.ALL)
	private User user;

	private Integer personalDevelopmentHours;
	
	private String staff = "teacher";
	
	private Integer salary;
	private Integer personalTimeOff;
	private Integer sickTimeOff;
	
	@ElementCollection
	@CollectionTable(name="certifications", joinColumns=@JoinColumn(name="user_id"))
	@Column(name="certification")
	private List<String> certifications;
	
	@OneToMany(cascade=CascadeType.ALL)
	@JoinColumn(name="user_id")
	private List<ExtraCurricular> extraCurricularActivities;
	
	@OneToMany(cascade=CascadeType.ALL)
	private List<Observation> observationList; 
	
//	@JsonManagedReference
//	@OneToMany(
//	        mappedBy = "teacher",
//	        cascade = CascadeType.ALL,
//	        fetch = FetchType.LAZY
//	    )
//	private List<Course> courseList;
	
	
	//*********************** CONSTRUCTORS **********************************
	
	public Teacher() {}
	
	
	//********************** GETTERS AND SETTERS ****************************


	public Integer getSalary() {
		return salary;
	}

	

	public String getStaff() {
		return staff;
	}


	public void setStaff(String staff) {
		this.staff = staff;
	}


	public Long getId() {
		return id;
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


	public Integer getPersonalDevelopmentHours() {
		return personalDevelopmentHours;
	}


	public void setPersonalDevelopmentHours(Integer personalDevelopmentHours) {
		this.personalDevelopmentHours = personalDevelopmentHours;
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


	public List<String> getCertifications() {
		return certifications;
	}


	public void setCertifications(List<String> certifications) {
		this.certifications = certifications;
	}


	public List<ExtraCurricular> getExtraCurricularActivities() {
		return extraCurricularActivities;
	}


	public void setExtraCurricularActivities(List<ExtraCurricular> extraCurricularActivities) {
		this.extraCurricularActivities = extraCurricularActivities;
	}


	public List<Observation> getObservationList() {
		return observationList;
	}


	public void setObservationList(List<Observation> observationList) {
		this.observationList = observationList;
	}

	@Override
	public String toString() {
		return "Teacher [id=" + id + ", user=" + user + ", personalDevelopmentHours=" + personalDevelopmentHours
				+ ", staff=" + staff + ", salary=" + salary + ", personalTimeOff=" + personalTimeOff + ", sickTimeOff="
				+ sickTimeOff + ", certifications=" + certifications + ", extraCurricularActivities="
				+ extraCurricularActivities + ", observationList=" + observationList + "]";
	}





	
	

	
	
	
	
	
	
	
	
}
