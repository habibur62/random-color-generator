import React, { useState } from 'react'

import {FaStar} from "react-icons/fa"
import './Star-rating.css'
export default function StarRating({noOfStars}) {

    const [rating , setRating] = useState(0);
    const [ hover, sethover] = useState(0);

    const handleClick=(currentIndex)=>{
        setRating(currentIndex);
    }
    const handleMove=(currentIndex)=>{
        sethover(currentIndex);
    }
    const handleLeave=()=>{
        sethover(rating);

    }

  return (
    <div >
        { [...Array(noOfStars)].map((_, index)=>{
                index +=1;
            return(
                <FaStar  key={index}

                className={ index <= (hover||rating) ? "active": "inactive"}

                onClick={()=>handleClick(index)}
                onMouseMove={()=>handleMove(index)}  
                onMouseLeave={()=>handleLeave()}  

                
                />
            )
        })
            
        }
    </div>
  )
}
