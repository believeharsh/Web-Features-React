import React, { useState } from "react";

const MenuItem = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false); // Track if the menu is expanded
  
    return (
      <li className="text-black text-xl my-2">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <p className="font-semibold">{item.label}</p>
          {item.children && item.children.length > 0 && (
            <span className="ml-2 text-gray-500">
              {isOpen ? "-" : "+"} {/* Toggle icon */}
            </span>
          )}
        </div>
  
        {/* Conditionally render children */}
        {isOpen && item.children && item.children.length > 0 && (
          <ul className="pl-4 border-l border-gray-300 ml-4">
            {/* {item.children.map((child) => (
              <MenuItem key={child.id} item={child} />
            ))} */}
            <MenuList menus={item.children} />
          </ul>
        )}
      </li>
    );
  };

const MenuList = ({ menus = [] }) => {
  return (
    <ul className="text-black text-xl list-disc">
      {menus &&
        menus.length > 0 &&
        menus.map((item) => <MenuItem key={item.id} item={item} />)}
    </ul>
  );
};

const RecursiveUI = ({ list = [] }) => {
  return (
    <div className="text-black text-xl p-4 bg-gray-50 rounded-lg shadow">
      <MenuList menus={list} />
    </div>
  );
};

export default RecursiveUI;
