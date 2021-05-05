package com.lhouge.backend.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.lhouge.backend.model.Coffee;
import com.lhouge.backend.repository.coffeeRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

// configure CORS for port 8081, need to run angular on port 8081! Also NEED to do localhost, not 127.0.0.01
@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api")
public class coffeeController {

	@Autowired
	coffeeRepository coffeeRepository;

	@GetMapping("/coffees")
	public ResponseEntity<List<Coffee>> getAllcoffees(@RequestParam(required = false) String title) {
		try {
			List<Coffee> coffees = new ArrayList<Coffee>();

			if (title == null)
				coffeeRepository.findAll().forEach(coffees::add);
			else
				coffeeRepository.findByTitleContaining(title).forEach(coffees::add);

			if (coffees.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}

			return new ResponseEntity<>(coffees, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/coffees/{id}")
	public ResponseEntity<Coffee> getcoffeeById(@PathVariable("id") long id) {
		Optional<Coffee> coffeeData = coffeeRepository.findById(id);

		if (coffeeData.isPresent()) {
			return new ResponseEntity<>(coffeeData.get(), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@PostMapping("/coffees")
	public ResponseEntity<Coffee> createcoffee(@RequestBody Coffee coffee) {
		try {
			Coffee _coffee = coffeeRepository.save(new Coffee(coffee.getTitle(), coffee.getRoaster(), coffee.getPrice,
					coffee.getSize(), coffee.getDate(), coffee.getNotes(), coffee.getLink(), coffee.getScore()));
			return new ResponseEntity<>(_coffee, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PutMapping("/coffees/{id}")
	public ResponseEntity<Coffee> updatecoffee(@PathVariable("id") long id, @RequestBody Coffee coffee) {
		Optional<Coffee> coffeeData = coffeeRepository.findById(id);

		if (coffeeData.isPresent()) {
			Coffee _coffee = coffeeData.get();
			_coffee.setTitle(coffee.getTitle());
			_coffee.setRoaster(coffee.getRoaster());
			_coffee.setPrice(coffee.getPrice());
			_coffee.setSize(coffee.getSize());
			_coffee.setDate(coffee.getDate());
			_coffee.setNotes(coffee.getNotes());
			_coffee.setLink(coffee.getLink());
			_coffee.setScore(coffee.getScore());

			return new ResponseEntity<>(coffeeRepository.save(_coffee), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@DeleteMapping("/coffees/{id}")
	public ResponseEntity<HttpStatus> deletecoffee(@PathVariable("id") long id) {
		try {
			coffeeRepository.deleteById(id);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@DeleteMapping("/coffees")
	public ResponseEntity<HttpStatus> deleteAllcoffees() {
		try {
			coffeeRepository.deleteAll();
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}

}