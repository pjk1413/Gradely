package com.capstone.gradely.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.capstone.gradely.model.ToDoItem;

public interface ToDoItemRepository extends JpaRepository<ToDoItem, Long> {

}
