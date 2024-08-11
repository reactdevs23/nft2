import React, { useState } from "react";
import classes from "./Discover.module.css";
import HeroSection from "components/Discover/HeroSection/HeroSection";

import clsx from "clsx";
import { FiMoon, FiSun } from "react-icons/fi";
import Nfts from "pages/Nfts/Nfts";
import Navs from "components/Discover/Navs/Navs";

const Discover = () => {
  const navs = [
    { navItem: "All", numberOfItems: "" },
    { navItem: "NFTs", numberOfItems: 456789 },
    { navItem: "Collections", numberOfItems: 123987 },
    { navItem: "Artist", numberOfItems: 45678 },
  ];
  const [activeNav, setActiveNav] = useState({
    navItem: "All",
    numberOfItems: "",
  });
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className={classes.wrapper}>
      <HeroSection />

      <div
        className={clsx(
          classes.container,

          darkTheme ? "darkTheme" : "lightTheme"
        )}
      >
        <div className={clsx(classes.navsAndThemeToggler, "container")}>
          <Navs
            items={navs}
            activeNav={activeNav}
            setActiveNav={setActiveNav}
          />
          <button
            className={clsx(classes.iconContainer, classes.themeToggler)}
            onClick={() => setDarkTheme((prev) => !prev)}
          >
            {darkTheme ? (
              <FiSun className={classes.icon} />
            ) : (
              <FiMoon className={classes.icon} />
            )}
          </button>
        </div>

        <Nfts className={classes.myNfts} noPadding />
      </div>
    </div>
  );
};

export default Discover;
