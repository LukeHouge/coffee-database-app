package com.lhouge.backend.repository;

import java.util.List;

import com.lhouge.backend.model.Coffee;

import org.springframework.data.jpa.repository.JpaRepository;

public interface coffeeRepository extends JpaRepository<Coffee, Long> {
	List<Coffee> findByPublished(boolean published);
	List<Coffee> findByTitleContaining(String title);
}