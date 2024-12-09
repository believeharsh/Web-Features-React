import { useState, useEffect } from "react";

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

const TicTacToePractice = () => {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [status, setStatus] = useState("");
  const [isXTurn, setIsXTurn] = useState(true);

  const handleClick = (index) => {
    if (getWinner(squares) || squares[index]) return; // it is the gaurd clause 

    const newValues = [...squares];
    newValues[index] = isXTurn ? "X" : "O";
    setSquares(newValues);
    setIsXTurn(!isXTurn);
  };

  const getWinner = (board) => {
    const WinningParamas = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < WinningParamas.length; i++) {
      const [x, y, z] = WinningParamas[i];
      if (board[x] && board[x] === board[y] && board[x] === board[z]) {
        return board[x];
      }
    }

    return null; // Return null only after checking all patterns
  };

  useEffect(() => {
    const winner = getWinner(squares);
    if (winner) {
      setStatus(`Winner is ${winner}`);
    } else if (squares.every((item) => item !== "")) {
      setStatus(`Game is draw`);
    } else {
      setStatus(`Next player is: ${isXTurn ? "X" : "O"}`);
    }
  }, [squares, isXTurn]);

  const handleRestart = () => {
    setSquares(Array(9).fill(""));
    setIsXTurn(true);
    setStatus("Next player is: X");
  };

  return (
    <div className="bg-slate-900 text-white font-bold text-4xl flex flex-col items-center">
      <div className="grid grid-cols-3 gap-1">
        {squares.map((value, index) => (
          <Square value={value} key={index} onClick={() => handleClick(index)} />
        ))}
      </div>
      <button
        onClick={handleRestart}
        className="mt-4 px-6 py-2 bg-gradient-to-r from-gray-700 to-gray-900 text-white font-bold text-lg rounded-lg shadow-md hover:from-gray-600 hover:to-gray-800 hover:scale-105 transition-all duration-200"
      >
        Restart Game
      </button>
      <div className="mt-4 text-lg">{status}</div>
    </div>
  );
};

export default TicTacToePractice;
