import React from "react";
import MenuItem from "./MenuItem";

const MenuList = ({ list = [] }) => {
  return (
    <ul className="pl-4 space-y-2">
      {list &&
        list.length > 0 &&
        list.map((item) => <MenuItem item={item} key={item.id} />)}
    </ul>
  );
};

export default MenuList;
