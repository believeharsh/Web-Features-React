import React, { useEffect, useState } from "react";

const ImagesSlider = ({ url, limit, page = 1 }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);



  useEffect(() => {
    const slideTimer = setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
    }, 3000); // Change slide every 3 seconds
  
    return () => clearTimeout(slideTimer); // Cleanup to prevent memory leaks
  }, [currentSlide, images]);
  
  const handleprevious = () => {
    clearTimeout() ; 
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };

  const handlenext = () => {
    clearTimeout() ; 
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };

  const fetchImages = async (geturl) => {
    try {
      setLoading(true);
      const response = await fetch(`${geturl}?page=${page}&limit=${limit}`);
      const data = await response.json();
      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setErrorMsg(e.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);

//   console.log(images);

  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      {loading && (
        <p className="text-center text-lg font-semibold text-blue-600">
          Data is loading, please wait...
        </p>
      )}
      {errorMsg !== null && (
        <p className="text-center text-lg font-semibold text-red-500">
          Error has occurred: {errorMsg}
        </p>
      )}
      <div className="relative w-full h-72 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
        {images.map((getImage, index) => (
          <img
            key={getImage.id}
            src={`${getImage.download_url}`}
            alt={`Slide ${index + 1}`}
            className={`w-full h-full object-cover transition-all duration-300 ease-in-out ${
              currentSlide === index ? "block" : "hidden"
            }`}
          />
        ))}

        {/* Navigation Buttons */}
        <div
          className="absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer bg-white rounded-full shadow-md p-2 hover:scale-110 transition-transform"
          onClick={() => handleprevious()}
        >
          Left
        </div>
        <div
          className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer bg-white rounded-full shadow-md p-2 hover:scale-110 transition-transform"
          onClick={() => handlenext()}
        >
          Right
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-4">
        {images &&
          images.length > 0 &&
          images.map((_, index) => (
            <button
              key={index}
              className={`w-4 h-4 mx-1 rounded-full transition-colors duration-100 ${
                currentSlide === index ? "bg-blue-600" : "bg-gray-400"
              }`}
              onClick={() => setCurrentSlide(index)}
            ></button>
          ))}
      </div>
    </div>
  );
};

export default ImagesSlider;
