package com.capstone.gradely;

import org.junit.jupiter.api.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class GradelyApplicationTests {

	public final Logger log = LoggerFactory.getLogger(GradelyApplicationTests.class);
	
	@Test
	void contextLoads() {
	}
	
	@Test
	public void divide() {
		//Assert.assertEquals(1, quotient(10,10));
		//assertEquals(1, quotient(10,10));
		log.info("Divide {} ",quotient(10,10));
	}
	
	@Test
	public void sum() {
		
	}
	
	
	int sum(int a, int b) {
		return a + b;
	}
	
	int product(int a, int b) {
		return a * b;
	}
	
	int quotient(int a, int b) {
		return a / b;
	}
}
