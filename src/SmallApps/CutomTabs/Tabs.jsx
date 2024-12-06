import { useState } from "react";

const Tabs = ({ tabContent, onChange }) => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  function handleOnClick(getCurrentIndex) {
    setCurrentTabIndex(getCurrentIndex);
    onChange(getCurrentIndex);
  }

  return (
    <div className="max-w-4xl mx-auto mt-8">
      {/* Tab Labels */}
      <div className="flex justify-center space-x-4">
        {tabContent.map((item, index) => (
          <div
            key={index}
            className={`cursor-pointer px-6 py-3 text-sm font-medium rounded-lg transition duration-300 ${
              currentTabIndex === index
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-gray-200 text-gray-700 hover:bg-blue-500 hover:text-white"
            }`}
            onClick={() => handleOnClick(index)}
          >
            {item.label}
          </div>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-6 p-6 border border-gray-300 rounded-lg shadow-md bg-gray-50">
        {tabContent[currentTabIndex] && tabContent[currentTabIndex].content}
      </div>
    </div>
  );
};

export default Tabs;
