import React from 'react'
import Rating from '../Rating/Rating'

const Navbar = ({setRatingSearch, ratingSearch, title, setTitle}) => {
    return (
        <div>
            <div className='col col-sm-4'>
			<input className='form-control' placeholder='Type to search...' value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <Rating setRate={setRatingSearch} rate={ratingSearch} />
            </div>

           
            
        </div>
    )
}

export default Navbar
