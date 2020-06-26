package com.capstone.gradely.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.capstone.gradely.model.Message;
import com.capstone.gradely.model.userModels.User;

public interface MessageRepository extends JpaRepository<Message, Long> {

	//WORKS
	@Query("SELECT m FROM Message m JOIN m.recipients WHERE recipients_id =?1")
	List<Message> getUserMessages(Long id);
	
//	@Query("SELECT m FROM Message m JOIN m.recipients WHERE recipients_id =?1")
//	List<Message> getUserMessages(Long id);
	
}
