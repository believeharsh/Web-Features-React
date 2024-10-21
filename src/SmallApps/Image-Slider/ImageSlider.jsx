import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import AppsHeader from "../../components/AppsHeader";

const ImageSlider = ({ url, page = 1, limit = 6 }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const fetchImages = async (geturl) => {
    try {
      setLoading(true);
      const response = await fetch(`${geturl}?page=${page}&limit=${limit}`);
      const Data = await response.json();
      if (Data) {
        setImages(Data);
        setLoading(false);
      }
    } catch (error) {
      setErrorMsg(error.message);
      setLoading(false);
    }
  };

  const handlePrevious = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };

  const handleNext = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);

  return (
    <div className="py-3 border-b-2 border-black">
      <AppsHeader headertext={"Images Slider"} />
      <div className="container mx-auto max-w-3xl px-4 py-8  bg-blue-500 rounded-lg shadow-lg mt-4 ">
        <div className="relative flex items-center justify-between">
          <BsArrowLeftCircleFill
            className="text-4xl text-white cursor-pointer hover:scale-110 transition-transform"
            onClick={handlePrevious}
          />
          <div className="w-full overflow-hidden mx-4 h-64">
            {loading ? (
              <p className="text-center text-white">Loading...</p>
            ) : errorMsg ? (
              <p className="text-center text-red-500">{errorMsg}</p>
            ) : (
              images &&
              images.length > 0 &&
              images.map((getImage, index) => (
                <img
                  key={getImage.id}
                  src={getImage.download_url}
                  // alt={`Slide ${index + 1}`}
                  className={`w-full h-72 object-cover rounded-lg shadow-md transition-all duration-300 ease-in-out ${
                    currentSlide === index ? "block" : "hidden"
                  }`}
                />
              ))
            )}
          </div>
          <BsArrowRightCircleFill
            className="text-4xl text-white cursor-pointer hover:scale-110 transition-transform"
            onClick={handleNext}
          />
        </div>
        <div className="flex justify-center mt-4">
          {images &&
            images.length > 0 &&
            images.map((_, index) => (
              <button
                key={index}
                className={`w-5 h-5 mx-1 rounded-full transition-colors duration-300 ${
                  currentSlide === index ? "bg-white" : "bg-gray-400"
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
