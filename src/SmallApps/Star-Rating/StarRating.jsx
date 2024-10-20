import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import AppsHeader from '../../components/AppsHeader';

const StarRating = ({ numOfStars = 5 }) => {
  const [rating, setrating] = useState(0);
  const [hover, sethover] = useState(null);

  const handleClick = (currentIndex) => {
    setrating(currentIndex);
  };

  const handleMouseEnter = (currentIndex) => {
    sethover(currentIndex);
  };

  const handleMouseLeave = () => {
    sethover(rating);
  };

  return (
    <>
      <AppsHeader headertext="Star Rating" />
      <div className="container mx-auto p-4 bg-blue-500 rounded-lg shadow-lg max-w-md mt-6">
        <div className="flex justify-center items-center space-x-2 py-6">
          {[...Array(numOfStars)].map((_, index) => {
            index += 1;
            return (
              <FaStar
                key={index}
                className={`cursor-pointer text-4xl transition-all duration-200 ${
                  index <= (hover || rating) ? 'text-yellow-400' : 'text-gray-800'
                }`}
                onClick={() => handleClick(index)}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default StarRating;
