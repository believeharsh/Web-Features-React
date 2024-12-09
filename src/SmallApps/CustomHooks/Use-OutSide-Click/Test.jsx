import { useRef, useState } from "react";
import useOutsideClick from "./Use-OutSide";

export default function UseOnclickOutsideTest() {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef();
  useOutsideClick(ref, () => setShowContent(false));

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {showContent ? (
        <div
          ref={ref}
          className="bg-gray-800 text-white rounded-lg shadow-lg p-6 w-96 text-center border border-gray-600"
        >
          <h1 className="text-2xl font-bold mb-4">This is a random content</h1>
          <p className="text-gray-300">
            Please click outside of this to close this. It won't close if you
            click inside this content.
          </p>
        </div>
      ) : (
        <button
          onClick={() => setShowContent(true)}
          className="px-6 py-3 bg-blue-600 text-white font-bold text-lg rounded-lg shadow-md hover:bg-blue-500 transition-all duration-200"
        >
          Show Content
        </button>
      )}
    </div>
  );
}
