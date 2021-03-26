import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {moviesData} from "./Components/MoviesData"
import './App.css';
import MovieList from './Components/MovieList/MovieList';
import AddMovie from './Components/AddMovie/AddMovie';
import Navbar from './Components/Navbar/Navbar';





function App() {

  const [movies, setMovies] = useState(moviesData) ;
  console.log('movies', movies)
  const [ratingSearch, setRatingSearch] = useState("") ;
  const [title, setTitle] = useState("") ;
  const AddFilm = (newmovie) => {
    return setMovies([...movies, newmovie]) ;
  }
  
  
      
    return (
    
        <div className="App container-fluid movie-app">

      <Navbar ratingSearch={ratingSearch} setRatingSearch={setRatingSearch} title={title} setTitle={setTitle}/>  
      <div className='row'>
        
      <MovieList movies={movies} ratingSearch={ratingSearch} title={title}/>
      
      </div>
      <AddMovie AddFilm={AddFilm}/>
      </div>
  
  );
}

export default App;
