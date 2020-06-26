package com.capstone.gradely.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.capstone.gradely.model.Absent;

public interface AbsentRepository extends JpaRepository<Absent, Long> {

}
