import React from "react";

const Search = ({ searchInput, setSearchInput, handleClick }) => {
  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder="Enter city name"
        className="flex-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700 shadow-sm"
      />
      <button
        onClick={handleClick}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-all shadow-md"
      >
        Search
      </button>
    </div>
  );
};

export default Search;
