package com.cognizant.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cognizant.model.Movie;
import com.cognizant.repository.MovieRepo;

@Service
public class MovieService {
	
	@Autowired
	private MovieRepo movieRepo;

	public List<Movie> getAllMoviess() {
		
		return movieRepo.findAll();
	}

	public void addMovie(Movie movie) {
		movieRepo.saveAndFlush(movie);
	}
	
	

}
