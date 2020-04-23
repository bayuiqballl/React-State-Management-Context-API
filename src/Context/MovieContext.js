import React, { useState, createContext } from "react";
import MovieList from "../Components/MovieList";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: "Back to the future",
      year: 2000,
    },
    {
      name: "Joker",
      year: 2019,
    },
    {
      name: "Spiderman",
      year: 2003,
    },
  ]);
  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
