import React, { useState } from "react";
import Data from "../../DummyData/DummyData";
import AppsHeader from "../../components/AppsHeader";

const MultipleSelection = () => {
  const [singleSelect, setsingleSelect] = useState(null);
  const [enableMultiSelection, setenableMultiSelection] = useState(false);
  const [multiple, setmultiple] = useState([]);

  const handleSingleSelection = (currentId) => {
    setsingleSelect(currentId === singleSelect ? null : currentId);
  };

  const handleMultipleSelection = (currentId) => {
    let copyOfMultiple = [...multiple];
    const indexOfCurrentId = copyOfMultiple.indexOf(currentId);
    if (indexOfCurrentId === -1) copyOfMultiple.push(currentId);
    else copyOfMultiple.splice(indexOfCurrentId, 1);
    setmultiple(copyOfMultiple);
 
  };

  return (
    <div className="py-1 border-b-2 border-black">
      <AppsHeader headertext="Accordian "/>
      <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-4">
        <button
          className={`${
            enableMultiSelection ? "bg-green-500" : "bg-blue-500"
          } text-white font-bold py-2 px-6 rounded-full shadow-lg transition-all duration-300 ease-in-out hover:bg-opacity-90 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-opacity-50 ${
            enableMultiSelection
              ? "focus:ring-green-500"
              : "focus:ring-blue-500"
          }`}
          onClick={() => setenableMultiSelection(!enableMultiSelection)}
        >
          {enableMultiSelection
            ? "MultiSelection Accordion"
            : "SingleSelection Accordion"}
        </button>
      </div>

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
                onClick={
                  enableMultiSelection
                    ? () => handleMultipleSelection(item.id)
                    : () => handleSingleSelection(item.id)
                }
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {item.question}
                  </h3>
                  <p className="text-4xl font-bold text-blue-500 transform transition-transform duration-300">
                    {enableMultiSelection
                      ? multiple.includes(item.id)
                        ? "-"
                        : "+"
                      : singleSelect === item.id
                      ? "-"
                      : "+"}
                  </p>
                </div>
                {enableMultiSelection
                  ? multiple.indexOf(item.id) !== -1 && (
                      <div className="">{item.answer}</div>
                    )
                  : singleSelect === item.id && (
                      <div className="">{item.answer}</div>
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
    </div>
   
  );
};

export default MultipleSelection;
