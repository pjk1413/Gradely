package com.capstone.gradely.service;

import java.util.List;

import com.capstone.gradely.model.ContactInformation;

public interface ContactInformationService {

	void deleteContact(Long id);
	void saveContact(ContactInformation contactInformation);
	
	List<ContactInformation> findAll();
}
