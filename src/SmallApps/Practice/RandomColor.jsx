import React, { useState } from "react";

const RandomColor = () => {
  const [colorType, setcolorType] = useState("hex");
  const [color, setColor] = useState("#000000");

const randomColorUtility = (length) => {
return Math.floor(Math.random() * length)
}
  function handleCreateRandomColor() {
    if(colorType == "hex"){
        const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B" , "C", "D", "E", "F"] ; 
        let hexColor = "#" ; 
        for(let i = 0 ; i<6 ; i++){
            hexColor +=  hex[randomColorUtility(hex.length)] ; 
        }
        setColor(hexColor);

    } else {
        const r = randomColorUtility(256) ; 
        const g = randomColorUtility(256) ; 
        const b = randomColorUtility(256) ; 

        let rgbColor = `rgb(${r}, ${g}, ${b})` ; 
        console.log(rgbColor); 
        setColor(rgbColor); 

    }
  }
  return (
    <>
      <div className="w-[500px] h-[300px]" style={{ backgroundColor: color }}>
        <div className="flex justify-center items-center space-x-2 cursor-aut0">
          <div className="bg-black text-white font-sans text-xl border-[2px] border-cyan-50 px-2 py-1 rounded-sm  " onClick={() => handleCreateRandomColor()}>
            Create Rendom Color
          </div>
          <div className="bg-black text-white font-sans text-xl border-[2px] border-cyan-50 px-2 py-1 rounded-sm   " onClick={() => setcolorType("hex")}>
            Hex Color
          </div>
          <div className="bg-black text-white font-sans text-xl border-[2px] border-cyan-50 px-2 py-1 rounded-sm   " onClick={() => setcolorType("RGB")}>
            RGB Color
          </div>
        </div>

        <div className="text-2xl text-black">
            <button>
               {colorType == "hex" ? "Hex" : "RGB"} : {color}
            </button>
        </div>
      </div>
    </>
  );
};

export default RandomColor;
