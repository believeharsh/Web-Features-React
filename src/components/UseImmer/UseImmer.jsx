import React from 'react'
import {initialList} from './Data'
import { useImmer } from 'use-immer';

  function ItemList({ artworks, onToggle }) {
    return (
      <ul>
        {artworks.map(artwork => (
          <li key={artwork.id}>
            <label>
              <input
                type="checkbox"
                checked={artwork.seen}
                onChange={e => {
                  onToggle(
                    artwork.id,
                    e.target.checked
                  );
                }}
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
          const artwork = draft.find(a =>
            a.id === artworkId
          );
          artwork.seen = nextSeen;
        });
      }
    return (
      <>
      <h1>Art Bucket List</h1>
      <h2>My list of art to see:</h2>
      <ItemList
        artworks={list}
        onToggle={handleToggle} />
    </>
    )
  }


export default UseImmer
