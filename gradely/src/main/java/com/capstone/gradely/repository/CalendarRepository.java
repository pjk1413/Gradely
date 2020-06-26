package com.capstone.gradely.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.capstone.gradely.model.Calendar;

public interface CalendarRepository extends JpaRepository<Calendar, Long> {

}
