import React, { useContext } from "react";
import Movie from "../Pages/Movie";
import { MovieContext } from "../Context/MovieContext";

const MovieList = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div>
      {movies.map((movie) => (
        <Movie name={movie.name} year={movie.year} />
      ))}
    </div>
  );
};

export default MovieList;
