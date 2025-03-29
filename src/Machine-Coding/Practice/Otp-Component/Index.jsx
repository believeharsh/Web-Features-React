import { useState, useRef } from "react";

export default function App() {
  const Number_Of_Box = 6;
  const [inputArr, setInputArr] = useState(Array(Number_Of_Box).fill(""));
  const inputRef = useRef([]);

  const handleChange = (e, index) => {
    const { value } = e.target;
    if (!isNaN(value) && value.length <= 1) {
      let newInputArr = [...inputArr];
      newInputArr[index] = value;
      setInputArr(newInputArr);

      if (value && index < Number_Of_Box - 1) {
        inputRef.current[index + 1]?.focus();
      }
    }
  };

  const handleDeleteValue = (e, index) => {
    if (!e.target.value && e.key === "Backspace") {
      inputRef.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text").slice(0, Number_Of_Box);

    if (!isNaN(pasteData) && pasteData.length <= Number_Of_Box) {
      const newInputArr = pasteData
        .split("")
        .concat(Array(Number_Of_Box).fill(""))
        .slice(0, Number_Of_Box);
      setInputArr(newInputArr);

      const filledBoxes =
        pasteData.length > Number_Of_Box ? Number_Of_Box : pasteData.length;
      inputRef.current[filledBoxes - 1]?.focus();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          OTP Verification
        </h1>

        <div className="flex justify-center gap-3">
          {inputArr.map((box, index) => (
            <input
              ref={(el) => (inputRef.current[index] = el)}
              className="w-12 h-12 border-2 border-gray-300 rounded-lg text-center text-xl font-medium text-gray-700 focus:outline-none focus:border-blue-500 transition-all duration-200"
              type="text"
              key={index}
              value={box}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleDeleteValue(e, index)}
              onPaste={(e) => handlePaste(e)}
              maxLength={1}
            />
          ))}
        </div>

        <div className="flex justify-center mt-6">
          <button
            className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300"
            onClick={() => alert(`OTP Submitted: ${inputArr.join("")}`)}
          >
            Verify OTP
          </button>
        </div>
      </div>
    </div>
  );
}
