import React, { useState } from "react";

interface TabsProps {
  tabTitles: string[];
  onTabClick: (title: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ tabTitles, onTabClick }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    onTabClick(tabTitles[index]);
  };

  return (
    <div className="flex">
      {tabTitles.map((title, index) => (
        <div>
          <div
            style={{
              color: activeTab === index ? "#1814F3" : "",
            }}
            key={index}
            onClick={() => handleTabClick(index)}
            className={`tab ${
              activeTab === index ? "active-tab" : ""
            } cursor-pointer text-blue-700 font-inter font-medium text-base px-4 py-2`}
          >
            {title}
          </div>
          <div
            style={
              activeTab === index
                ? {
                    backgroundColor: "#1814F3",
                    height: "2px",
                  }
                : {}
            }
            className={`bottom-line`}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default Tabs;
