package com.capstone.gradely.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.capstone.gradely.model.Discipline;

public interface DisciplineRepository extends JpaRepository<Discipline, Long> {

}
