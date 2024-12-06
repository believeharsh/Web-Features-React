import { useState, useEffect } from "react";

const CustomScrollBar = ({ url }) => {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [data, setData] = useState([]);
  const [scrollPercentages, setScrollPercentages] = useState(0);

  // Calculate and update the scroll percentage
  const handleScrollPercentages = () => {
    const howMuchScrolled =
      document.documentElement.scrollTop || document.body.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (howMuchScrolled / height) * 100;
    setScrollPercentages(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentages);
    return () => {
      window.removeEventListener("scroll", handleScrollPercentages);
    };
  }, []);

  // Fetch data from the provided URL
  const fetchDataUrl = async (geturl) => {
    try {
      setLoading(true);
      const response = await fetch(geturl);
      const result = await response.json();

      if (result && result.products && result.products.length > 0) {
        setData(result.products);
      }
      setLoading(false);
    } catch (error) {
      setErrorMsg(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDataUrl(url);
  }, [url]);

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      {/* Scroll Progress Bar */}
      <div className="sticky top-0 bg-gray-500 w-full h-2 z-50">
        <div
          className="bg-blue-500 h-2 transition-all duration-300 ease-out"
          style={{ width: `${scrollPercentages}%` }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Product Cart</h1>

        {/* Loading and Error Messages */}
        {loading && (
          <p className="text-blue-600 font-medium">
            Loading data... Please wait.
          </p>
        )}
        {errorMsg && (
          <p className="text-red-500 font-medium">Error: {errorMsg}</p>
        )}
        {!loading && !errorMsg && data.length === 0 && (
          <p className="text-gray-500">No products available.</p>
        )}

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((dataItem) => (
            <div
              key={dataItem.id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={dataItem.thumbnail}
                alt={dataItem.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800 truncate">
                  {dataItem.title}
                </h2>
                <p className="text-gray-600 my-2">${dataItem.price}</p>
                <button className="mt-3 w-full bg-blue-600 text-white font-medium py-2 rounded-md hover:bg-blue-700 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomScrollBar;
