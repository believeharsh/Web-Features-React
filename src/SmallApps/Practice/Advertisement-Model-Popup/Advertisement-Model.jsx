import React, { useState, useEffect } from "react";

const AdvertisementModal = ({ isOpen, onClose, adContent, duration = 5 }) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    if (isOpen) {
      let interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);

      if (timeLeft <= 0) {
        clearInterval(interval);
        // onClose();
      }

      return () => clearInterval(interval);
    }
  }, [isOpen, timeLeft, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 shadow-lg w-96 relative">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
          onClick={timeLeft <= 0 ? onClose : ''}
        >
          ✕
        </button>
        <div className="mb-4">
          <h2 className="text-xl font-bold text-gray-800">Advertisement</h2>
          <p className="text-sm text-gray-500">
            You can skip this ad in {timeLeft} seconds.
          </p>
        </div>
        <div className="mb-4">{adContent}</div>
        {timeLeft <= 0 && (
          <button
            className="mt-3 w-full bg-blue-600 text-white font-medium py-2 rounded-md hover:bg-blue-700 transition-colors"
            onClick={onClose}
          >
            Skip Ad
          </button>
        )}
      </div>
    </div>
  );
};

export default AdvertisementModal ; 