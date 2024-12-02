import React from 'react'
import { useState } from 'react'
import { FaStar } from 'react-icons/fa'

const StarRating = ({numofstarts = 7}) => {
    const [rating, setRating] = useState(0) ; 
    const [hover, setHover] = useState(null) ; 

    const handleClick = (currentIndex) => {
        setRating(currentIndex) ; 
    }
    const handleMouseEnter = (currentIndex) =>  {
        setHover(currentIndex) ; 
    } 
    const handleMouseLeave = () => {
        setHover(rating)
    }
  return (
    <>
        <div className="">
            {[...Array(numofstarts)].map((_, index) => {
                index += 1 ; 
                return (
                    <FaStar key={index}
                        className={`${ index <= (hover || rating) ? 'text-yellow-300' : 'text-black'}`}
                        onClick={() => handleClick(index)}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave()}
                    />
                )
            })}
        </div>
    </>
  )
}

export default StarRating
