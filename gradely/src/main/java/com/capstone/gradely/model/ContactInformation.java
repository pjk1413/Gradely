package com.capstone.gradely.model;

import javax.persistence.*;

import com.capstone.gradely.model.userModels.User;
import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity
public class ContactInformation {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	
	private String address;
	private String unit;
	private String city;
	private String state;
	private String zipcode;
	
	@ManyToOne
	@JoinColumn(name = "user_id")
	private User user;
	
	
	public ContactInformation() {}

	
	
	@JsonIgnore
	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getZipcode() {
		return zipcode;
	}

	public void setZipcode(String zipcode) {
		this.zipcode = zipcode;
	}



	public String getUnit() {
		return unit;
	}



	public void setUnit(String unit) {
		this.unit = unit;
	}






	@Override
	public String toString() {
		return "ContactInformation [id=" + id + ", address=" + address + ", unit=" + unit + ", city=" + city
				+ ", state=" + state + ", zipcode=" + zipcode + "]";
	}





	
	
	
	
}
