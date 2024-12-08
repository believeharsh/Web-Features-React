import React, { useState, useEffect } from "react";

const Square = ({ value, onClick }) => {
  return (
    <button
      className="w-24 h-24 bg-gradient-to-b from-gray-800 to-gray-900 text-4xl text-white font-extrabold border border-gray-700 shadow-lg hover:from-gray-700 hover:to-gray-800 focus:outline-none transition-all duration-200"
      onClick={onClick}
    >
      {value}
    </button>
  );
};

const TicTacToe = () => {
  const [values, setValues] = useState(Array(9).fill(""));
  const [status, setStatus] = useState("");
  const [isXTurn, setIsXTurn] = useState(true);

  const getWinner = (value) => {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningPatterns.length; i++) {
      const [x, y, z] = winningPatterns[i];

      if (values[x] && values[x] === values[y] && values[x] === values[z]) {
        return values[x];
      }
    }

    return null;
  };

  const handleClick = (index) => {
    if (getWinner(values) || values[index]) return;

    const newValues = [...values];
    newValues[index] = isXTurn ? "X" : "O";
    setValues(newValues);
    setIsXTurn(!isXTurn);
  };

  const handleRestart = () => {
    setIsXTurn(true);
    setValues(Array(9).fill(""));
  };

  useEffect(() => {
    const winner = getWinner(values);
    if (winner) {
      setStatus(`Winner is ${winner}!`);
    } else if (values.every((value) => value !== "")) {
      setStatus("It's a draw!");
    } else {
      setStatus(`Next player is ${isXTurn ? "X" : "O"}`);
    }
  }, [values, isXTurn]);

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="p-6 rounded-lg shadow-2xl bg-gradient-to-b from-gray-800 to-gray-900">
        <h1 className="text-center text-2xl font-bold text-white mb-4">
          Tic Tac Toe
        </h1>
        <div className="grid grid-cols-3 gap-2">
          {values.map((value, index) => (
            <Square
              key={index}
              value={value}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
        <p className="text-center text-lg font-semibold text-gray-300 mt-4">
          {status}
        </p>
        <span>
          <button
            onClick={handleRestart}
            className="px-6 py-2 mt-4 bg-gradient-to-r from-gray-700 to-gray-900 text-white font-bold text-lg rounded-lg shadow-md hover:from-gray-600 hover:to-gray-800 hover:scale-105 transition-all duration-200"
          >
            Restart Game
          </button>
        </span>
      </div>
    </div>
  );
};

export default TicTacToe;
