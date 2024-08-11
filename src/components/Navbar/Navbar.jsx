import React, { useState, useEffect, useRef } from "react";
import { IoMdClose } from "react-icons/io";
import { RxTextAlignRight } from "react-icons/rx";

import classes from "./Navbar.module.css";

import { Link } from "react-router-dom";

import { avatar, logo, notificationIcon } from "images";
import Dropdown from "./Dropdown/Dropdown";
import { Button, Input } from "components/common";
import { FiPlus } from "react-icons/fi";
import clsx from "clsx";

const Navbar = () => {
  const dropDownRef = useRef(null);
  const [searchValue, setSearchValue] = useState();
  const [connected, setConnected] = useState(false);
  const [isDropdownActive, setIsDropdownActive] = useState(false);

  const dropdownRoutes = [
    { navItem: "Discover1", to: "/discover1" },
    { navItem: "Discover2", to: "/discover2" },
    { navItem: "Discover3", to: "/discover3" },
  ];
  const [sidebar, setSidebar] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 90) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={[classes.wrapper, isScrolled && classes.wrapperBg].join(" ")}
    >
      <header className={[classes.header, "container"].join(" ")}>
        <div className={classes.logoAndSearch}>
          <Link
            className={[classes.navItem, classes.logoContainer].join(" ")}
            to="/"
            onClick={() => setSidebar((prev) => !prev)}
          >
            {" "}
            <img src={logo} alt="#" className={classes.logo} />
          </Link>
          <Input
            placeholder="Search"
            search
            setValue={setSearchValue}
            className={clsx(classes.searchInput, classes.deskstopSearchInput)}
            value={searchValue}
          />
        </div>
        <div className={classes.navItemsAndButton}>
          <div
            className={[classes.navItems, sidebar && classes.sidebar].join(" ")}
          >
            <Input
              placeholder="Search"
              search
              setValue={setSearchValue}
              className={clsx(classes.searchInput, classes.mobileSearchInput)}
              value={searchValue}
            />
            <Dropdown
              label="Service"
              isActive={isDropdownActive}
              setIsActive={setIsDropdownActive}
              onSelect={(val) => {
                setIsDropdownActive(false);
              }}
              dropdownItems={dropdownRoutes}
              dropdownRef={dropDownRef}
            >
              Discover
            </Dropdown>
            <Link
              className={classes.navItem}
              to="/feed"
              onClick={() => setSidebar((prev) => !prev)}
            >
              FEED
            </Link>{" "}
            {connected ? (
              <Button transparent className={clsx(classes.button)}>
                create <FiPlus className={classes.plusIcon} />
              </Button>
            ) : (
              <Button
                transparent
                className={clsx(classes.button)}
                onClick={() => setConnected(true)}
              >
                Connect Wallet
              </Button>
            )}
          </div>
          <div className={classes.buttonContainer}>
            {connected && (
              <>
                <button>
                  <img
                    src={notificationIcon}
                    alt="#"
                    className={classes.notificatIcon}
                  />
                </button>
                <button>
                  <img src={avatar} alt="#" className={classes.avatarImg} />
                </button>
              </>
            )}
            {sidebar ? (
              <IoMdClose
                className={classes.icon}
                onClick={() => setSidebar((prev) => !prev)}
              />
            ) : (
              <RxTextAlignRight
                className={classes.icon}
                onClick={() => setSidebar((prev) => !prev)}
              />
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
