import React, { useState, useRef } from "react";

const OTPVerification = () => {
    const Number_OF_Inputs = 6;
    const [inputArr, setInputArr] = useState(Array(Number_OF_Inputs).fill(""));
    const inputRefs = useRef([]);  // ✅ useRef to store input references

    const handleOnChange = (e, index) => {
        const { value } = e.target;

        // Only allow single-digit numeric values
        if (!isNaN(value) && value.length <= 1) {
            const newInputArr = [...inputArr];
            newInputArr[index] = value;
            setInputArr(newInputArr);

            // Move to the next input automatically
            if (value && index < Number_OF_Inputs - 1) {
                inputRefs.current[index + 1].focus();
            }
        }
    };

    const handleKeyDown = (e, index) => {

        if(!e.target.value && e.key ==="Backspace"){
            inputRefs.current[index-1]?.focus() ; 
        }
    };

    const handlePaste = (e) => {
        e.preventDefault();
        const pasteData = e.clipboardData.getData("text").slice(0, Number_OF_Inputs);
    
        // ✅ Simple validation without RegEx
        if (!isNaN(pasteData) && pasteData.length <= Number_OF_Inputs) {
            const newInputArr = pasteData.split("").concat(Array(Number_OF_Inputs).fill("")).slice(0, Number_OF_Inputs);
            setInputArr(newInputArr);
    
            // Automatically focus the last filled input
            const filledBoxes = pasteData.length > Number_OF_Inputs ? Number_OF_Inputs : pasteData.length;
            inputRefs.current[filledBoxes - 1]?.focus();
        }
    };
    

    return (
        <>
            <div className="flex gap-2 justify-center items-center p-5">
                {inputArr.map((box, index) => (
                    <input
                        ref={(el) => (inputRefs.current[index] = el)} 
                        type="text"
                        key={index}
                        value={box}
                        onChange={(e) => handleOnChange(e, index)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                        onPaste={handlePaste}
                        className="w-12 h-12 border border-black text-center text-lg font-semibold"
                        maxLength={1}
                    />
                ))}
            </div>

            <div className="text-center mt-4">
                <p>OTP Entered: <span className="pl-3"><strong>{inputArr.join("")}</strong></span></p>
            </div>
        </>
    );
};

export default OTPVerification;
