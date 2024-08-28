import React from 'react'
import { initialList } from './Data'
import { useImmer } from 'use-immer';

function ItemList({ artworks, onToggle }) {
  return (
    <ul className="list-disc space-y-2">
      {artworks.map(artwork => (
        <li key={artwork.id} className="flex items-center space-x-2">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={artwork.seen}
              onChange={e => {
                onToggle(artwork.id, e.target.checked);
              }}
              className="mr-2 h-4 w-4 text-blue-500 rounded focus:ring-blue-400"
            />
            {artwork.title}
          </label>
        </li>
      ))}
    </ul>
  );
}

const UseImmer = () => {
  const [list, updateList] = useImmer(initialList);

  function handleToggle(artworkId, nextSeen) {
    updateList(draft => {
      const artwork = draft.find(a => a.id === artworkId);
      artwork.seen = nextSeen;
    });
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-lg">
        <h1 className="text-2xl font-bold mb-4">Art Bucket List</h1>
        <h2 className="text-lg font-semibold mb-4">My list of art to see:</h2>
        <ItemList artworks={list} onToggle={handleToggle} />
      </div>
    </div>
  );
}

export default UseImmer;