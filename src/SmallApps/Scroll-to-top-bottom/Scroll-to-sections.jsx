import React, { useRef } from "react";
import useFetch from "../CustomHooks/UseFetch/UseFetch";

const ScrollToAnySections = () => {
  const { data, error, pending } = useFetch(
    "https://dummyjson.com/products?limit=100",
    {}
  );

  // Create refs for specific sections
  const topRef = useRef(null);
  const bottomRef = useRef(null);
  const middleRef = useRef(null);

  const handleScroll = (scrollWhere) => {
    if (scrollWhere === "top") {
      topRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (scrollWhere === "bottom") {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (scrollWhere === "middle") {
      middleRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen py-8">
      <div className="fixed top-4 left-4 z-50 flex flex-col gap-2">
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
          onClick={() => handleScroll("top")}
        >
          Scroll to Top
        </button>
        <button
          className="bg-green-600 text-white px-4 py-2 rounded shadow hover:bg-green-700"
          onClick={() => handleScroll("middle")}
        >
          Scroll to Middle
        </button>
        <button
          className="bg-red-600 text-white px-4 py-2 rounded shadow hover:bg-red-700"
          onClick={() => handleScroll("bottom")}
        >
          Scroll to Bottom
        </button>
      </div>

      {/* Top Section */}
      <div
        ref={topRef}
        className="w-full h-[50vh] flex flex-col justify-center items-center bg-blue-300 text-center"
      >
        <h1 className="text-3xl font-bold text-white">Top Section</h1>
        <p className="text-lg text-white mt-2">
          Welcome to the top of the page! Click the buttons to explore.
        </p>
      </div>

      {/* Middle Section */}
      <div
        ref={middleRef}
        className="w-full h-[50vh] flex flex-col justify-center items-center bg-green-300 text-center"
      >
        <h1 className="text-3xl font-bold text-white">Middle Section</h1>
        {pending && <p className="text-lg text-white">Data is loading...</p>}
        {error && <p className="text-lg text-red-700">Error: {error}</p>}
        {data?.products?.length > 0 && (
          <div className="max-h-[200px] overflow-y-auto mt-4 bg-white shadow-md rounded p-4">
            {data.products.slice(0, 25).map((dataItem) => (
              <p
                key={dataItem.id}
                className="text-black font-medium text-center my-1"
              >
                {dataItem.title}
              </p>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Section */}
      <div
        ref={bottomRef}
        className="w-full h-[50vh] flex flex-col justify-center items-center bg-red-300 text-center"
      >
        <h1 className="text-3xl font-bold text-white">Bottom Section</h1>
        <p className="text-lg text-white mt-2">
          You've reached the bottom! Scroll up to see more.
        </p>
      </div>
    </div>
  );
};

export default ScrollToAnySections;
