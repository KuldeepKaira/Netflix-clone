import React, { useState } from "react";
import Tabs from "./Tabs.js";
import { tablabels } from "./constant.js";

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState(tablabels.CANCEL_AT_ANY_TIME);

  const tabHandler = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <Tabs activeTabName={activeTab} onClickTab={tabHandler} />
    </div>
  );
};

export default TabComponent;
