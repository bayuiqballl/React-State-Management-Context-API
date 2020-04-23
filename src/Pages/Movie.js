import React from "react";

const Movie = ({ name, year }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{year}</p>
    </div>
  );
};

export default Movie;
