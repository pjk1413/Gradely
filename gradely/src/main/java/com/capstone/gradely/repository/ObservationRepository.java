package com.capstone.gradely.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.capstone.gradely.model.Observation;

public interface ObservationRepository extends JpaRepository<Observation, Long>{

}
