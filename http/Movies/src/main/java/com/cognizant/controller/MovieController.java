package com.cognizant.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.model.Movie;
import com.cognizant.service.MovieService;

import lombok.extern.java.Log;


@RestController
@RequestMapping("/movie")
@CrossOrigin()
@Log
public class MovieController {

	@Autowired
	private MovieService movieService;
	
	@GetMapping
	public List<Movie> getAllProducts(){
		return movieService.getAllMoviess();
	}
	
	@PostMapping
	public void addProduct(@RequestBody Movie movie) {
		System.out.print(movie);
		 movieService.addMovie(movie);
	}
}
