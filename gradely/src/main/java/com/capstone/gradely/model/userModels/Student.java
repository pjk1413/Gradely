package com.capstone.gradely.model.userModels;

import java.sql.Date;
import java.util.List;

import javax.persistence.*;

import com.capstone.gradely.model.Absent;
import com.capstone.gradely.model.Course;
import com.capstone.gradely.model.Discipline;
import com.capstone.gradely.model.StudentScore;
import com.capstone.gradely.model.enums.Race;
import com.capstone.gradely.model.enums.Religion;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
public class Student {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	
	@OneToOne(cascade = CascadeType.ALL)
	private User user;
	
	private Date enrollemtDate;
	private Date exitDate;
	private Boolean droppedOut = false;
	
	private Integer grade;
	
	private Boolean specialEducationFlag = false;
	private String specialEducationDescription; //would usually have a whole other pop out here.
	
	private Boolean housingFlag = false;
	private String housingFlagDescription;
	
	private Boolean freeReducedLunch = false;
	
	private String stateIdNumber;
	private String gender;
	private String countryOfBirth;
	private Date entryIntoCountry;
	private Race race;
	private Religion religion;
	
	@OneToMany(cascade=CascadeType.ALL)
	@JoinColumn(name="user_id")
	private List<Discipline> discipline;
	
	@OneToMany(cascade=CascadeType.ALL)
	@JoinColumn(name="user_id")
	private List<Absent> attendance;
	
	@JsonManagedReference(value="student")
	@OneToMany
	private List<StudentScore> studentScores;
	
	// ***************** METHOD ************************
	
	public void addStudentAssignment(StudentScore studentAssignment) {
		studentScores.add(studentAssignment);
	}
	
	//**************************** CONSTRUCTORS ************************************
	
	public Student() {}
	
	//**************************** GETTERS AND SETTERS *****************************

	
	
	
	public Date getEnrollemtDate() {
		return enrollemtDate;
	}


	public List<StudentScore> getStudentScores() {
		return studentScores;
	}

	public void setStudentScores(List<StudentScore> studentScores) {
		this.studentScores = studentScores;
	}

	public List<StudentScore> getAssignmentScores() {
		return studentScores;
	}

	public void setAssignmentScores(List<StudentScore> assignmentScores) {
		this.studentScores = assignmentScores;
	}

	public Integer getGrade() {
		return grade;
	}


	public void setGrade(Integer grade) {
		this.grade = grade;
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


	public void setEnrollemtDate(Date enrollemtDate) {
		this.enrollemtDate = enrollemtDate;
	}


	public Date getExitDate() {
		return exitDate;
	}


	public void setExitDate(Date exitDate) {
		this.exitDate = exitDate;
	}


	public Boolean getDroppedOut() {
		return droppedOut;
	}


	public void setDroppedOut(Boolean droppedOut) {
		this.droppedOut = droppedOut;
	}


	public Boolean getSpecialEducationFlag() {
		return specialEducationFlag;
	}


	public void setSpecialEducationFlag(Boolean specialEducationFlag) {
		this.specialEducationFlag = specialEducationFlag;
	}


	public String getSpecialEducationDescription() {
		return specialEducationDescription;
	}


	public void setSpecialEducationDescription(String specialEducationDescription) {
		this.specialEducationDescription = specialEducationDescription;
	}


	public Boolean getHousingFlag() {
		return housingFlag;
	}


	public void setHousingFlag(Boolean housingFlag) {
		this.housingFlag = housingFlag;
	}


	public String getHousingFlagDescription() {
		return housingFlagDescription;
	}


	public void setHousingFlagDescription(String housingFlagDescription) {
		this.housingFlagDescription = housingFlagDescription;
	}


	public Boolean getFreeReducedLunch() {
		return freeReducedLunch;
	}


	public void setFreeReducedLunch(Boolean freeReducedLunch) {
		this.freeReducedLunch = freeReducedLunch;
	}


	public String getStateIdNumber() {
		return stateIdNumber;
	}


	public void setStateIdNumber(String stateIdNumber) {
		this.stateIdNumber = stateIdNumber;
	}


	public String getGender() {
		return gender;
	}


	public void setGender(String gender) {
		this.gender = gender;
	}


	public String getCountryOfBirth() {
		return countryOfBirth;
	}


	public void setCountryOfBirth(String countryOfBirth) {
		this.countryOfBirth = countryOfBirth;
	}


	public Date getEntryIntoCountry() {
		return entryIntoCountry;
	}


	public void setEntryIntoCountry(Date entryIntoCountry) {
		this.entryIntoCountry = entryIntoCountry;
	}


	public Race getRace() {
		return race;
	}


	public void setRace(Race race) {
		this.race = race;
	}


	public Religion getReligion() {
		return religion;
	}


	public void setReligion(Religion religion) {
		this.religion = religion;
	}


	public List<Discipline> getDiscipline() {
		return discipline;
	}


	public void setDiscipline(List<Discipline> discipline) {
		this.discipline = discipline;
	}


	public List<Absent> getAttendance() {
		return attendance;
	}


	public void setAttendance(List<Absent> attendance) {
		this.attendance = attendance;
	}

	@Override
	public String toString() {
		return "Student [id=" + id + ", user=" + user + ", enrollemtDate=" + enrollemtDate + ", exitDate=" + exitDate
				+ ", droppedOut=" + droppedOut + ", grade=" + grade + ", specialEducationFlag=" + specialEducationFlag
				+ ", specialEducationDescription=" + specialEducationDescription + ", housingFlag=" + housingFlag
				+ ", housingFlagDescription=" + housingFlagDescription + ", freeReducedLunch=" + freeReducedLunch
				+ ", stateIdNumber=" + stateIdNumber + ", gender=" + gender + ", countryOfBirth=" + countryOfBirth
				+ ", entryIntoCountry=" + entryIntoCountry + ", race=" + race + ", religion=" + religion
				+ ", discipline=" + discipline + ", attendance=" + attendance + ", studentScores=" + studentScores
				+ "]";
	}



	
	
	
	
	
}
