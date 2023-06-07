package com.cognizant.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "movie")
public class Movie {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	private String title;
	
	private String openingText;
	
	private Date releaseDate;

	@Override
	public String toString() {
		return "Movie [id=" + id + ", title=" + title + ", openingText=" + openingText + ", releaseDate=" + releaseDate
				+ "]";
	}

}
