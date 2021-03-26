import React from 'react'
import MovieCard from '../MovieCard/MovieCard'

const MovieList = ({movies, title, ratingSearch}) => {
    
    return (
        <div>
        <span className='col'><h1>Movies</h1></span>
       
        <div style={{display:"flex", flexWrap:"nowrap"}}>
            {movies.filter(el => el.title.toLowerCase().includes(title.toLowerCase().trim()) && 
            el.rate >= ratingSearch)
            .map (film => (<MovieCard film={film} key={film.id}/>))}
            
</div>
<span className='col'><h1>Add New Movies</h1></span>

        </div>
    )
}

export default MovieList
