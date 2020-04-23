import React from "react";
import MovieList from "./Components/MovieList";
import AddMovie from "./Components/AddMovie";
import Nav from "./Components/Nav";
import "./App.css";
import { MovieProvider } from "./Context/MovieContext";

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <AddMovie />
        <Nav />
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;
