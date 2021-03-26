import React from 'react'

const Rating = ({rate, setRate}) => {
    const array= (x) =>{
        let star = []
        for (let i= 1 ; i <= 10 ; i++) 
        {
            if(i <= x) 
            {
                star.push(
                    <span style={{fontSize:'100%', color:'gold' , cursor:'pointer'}} onClick={()=> setRate(i)}>
                       ★
                    </span>
                )
            }
            else 
            {
                star.push(
                    <span style={{fontSize:'100%', color:'gold' , cursor:'pointer'}} onClick={()=> setRate(i)}>
                        ☆
                    </span>
                )}

        }
        return star
    }

    return (
        <div>
            {
                array(rate)
            }
        </div>
    )
    
}
Rating.defaultProps = {
    setRate : () =>{} ,
    rate : 0
}


export default Rating
