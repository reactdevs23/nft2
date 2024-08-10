import React from "react";
import classes from "./Tabs.module.css";
import { MdClose } from "react-icons/md";
import clsx from "clsx";

const Tabs = ({ tabs, activeTab, setActiveTab, className }) => {
  return (
    <div className={clsx(classes.tabs, className)}>
      {tabs.map((tab, i) => (
        <button
          className={clsx(classes.tab, activeTab === tab && classes.activeTab)}
          key={i}
          onClick={() => {
            setActiveTab(tab);
          }}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
