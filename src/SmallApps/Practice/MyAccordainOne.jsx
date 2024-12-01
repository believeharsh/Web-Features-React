import React, { useState } from "react";
import Data from "./Data";

const MyAccordainOne = () => {
    const [selected, setselected] = useState(null) ; 
    const handleSingleSelect = (CurrentId) => {
        setselected(CurrentId == selected ? null : CurrentId)
    }
  return (
    <div className="cursor-pointer">
      {Data && Data.length > 0
        ? Data.map((DataItem) => {
            return (
                <div className="" 
                key={DataItem.id}
                onClick={() => handleSingleSelect(DataItem.id)}>
                    <div className="">
                        {DataItem.question}
                    </div>
                    <span>+</span>

                    {selected == DataItem.id &&(
                        <div className="">
                            {DataItem.answer}
                        </div>
                    )}
                </div>
            )
          })
        : null}
    </div>
  );
};

export default MyAccordainOne;
