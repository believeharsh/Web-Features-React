import React from "react";

const AppsHeader = ({ headertext }) => {
  return (
    <button className="bg-blue-500 text-white p-4 rounded-lg shadow-md m-6">
      <p className="text-2xl font-bold text-center">{headertext}</p>
    </button>
  );
};

export default AppsHeader;