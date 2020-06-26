package com.capstone.gradely.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.capstone.gradely.model.ContactInformation;
import com.capstone.gradely.repository.ContactInformationRepository;
import com.capstone.gradely.service.ContactInformationService;

public class ContactInformationImpl implements ContactInformationService {

	@Autowired
	ContactInformationRepository contactInformationRepository;

	@Override
	public void deleteContact(Long id) {
		contactInformationRepository.deleteById(id);
	}

	@Override
	public void saveContact(ContactInformation contactInformation) {
		contactInformationRepository.save(contactInformation);
	}

	@Override
	public List<ContactInformation> findAll() {
		return contactInformationRepository.findAll();
	}
}
