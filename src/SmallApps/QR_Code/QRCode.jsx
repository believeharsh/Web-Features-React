import React, { useState } from "react";
import QRCode from "react-qr-code";

const GetQRCode = () => {
    const [qrCode, setQrCode] = useState("");
    const [input, setInput] = useState("");

    const handleGenerateQRCode = () => {
        setQrCode(input);
        setInput("");
    };

    return (
        <div className="flex flex-col items-center justify-center bg-gray-50 p-6 rounded-lg shadow-md max-w-md mx-auto">
            <h1 className="text-xl font-bold mb-4 text-gray-800">QR Code Generator</h1>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter your value here"
                className="mb-4 p-2 w-full border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
                onClick={handleGenerateQRCode}
                disabled={input.trim() === ""}
                className={`mb-4 px-6 py-2 bg-blue-500 text-white rounded-lg font-medium transition-colors ${
                    input.trim() !== "" ? "hover:bg-blue-600" : "opacity-50 cursor-not-allowed"
                }`}
            >
                Generate
            </button>
            <div className="p-4 bg-white border-2 border-gray-200 rounded-lg">
                {qrCode && <QRCode value={qrCode} />}
            </div>
        </div>
    );
};

export default GetQRCode;
