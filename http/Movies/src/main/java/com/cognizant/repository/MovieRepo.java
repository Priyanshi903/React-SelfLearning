package com.cognizant.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cognizant.model.Movie;

@Repository
public interface MovieRepo extends JpaRepository<Movie, Long> {

}
