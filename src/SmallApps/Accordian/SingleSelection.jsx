import React, { useState } from "react";
import Data from "../../DummyData/DummyData";

const SingleSelection = () => {
  const [singleSelect, setsingleSelect] = useState(null);

  const handleSingleSelection = (currentId) => {
    setsingleSelect(currentId === singleSelect ? null : currentId);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-4">
        {Data && Data.length > 0 ? (
          Data.map((item) => {
            return (
              <div
                className={`p-4 border rounded-lg shadow-md cursor-pointer transition-all duration-300 ${
                  singleSelect === item.id
                    ? "bg-blue-100 border-blue-500"
                    : "bg-white"
                }`}
                key={item.id}
                onClick={() => handleSingleSelection(item.id)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {item.question}
                  </h3>
                  <p className="text-4xl font-bold text-blue-500 transform transition-transform duration-300">
                    {singleSelect === item.id ? "-" : "+"}
                  </p>
                </div>
                {singleSelect === item.id && (
                  <div className="mt-4 text-gray-600">
                    <h2 className="text-lg">{item.answer}</h2>
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="text-center text-red-500 font-semibold">
            NO Data Found
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleSelection;
