import React, { useEffect, useState } from "react";
import {v4 as uuidv4 } from 'uuid' ; 

const LoadMore = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);
  const [productsCount, setProductsCount] = useState(1); // Start from page 1
  const [disabledBtn, setDisabledBtn] = useState(false);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${(productsCount - 1) * 20}`
      );
      const result = await response.json();

      if (result && result.products && result.products.length) {
        setProducts((prev) => [...prev, ...result.products]);
        setLoading(false);
      }
    } catch (e) {
      setError(e);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [productsCount]);

  useEffect(() => {
    if (products && products.length === 100) setDisabledBtn(true);
  }, [products]);

  if (loading) {
    return <div className="text-center text-lg font-semibold">Loading Data, please wait...</div>;
  }

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products &&
            products.length > 0 &&
            products.map((item) => (
              <div
                className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-center"
                key={uuidv4()}
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="rounded-md w-full h-48 object-cover"
                />
                <p className="mt-4 text-lg font-medium text-gray-800">
                  {item.title}
                </p>
              </div>
            ))}
        </div>

        <div className="mt-8 text-center">
          <button
            className={`py-2 px-6 rounded-lg font-semibold text-white transition-all duration-300 ${
              disabledBtn ? "bg-gray-500 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
            }`}
            disabled={disabledBtn}
            onClick={() => setProductsCount(productsCount + 1)}
          >
            {disabledBtn ? "100 Products Loaded" : "Show More"}
          </button>
        </div>
      </div>
    </>
  );
};

export default LoadMore;
