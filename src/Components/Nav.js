import React, { useContext } from "react";
import { MovieContext } from "../Context/MovieContext";

const Nav = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div>
      <h3>Bayuiqbal Dev</h3>
      <p>List of Movie : {movies.length} </p>
    </div>
  );
};

export default Nav;
