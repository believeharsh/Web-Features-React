import React, { useState } from "react";
import MenuList from "./MenuList";
import { FaPlus, FaMinus } from "react-icons/fa";

const MenuItem = ({ item }) => {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  function handleToggleChildren(getCurrentLabel) {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getCurrentLabel]: !displayCurrentChildren[getCurrentLabel],
    });
    console.log(displayCurrentChildren)
  }

  return (
    <li className="group cursor-pointer mb-2">
      <div className="flex items-center justify-between bg-gray-200 hover:bg-gray-300 p-2 rounded-lg shadow transition duration-200">
        <p className="text-lg font-semibold text-gray-700 group-hover:text-blue-600">
          {item.label}
        </p>
        {item.children && item.children.length > 0 && (
          <span
            onClick={() => handleToggleChildren(item.label)}
            className="cursor-pointer p-1"
          >
            {displayCurrentChildren[item.label] ? (
              <FaMinus
                className="text-gray-600 group-hover:text-blue-600"
                size={20}
              />
            ) : (
              <FaPlus
                className="text-gray-600 group-hover:text-blue-600"
                size={20}
              />
            )}
          </span>
        )}
      </div>

      {item.children &&
        item.children.length > 0 &&
        displayCurrentChildren[item.label] && (
          <div className="ml-4 mt-2 border-l-2 border-gray-300 pl-4">
            <MenuList list={item.children} />
            {console.log(displayCurrentChildren)}
          </div>
        )}
    </li>
  );
};

export default MenuItem;
