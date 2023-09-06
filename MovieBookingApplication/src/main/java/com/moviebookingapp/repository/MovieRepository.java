package com.moviebookingapp.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com. moviebookingapp.models.Movie;
public interface MovieRepository extends MongoRepository<Movie,String> {
@Query("{$or:[{movieName:{$regex:?0, $options:'i'}},{movieName:{$regex:'^?0', $options:'i'}}]}")
    List<Movie> findByMovieName(String movieName);

    @Query("{'movieName' : ?0,'theatreName' : ?1}")
    List<Movie> findAvailableTickets(String moviename,String theatreName);

    void deleteByMovieName(String movieName);
}

