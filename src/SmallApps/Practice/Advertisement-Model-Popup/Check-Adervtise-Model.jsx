import { useState, useEffect } from "react";
import AdvertisementModal from "./Advertisement-Model";


const CheckAdvertiseModel = () => {
  const [isAdOpen, setIsAdOpen] = useState(false);

  useEffect(() => {
    // Trigger the ad modal after a delay (e.g., 3 seconds)
    const adTimer = setTimeout(() => {
      setIsAdOpen(true);
    }, 1500);

    return () => clearTimeout(adTimer);
  }, []);

  const handleCloseAd = () => {
    setIsAdOpen(false);
  };

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-gray-800">Website Content</h1>
      <p className="text-gray-600 mt-4">
        Enjoy browsing the content. An ad will pop up shortly.
      </p>

      <AdvertisementModal
        isOpen={isAdOpen}
        onClose={handleCloseAd}
        duration={5}
        adContent={
          <div className="text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Ad Banner"
              className="mx-auto"
            />
            <p className="text-gray-800 mt-2">Check out our latest offers!</p>
          </div>
        }
      />
    </div>
  );
};

export default CheckAdvertiseModel;
