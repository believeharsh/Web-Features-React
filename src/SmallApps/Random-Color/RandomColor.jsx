import React, { useEffect, useState } from "react";
import AppsHeader from "../../components/AppsHeader";

const RandomColor = () => {
  const [typeofColor, settypeofColor] = useState("hex");
  const [color, setcolor] = useState("#000000");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    setcolor(hexColor);
  }

  function handleCreateRandomRgbColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setcolor(`rgb(${r},${g}, ${b})`);
  }

  useEffect(() => {
    if (typeofColor === "rgb") handleCreateRandomRgbColor();
    else handleCreateRandomHexColor();
  }, [typeofColor]);

  return (
    <>
      <AppsHeader headertext={"Random Color"}/>
      <div className="container mx-auto px-4 py-8">
        <div
          className="p-12 border rounded-lg shadow-md transition-all duration-300 ease-in-out"
          style={{ backgroundColor: color }}
        >
          <div className="flex justify-between items-center mb-4">
            <button
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full shadow-lg transition-all duration-300 ease-in-out hover:bg-blue-600 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
              onClick={
                typeofColor === "hex"
                  ? handleCreateRandomHexColor
                  : handleCreateRandomRgbColor
              }
            >
              Generate Color
            </button>
            <button
              className={`${
                typeofColor === "hex" ? "bg-green-500" : "bg-gray-800"
              } text-white font-bold py-2 px-4 rounded-full shadow-lg transition-all duration-300 ease-in-out hover:bg-opacity-90 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50`}
              onClick={() => settypeofColor("hex")}
            >
              Hex Colors
            </button>
            <button
              className={`${
                typeofColor === "rgb" ? "bg-green-500" : "bg-gray-800"
              } text-white font-bold py-2 px-4 rounded-full shadow-lg transition-all duration-300 ease-in-out hover:bg-opacity-90 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50`}
              onClick={() => settypeofColor("rgb")}
            >
              Rgb Colors
            </button>
          </div>

          <div className="flex justify-center items-center">
            <p className="text-2xl font-semibold text-white">
              {typeofColor === "hex" ? "Hex" : "RGB"}: {color}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RandomColor;
