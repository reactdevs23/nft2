import React, { useState } from "react";
import classes from "./Discover.module.css";
import HeroSection from "components/Discover/HeroSection/HeroSection";
import { Button, Heading, Text } from "components/common";
import clsx from "clsx";
import { FiMoon } from "react-icons/fi";
import AllNfts from "components/Nfts/AllNfts/AllNfts";
import { avater, elnafrederick, escapeImg } from "images";
import Tabs from "components/common/Tabs/Tabs";
import { TbHexagonLetterO } from "react-icons/tb";

const Discover = () => {
  const [activeTab, setActiveTab] = useState("1 Day");
  const tabs = ["1 Day", "7 Days", "30 Days"];
  const navs = [
    { navItem: "All", numberOfItems: "" },
    { navItem: "NFTs", numberOfItems: 456789 },
    { navItem: "Collections", numberOfItems: 123987 },
    { navItem: "Artist", numberOfItems: 45678 },
  ];
  const [activeNav, setActiveNav] = useState("All");
  const [nftData, setNftData] = useState([
    {
      img: elnafrederick,
      userImg: avater,
      author: "elnafrederick",
      avater: escapeImg,
      label: "ESCP",
      currentBid: "0.4321 ETH",
      price: "2.00 ETH",
      verified: true,
    },
    {
      img: elnafrederick,
      userImg: avater,
      author: "elnafrederick",
      avater: escapeImg,
      label: "ESCP",
      currentBid: "0.4321 ETH",
      price: "2.00 ETH",
      verified: true,
    },
    {
      img: elnafrederick,
      userImg: avater,
      author: "elnafrederick",
      avater: escapeImg,
      label: "ESCP",
      currentBid: "0.4321 ETH",
      price: "2.00 ETH",
      verified: true,
    },
    {
      img: elnafrederick,
      userImg: avater,
      author: "elnafrederick",
      avater: escapeImg,
      label: "ESCP",
      currentBid: "0.4321 ETH",
      price: "2.00 ETH",
      verified: true,
    },
    {
      img: elnafrederick,
      userImg: avater,
      author: "elnafrederick",
      avater: escapeImg,
      label: "ESCP",
      currentBid: "0.4321 ETH",
      price: "2.00 ETH",
      verified: true,
    },
    {
      img: elnafrederick,
      userImg: avater,
      author: "elnafrederick",
      avater: escapeImg,
      label: "ESCP",
      currentBid: "0.4321 ETH",
      price: "2.00 ETH",
      verified: true,
    },
    {
      img: elnafrederick,
      userImg: avater,
      author: "elnafrederick",
      avater: escapeImg,
      label: "ESCP",
      currentBid: "0.4321 ETH",
      price: "2.00 ETH",
      verified: true,
    },
    {
      img: elnafrederick,
      userImg: avater,
      author: "elnafrederick",
      avater: escapeImg,
      label: "ESCP",
      currentBid: "0.4321 ETH",
      price: "2.00 ETH",
      verified: true,
    },
    {
      img: elnafrederick,
      userImg: avater,
      author: "elnafrederick",
      avater: escapeImg,
      label: "ESCP",
      currentBid: "0.4321 ETH",
      price: "2.00 ETH",
      verified: true,
    },
    {
      img: elnafrederick,
      userImg: avater,
      author: "elnafrederick",
      avater: escapeImg,
      label: "ESCP",
      currentBid: "0.4321 ETH",
      price: "2.00 ETH",
      verified: true,
    },
  ]);
  return (
    <div className={classes.wrapper}>
      <HeroSection />

      <div className={clsx(classes.container, "container")}>
        <div className={classes.navsAndThemeToggler}>
          <div className={classes.navs}>
            {navs.map(({ navItem, numberOfItems }, i) => (
              <button
                className={clsx(
                  classes.navContainer,
                  activeNav === navItem && classes.activeNav
                )}
                onClick={() => setActiveNav(navItem)}
              >
                <Text xl2 neutral7>
                  {navItem}
                </Text>
                {numberOfItems && (
                  <Text base neutral5 className={classes.length}>
                    {numberOfItems.toLocaleString()}
                  </Text>
                )}
              </button>
            ))}
          </div>{" "}
          <button className={classes.iconContainer}>
            <FiMoon className={classes.icon} />
          </button>
        </div>
        <div className={classes.header}>
          <Heading neutral7 h1 className={classes.heading}>
            NFTs
          </Heading>
          <Tabs
            className={classes.tabs}
            tabs={tabs}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <div className={clsx(classes.iconContainer, classes.hexagon)}>
            <TbHexagonLetterO cla className={classes.icon} />
          </div>
        </div>
        <AllNfts items={nftData} />{" "}
        <Button
          transparent
          className={classes.loadMoreButton}
          onClick={() => {}}
        >
          Load More
        </Button>
      </div>
    </div>
  );
};

export default Discover;
//    <button
//   className={clsx(
//     classes.tabContainer,
//     activeTab === "All" && classes.activeTab
//   )}
//   onClick={() => setActiveTab("All")}
// >
//   <Text xl2 neutral7>
//     All
//   </Text>
//   <Text base neutral5 className={classes.length}>
//     {(456789).toLocaleString()}
//   </Text>
// </button>{" "}
// <button
//   className={clsx(
//     classes.tabContainer,
//     activeTab === "NFTs" && classes.activeTab
//   )}
//   onClick={() => setActiveTab("NFTs")}
// >
//   <Text xl2 neutral7>
//     NFTs
//   </Text>
//   <Text base neutral5 className={classes.length}>
//     {(456789).toLocaleString()}
//   </Text>
// </button>{" "}
// <button
//   className={clsx(
//     classes.tabContainer,
//     activeTab === "Collections NFTs" && classes.activeTab
//   )}
//   onClick={() => setActiveTab("Collections NFTs")}
// >
//   <Text xl2 neutral7>
//     Collections NFTs
//   </Text>
//   <Text base neutral5 className={classes.length}>
//     {(123987).toLocaleString()}
//   </Text>
// </button>{" "}
// <button
//   className={clsx(
//     classes.tabContainer,
//     activeTab === "Artist" && classes.activeTab
//   )}
//   onClick={() => setActiveTab("Artist")}
// >
//   <Text xl2 neutral7>
//     Artist
//   </Text>
//   <Text base neutral5 className={classes.length}>
//     {(45678).toLocaleString()}
//   </Text>
// </button>
