import React from "react";
import { useState } from "react";

let nextId = 3;
const initialList = [
  { id: 0, title: "Harsh Dahiya", seen: true },
  { id: 1, title: "Sumit Bansal", seen: false },
  { id: 2, title: "Arun Patel", seen: true },
];

function ItemList({ artworks, onToggle }) {
  return (
    <ul className="list-disc pl-5 space-y-2">
      {artworks.map((artwork) => (
        <li key={artwork.id} className="flex items-center space-x-2">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={artwork.seen}
              onChange={(e) => {
                onToggle(artwork.id, e.target.checked);
              }}
              className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="text-gray-800">{artwork.title}</span>
          </label>
        </li>
      ))}
    </ul>
  );
}

const List = () => {
  const [myList, setMyList] = useState(initialList);
  const [yourList, setYourList] = useState(initialList);

  function handleToggleMyList(artworkId, nextSeen) {
    setMyList(
      myList.map((artwork) => {
        if (artwork.id === artworkId) {
          return { ...artwork, seen: nextSeen };
        } else {
          return artwork;
        }
      })
    );
  }

  function handleToggleYourList(artworkId, nextSeen) {
    setYourList(
      yourList.map((artwork) => {
        if (artwork.id === artworkId) {
          return { ...artwork, seen: nextSeen };
        } else {
          return artwork;
        }
      })
    );
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-semibold mb-4 text-center text-blue-600">Art Bucket List</h1>
        <h2 className="text-xl font-medium mb-2 text-gray-800">My list of art to see:</h2>
        <ItemList artworks={myList} onToggle={handleToggleMyList} />
        <h2 className="text-xl font-medium mt-6 mb-2 text-gray-800">Your list of art to see:</h2>
        <ItemList artworks={yourList} onToggle={handleToggleYourList} />
      </div>
    </div>
  );
};

export default List;