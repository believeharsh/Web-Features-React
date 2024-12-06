import React, { useState, useEffect } from "react";

const CustomScroll = ({ url }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  const fetchUrl = async (geturl) => {
    try {
      setLoading(true);
      const response = await fetch(geturl);
      const result = await response.json();

      if (result && result.products && result.products.length > 0) {
        setData(result.products);
      } else {
        setError("No products found");
      }

      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  const handleScrollPercentage = () => {
    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    setScrollPercentage((howMuchScrolled / height) * 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);

    return () => {
      window.removeEventListener("scroll", handleScrollPercentage);
    };
  }, []);

  useEffect(() => {
    fetchUrl(url);
  }, [url]);

  return (
    <div
      className={`font-sans min-h-screen ${
        darkMode ? "bg-gray-900 text-gray-200" : "bg-gray-100 text-gray-800"
      }`}
    >
      {/* Toggle Button */}
      <div className="sticky top-0 bg-gray-700 p-4 z-50">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            {darkMode ? "Dark Mode" : "Light Mode"}
          </h1>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
            onClick={() => setDarkMode(!darkMode)}
          >
            Toggle Mode
          </button>
        </div>

        {/* Scroll Progress Bar */}
        <div className="mt-2 bg-gray-500 w-full h-2">
          <div
            className="bg-blue-400 h-2 transition-all duration-300 ease-out"
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 max-w-4xl mx-auto">
        <div className="space-y-4">
          {loading && (
            <p className="text-blue-500 text-center">
              Data is being loaded! Please wait...
            </p>
          )}

          {error && <p className="text-red-500 text-center">Error: {error}</p>}

          {!loading && !error && data.length === 0 && (
            <p className="text-gray-500 text-center">No products available.</p>
          )}

          {data.map((dataItem) => (
            <div
              key={dataItem.id}
              className={`p-4 rounded-md shadow-md hover:shadow-lg transition-shadow duration-200 ${
                darkMode
                  ? "bg-gray-800 text-gray-200"
                  : "bg-white text-gray-800"
              }`}
            >
              <h2 className="text-xl font-semibold">{dataItem.title}</h2>
              <p className="text-sm">{dataItem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomScroll;
