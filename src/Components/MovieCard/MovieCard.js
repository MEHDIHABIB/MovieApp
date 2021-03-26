import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./MovieCard.css"
import Rating from '../Rating/Rating';

const MovieCard = ({film}, {key}) => {

    return (
        <div>
            <div key={key}>
            <div  className='image-container d-flex justify-content-start m-3' >
					<img  src={film.posterUrl} alt='movie' />
                    <div className='overlay d-flex align-items-center justify-content-center'>
                    <span className='mr-2'>{film.title} </span>
                    
                   </div>
                   
				</div>
                <span><Rating rate={film.rate} /> </span>
            </div>
            
       </div>
        
    )
}

export default MovieCard
