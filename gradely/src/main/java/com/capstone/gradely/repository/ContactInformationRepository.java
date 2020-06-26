package com.capstone.gradely.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.capstone.gradely.model.ContactInformation;

public interface ContactInformationRepository extends JpaRepository<ContactInformation, Long>{

}
