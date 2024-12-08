import React from "react";

const Suggestion = ({ data, handleclick }) => {
  return (
    <ul className="absolute w-full mt-2 bg-gray-700 border border-gray-600 rounded-lg shadow-lg max-h-40 overflow-y-auto z-10">
      {data && data.length
        ? data.map((item, index) => (
            <li
              onClick={handleclick}
              key={index}
              className="px-4 py-2 hover:bg-blue-500 cursor-pointer text-gray-100"
            >
              {item}
            </li>
          ))
        : <li className="px-4 py-2 text-gray-400">No results found</li>}
    </ul>
  );
};

export default Suggestion;

  
