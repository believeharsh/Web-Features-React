import React from 'react';
import MenuList from './MenuList';

const NestedMenus = ({ menus = [] }) => {
  return (
    <div className="p-4 max-w-lg mx-auto bg-gray-100 rounded-lg shadow-lg">
      <MenuList list={menus} />
    </div>
  );
};

export default NestedMenus;
