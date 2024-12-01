import React, { useState } from "react";
import Data from "./Data";

const MyAccordianTwo = () => {
  const [selected, setselected] = useState(null);
  const [enableMulti, setEnableMulti] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSingleSelect = (CurrentId) => {
    setselected(CurrentId == selected ? null : CurrentId);
  };

  const handleMultipleSelect = (CurrentId) => {
    let copyOfMultiple = [...multiple];
    const IndexofCurrentId = copyOfMultiple.indexOf(CurrentId);
    if (IndexofCurrentId == -1) copyOfMultiple.push(CurrentId);
    else copyOfMultiple.splice(IndexofCurrentId, 1);
    setMultiple(copyOfMultiple);
  };
  return (
    <>
      <button className="" onClick={() => setEnableMulti(!enableMulti)}>
        EnableMultiSelect
      </button>
      <div className="cursor-pointer">
        {Data && Data.length > 0
          ? Data.map((DataItem) => {
              return (
                <div
                  className=""
                  key={DataItem.id}
                  onClick={
                    enableMulti
                      ? () => handleMultipleSelect(DataItem.id)
                      : () => handleSingleSelect(DataItem.id)
                  }
                >
                  <div className="">{DataItem.question}</div>
                  <span>+</span>
                  {enableMulti
                    ? multiple.indexOf(DataItem.id) !== -1 && (
                        <div className="">{DataItem.answer}</div>
                      )
                    : selected == DataItem.id && (
                        <div className="">{DataItem.answer}</div>
                      )}
                </div>
              );
            })
          : null}
      </div>
    </>
  );
};

export default MyAccordianTwo;
