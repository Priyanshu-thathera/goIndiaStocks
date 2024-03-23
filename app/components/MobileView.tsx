import { useState } from "react";
import Discussion from "./Discussion";
import Market from "./MarketStories";

const MobileView = () => {
  const [activeTab, setActiveTab] = useState('discussion');

  const handleTabClick = (tab: 'discussion' | 'market') => {
    setActiveTab(tab);
  };

  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-center mb-4 bg-sky-700 text-white">
        <div
          className={"w-1/2 text-center py-2 px-1 no-underline " + (activeTab === 'discussion' ? "bg-sky-900" : "")}
          onClick={() => handleTabClick('discussion')}
        >
          <span>Discussion Forum</span>
        </div>
        <div
          className={"w-1/2 text-center py-2 px-1 " + (activeTab === 'market' ? "bg-sky-900" : "")}
          onClick={() => handleTabClick('market')}
        >
          <span>Market Stories</span>
        </div>
      </div>

      <div>{activeTab === 'discussion' ? <Discussion /> : <Market />}</div>
    </div>
  );
};

export default MobileView;
