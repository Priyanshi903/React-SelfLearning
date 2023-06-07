import React, { useCallback, useEffect, useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
import axios from 'axios';
import AddMovie from './components/AddMovie';

function App() {

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // alternative:-  useCallback(async function() { ....non-arrow function
  const fetchMovieshandler = useCallback(async () => {

    setIsLoading(true);
    setError(null);

    try {

      // to get error
      // fetch api doesn't treats error status code as real error,it will not throw a technical error if we will get back error status code
      // const response = await fetch('https://swapi.dev/api/film/');

      // const response = await fetch('https://swapi.dev/api/films/');
      const response = await fetch('https://http-react-7aa10-default-rtdb.firebaseio.com/movies.json');

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();

      const loadedMovies = [];
      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        })
      }

      // const transformedMovies = data.results.map(movieData => {
      //   return {
      //     id: movieData.episode_id,
      //     title: movieData.title,
      //     openingText: movieData.opening_crawl,
      //     releaseDate: movieData.release_date
      //   };
      // });
      // setMovies(transformedMovies);

      setMovies(loadedMovies);
      setIsLoading(false);

    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);

  }, []);

  async function getMovies() {
    try {

      // const response = await axios('https://swapi.dev/api/films/');
      const response = await axios('http://localhost:8083/movie');

      const data = await response.data;
      console.log(data);
      const transformedMovies = data.map(movieData => {
        return {
          id: movieData.id,
          title: movieData.title,
          openingText: movieData.openingText,
          releaseDate: movieData.releaseDate
        };
      });
      setMovies(transformedMovies);
      setIsLoading(false);

    } catch (error) {
      // console.log(error.response.status);
      // if (error.response.status === 404) {
      //   console.log('Something went wrong!');
      //   setError('Something went wrong!');
      // }
    }

  }

  useEffect(() => {
    fetchMovieshandler();
  }, [fetchMovieshandler]);

  async function addMovieHandler(movie) {
    const response = await fetch('https://http-react-7aa10-default-rtdb.firebaseio.com/movies.json', {
      method: 'POST',
      body: JSON.stringify(movie),
      headers: {
        // not reqd by firebase..but used by many api's
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    console.log(data);
  }

  async function addMovieAxios(movie) {
    console.log(movie);
    const response = await axios.post('http://localhost:8083/movie',
      { ...movie },
      {
        headers: {
          // not reqd by firebase..but used by many api's
          'Content-Type': 'application/json'
        }
      });
    const data = await response.data;
    console.log(data);
  }



  // function fetchMovieshandler() {
  //   // default method is get
  //   fetch('https://swapi.dev/api/films/')
  //     .then(response => {
  //       return response.json();
  //     }).then(data => {
  //       // becz object propeties names r different in response & html
  //       const transformedMovies = data.results.map(movieData => {
  //         return {
  //           id: movieData.episode_id,
  //           title: movieData.title,
  //           openingText: movieData.opening_crawl,
  //           releaseDate: movieData.release_date
  //         };
  //       });
  //       setMovies(transformedMovies);
  //     });
  // }

  let content = <p>Found no movies.</p>
  if (movies.length > 0) {
    content = <MoviesList movies={movies} />
  }
  if (error) {
    content = <p>{error}</p>
  }
  if (isLoading) {
    content = <div class="loader"></div>
  }

  return (
    <React.Fragment>
      <section>

        {/* <button onClick={fetchMovieshandler}>Fetch Movies</button> */}
        <button onClick={getMovies}>Fetch Movies With AXIOS</button>

      </section>
      <section>

        {/* {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && !error && <p>Found no movies.</p>}
        {!isLoading && error && <p>{error}</p>}
        {isLoading && <div class="loader"></div>} */}

        {/* <AddMovie onAddMovie={addMovieHandler} /> */}
        <AddMovie onAddMovie={addMovieAxios} />

        {content}
      </section>
    </React.Fragment>
  );
}

export default App;
