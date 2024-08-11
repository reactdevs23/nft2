import React, { useState } from "react";
import classes from "./Navs.module.css";
import { Text } from "components/common";
import { FaChevronUp, FaChevronDown } from "react-icons/fa6";
import clsx from "clsx";
const Navs = ({ items, activeNav, setActiveNav }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <>
      <div
        className={classes.navHeader}
        onClick={() => setShowDropdown((prev) => !prev)}
      >
        <div className={classes.navContainer}>
          <Text xl2 neutral7>
            {activeNav.navItem}{" "}
          </Text>
          <Text base neutral5>
            {activeNav.numberOfItems && (
              <span className={classes.length}>
                {activeNav.numberOfItems.toLocaleString()}
              </span>
            )}
          </Text>
        </div>
        {showDropdown ? (
          <FaChevronUp className={classes.arrow} />
        ) : (
          <FaChevronDown className={classes.arrow} />
        )}
      </div>
      <div className={clsx(classes.navs, showDropdown && classes.showDropdown)}>
        {items.map((el, i) => (
          <button
            key={i}
            className={clsx(
              classes.navContainer,
              activeNav.navItem === el.navItem && classes.activeNav
            )}
            onClick={() => {
              setActiveNav(el);
              setShowDropdown(false);
            }}
          >
            <Text xl2 neutral7 className={classes.navItem}>
              {el.navItem}
            </Text>
            {el.numberOfItems && (
              <Text base neutral5 className={classes.length}>
                {el.numberOfItems.toLocaleString()}
              </Text>
            )}
          </button>
        ))}
      </div>
    </>
  );
};

export default Navs;
