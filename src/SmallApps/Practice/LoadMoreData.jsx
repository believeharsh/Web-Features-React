// import React, { useEffect, useState } from "react";
// import { v4 as uuidv4 } from "uuid";

// const LoadMoreData = () => {
//   const [loading, setLoading] = useState(false);
//   const [errorMsg, setErrorMsg] = useState(null);
//   const [products, setProducts] = useState([]);
//   const [productCount, setProductCount] = useState(0);

//   const fetchProducts = async () => {
//     setLoading(true);
//     try {
//       const response = await fetch(
//         `https://dummyjson.com/products?limit=20&skip=${
//           productCount === 0 ? 0 : productCount * 20
//         }`
//       );
//       const data = await response.json();
//       if (data && data.products && data.products.length) {
//         setProducts((prevData) => [...prevData, ...data.products]);
//         setLoading(false);
//       }
//     } catch (e) {
//       setErrorMsg(e.message);
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, [productCount]);

//   return (
//     <div className="container mx-auto px-4 py-8">
//       {loading && (
//         <p className="text-center text-blue-500 font-semibold">
//           Data is being loaded, please wait...
//         </p>
//       )}
//       {errorMsg && (
//         <p className="text-center text-red-500 font-semibold">
//           Error occurred: {errorMsg}
//         </p>
//       )}

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
//         {products &&
//           products.length > 0 &&
//           products.map((item) => (
//             <div
//               key={uuidv4()}
//               className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
//             >
//               <img
//                 src={item.thumbnail}
//                 alt={item.title}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-4">
//                 <h3 className="text-lg font-semibold text-gray-800">
//                   {item.title}
//                 </h3>
//                 <p className="text-gray-500 text-sm mt-2">
//                   {item.description.substring(0, 50)}...
//                 </p>
//                 <p className="text-blue-500 font-semibold mt-3">
//                   Price: ${item.price}
//                 </p>
//               </div>
//             </div>
//           ))}
//       </div>

//       <div className="flex justify-center mt-8">
//         <button
//           onClick={() => setProductCount((prevCount) => prevCount + 1)}
//           className="bg-blue-500 text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-colors"
//         >
//           Load More
//         </button>
//       </div>
//     </div>
//   );
// };

// export default LoadMoreData;



import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const LoadMoreData = () => {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [products, setProducts] = useState([]);
  const [skipCount, setSkipCount] = useState(0); // Use skipCount to manage the API skip logic

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${skipCount}`
      );
      const data = await response.json();
      if (data && data.products && data.products.length) {
        setProducts((prevData) => [...prevData, ...data.products]);
        setLoading(false);
      }
    } catch (e) {
      setErrorMsg(e.message);
      setLoading(false);
    }
  };

  // Fetch products on the initial render
  useEffect(() => {
    fetchProducts();
  }, [skipCount]);

  return (
    <div className="container mx-auto px-4 py-8">
      {loading && (
        <p className="text-center text-blue-500 font-semibold">
          Data is being loaded, please wait...
        </p>
      )}
      {errorMsg && (
        <p className="text-center text-red-500 font-semibold">
          Error occurred: {errorMsg}
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {products.map((item) => (
          <div
            key={uuidv4()}
            className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm mt-2">
                {item.description.substring(0, 50)}...
              </p>
              <p className="text-blue-500 font-semibold mt-3">
                Price: ${item.price}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <button
          onClick={() => setSkipCount((prev) => prev + 20)} // Increment skipCount for the next batch
          className="bg-blue-500 text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-colors"
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default LoadMoreData;




