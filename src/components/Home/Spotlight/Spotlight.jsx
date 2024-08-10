import React, { useState } from "react";
import classes from "./Spotlight.module.css";
import clsx from "clsx";
import { Button, Heading, Text } from "components/common";
import { escapeImg, randomUser } from "images";

const Spotlight = () => {
  const [activeTab, setActiveTab] = useState("1 Day");
  const [visibleCount, setVisibleCount] = useState(5); // Initial number of items to show

  const tabs = ["1 Day", "7 Days", "30 Days"];

  const data = [
    {
      img: escapeImg,
      title: "The Currency",
      price: "12.29 ETH",
      buyers: [escapeImg, escapeImg, escapeImg],
      days: "1 Day",
    },
    {
      img: escapeImg,
      title: "The Currency",
      price: "12.29 ETH",
      buyers: [escapeImg, escapeImg, escapeImg],
      days: "7 Days",
    },
    {
      img: escapeImg,
      title: "The Currency",
      price: "12.29 ETH",
      buyers: [escapeImg, escapeImg, escapeImg],
      days: "1 Day",
    },
    {
      img: escapeImg,
      title: "The Currency",
      price: "12.29 ETH",
      buyers: [escapeImg, escapeImg, escapeImg],
      days: "7 Days",
    },
    {
      img: escapeImg,
      title: "The Currency",
      price: "12.29 ETH",
      buyers: [escapeImg, escapeImg, escapeImg],
      days: "1 Day",
    },
    {
      img: escapeImg,
      title: "The Currency",
      price: "12.29 ETH",
      buyers: [escapeImg, escapeImg, escapeImg],
      days: "7 Days",
    },
    {
      img: escapeImg,
      title: "The Currency",
      price: "12.29 ETH",
      buyers: [escapeImg, escapeImg, escapeImg],
      days: "1 Day",
    },
    {
      img: escapeImg,
      title: "The Currency",
      price: "12.29 ETH",
      buyers: [escapeImg, escapeImg, escapeImg],
      days: "7 Days",
    },
    {
      img: escapeImg,
      title: "The Currency",
      price: "12.29 ETH",
      buyers: [escapeImg, escapeImg, escapeImg],
      days: "1 Day",
    },
    {
      img: escapeImg,
      title: "The Currency",
      price: "12.29 ETH",
      buyers: [escapeImg, escapeImg, escapeImg],
      days: "7 Days",
    },
    {
      img: escapeImg,
      title: "The Currency",
      price: "12.29 ETH",
      buyers: [escapeImg, escapeImg, escapeImg],
      days: "1 Day",
    },
    {
      img: escapeImg,
      title: "The Currency",
      price: "12.29 ETH",
      buyers: [escapeImg, escapeImg, escapeImg],
      days: "7 Days",
    },
    {
      img: escapeImg,
      title: "The Currency",
      price: "12.29 ETH",
      buyers: [escapeImg, escapeImg, escapeImg],
      days: "1 Day",
    },
    {
      img: escapeImg,
      title: "The Currency",
      price: "12.29 ETH",
      buyers: [escapeImg, escapeImg, escapeImg],
      days: "30 Days",
    },
    {
      img: escapeImg,
      title: "The Currency",
      price: "12.29 ETH",
      buyers: [escapeImg, escapeImg, escapeImg],
      days: "7 Days",
    },
    {
      img: escapeImg,
      title: "The Currency",
      price: "12.29 ETH",
      buyers: [escapeImg, escapeImg, escapeImg],
      days: "1 Day",
    },
    {
      img: escapeImg,
      title: "The Currency",
      price: "12.29 ETH",
      buyers: [escapeImg, escapeImg, escapeImg],
      days: "30 Days",
    },
    {
      img: escapeImg,
      title: "The Currency",
      price: "12.29 ETH",
      buyers: [escapeImg, escapeImg, escapeImg],
      days: "7 Days",
    },
    {
      img: escapeImg,
      title: "The Currency",
      price: "12.29 ETH",
      buyers: [escapeImg, escapeImg, escapeImg],
      days: "1 Day",
    },
    {
      img: escapeImg,
      title: "The Currency",
      price: "12.29 ETH",
      buyers: [escapeImg, escapeImg, escapeImg],
      days: "30 Days",
    },
    {
      img: escapeImg,
      title: "The Currency",
      price: "12.29 ETH",
      buyers: [escapeImg, escapeImg, escapeImg],
      days: "7 Days",
    },
    {
      img: escapeImg,
      title: "The Currency",
      price: "12.29 ETH",
      buyers: [escapeImg, escapeImg, escapeImg],
      days: "1 Day",
    },
    {
      img: escapeImg,
      title: "The Currency",
      price: "12.29 ETH",
      buyers: [escapeImg, escapeImg, escapeImg],
      days: "30 Days",
    },
    {
      img: escapeImg,
      title: "The Currency",
      price: "12.29 ETH",
      buyers: [escapeImg, escapeImg, escapeImg],
      days: "7 Days",
    },
    {
      img: escapeImg,
      title: "The Currency",
      price: "12.29 ETH",
      buyers: [escapeImg, escapeImg, escapeImg],
      days: "1 Day",
    },
    {
      img: escapeImg,
      title: "The Currency",
      price: "12.29 ETH",
      buyers: [escapeImg, escapeImg, escapeImg],
      days: "30 Days",
    },
    {
      img: escapeImg,
      title: "The Currency",
      price: "12.29 ETH",
      buyers: [escapeImg, escapeImg, escapeImg],
      days: "7 Days",
    },
    {
      img: escapeImg,
      title: "The Currency",
      price: "12.29 ETH",
      buyers: [escapeImg, escapeImg, escapeImg],
      days: "1 Day",
    },
    {
      img: escapeImg,
      title: "The Currency",
      price: "12.29 ETH",
      buyers: [escapeImg, escapeImg, escapeImg],
      days: "30 Days",
    },
    {
      img: escapeImg,
      title: "The Currency",
      price: "12.29 ETH",
      buyers: [escapeImg, escapeImg, escapeImg],
      days: "7 Days",
    },
    {
      img: escapeImg,
      title: "The Currency",
      price: "12.29 ETH",
      buyers: [escapeImg, escapeImg, escapeImg],
      days: "1 Day",
    },
    {
      img: escapeImg,
      title: "The Currency",
      price: "12.29 ETH",
      buyers: [escapeImg, escapeImg, escapeImg],
      days: "30 Days",
    },
    {
      img: escapeImg,
      title: "The Currency",
      price: "12.29 ETH",
      buyers: [escapeImg, escapeImg, escapeImg],
      days: "7 Days",
    },
    {
      img: escapeImg,
      title: "The Currency",
      price: "12.29 ETH",
      buyers: [escapeImg, escapeImg, escapeImg],
      days: "1 Day",
    },
    {
      img: escapeImg,
      title: "The Currency",
      price: "12.29 ETH",
      buyers: [escapeImg, escapeImg, escapeImg],
      days: "30 Days",
    },
    {
      img: escapeImg,
      title: "The Currency",
      price: "12.29 ETH",
      buyers: [escapeImg, escapeImg, escapeImg],
      days: "7 Days",
    },
    {
      img: escapeImg,
      title: "The Currency",
      price: "12.29 ETH",
      buyers: [escapeImg, escapeImg, escapeImg],
      days: "1 Day",
    },
    {
      img: escapeImg,
      title: "The Currency",
      price: "12.29 ETH",
      buyers: [escapeImg, escapeImg, escapeImg],
      days: "30 Days",
    },
    {
      img: escapeImg,
      title: "The Currency",
      price: "12.29 ETH",
      buyers: [escapeImg, escapeImg, escapeImg],
      days: "7 Days",
    },
    {
      img: escapeImg,
      title: "The Currency",
      price: "12.29 ETH",
      buyers: [escapeImg, escapeImg, escapeImg],
      days: "1 Day",
    },
    {
      img: escapeImg,
      title: "The Currency",
      price: "12.29 ETH",
      buyers: [escapeImg, escapeImg, escapeImg],
      days: "30 Days",
    },
    {
      img: escapeImg,
      title: "The Currency",
      price: "12.29 ETH",
      buyers: [escapeImg, escapeImg, escapeImg],
      days: "7 Days",
    },
    {
      img: escapeImg,
      title: "The Currency",
      price: "12.29 ETH",
      buyers: [escapeImg, escapeImg, escapeImg],
      days: "1 Day",
    },
    {
      img: escapeImg,
      title: "The Currency",
      price: "12.29 ETH",
      buyers: [escapeImg, escapeImg, escapeImg],
      days: "30 Days",
    },
    {
      img: escapeImg,
      title: "The Currency",
      price: "12.29 ETH",
      buyers: [escapeImg, escapeImg, escapeImg],
      days: "7 Days",
    },
    {
      img: escapeImg,
      title: "The Currency",
      price: "12.29 ETH",
      buyers: [escapeImg, escapeImg, escapeImg],
      days: "1 Day",
    },
    {
      img: escapeImg,
      title: "The Currency",
      price: "12.29 ETH",
      buyers: [escapeImg, escapeImg, escapeImg],
      days: "30 Days",
    },
    {
      img: escapeImg,
      title: "The Currency",
      price: "12.29 ETH",
      buyers: [escapeImg, escapeImg, escapeImg],
      days: "7 Days",
    },
    {
      img: escapeImg,
      title: "The Currency",
      price: "12.29 ETH",
      buyers: [escapeImg, escapeImg, escapeImg],
      days: "1 Day",
    },
    {
      img: escapeImg,
      title: "The Currency",
      price: "12.29 ETH",
      buyers: [escapeImg, escapeImg, escapeImg],
      days: "30 Days",
    },
    {
      img: escapeImg,
      title: "The Currency",
      price: "12.29 ETH",
      buyers: [escapeImg, escapeImg, escapeImg],
      days: "7 Days",
    },
    {
      img: escapeImg,
      title: "The Currency",
      price: "12.29 ETH",
      buyers: [escapeImg, escapeImg, escapeImg],
      days: "1 Day",
    },
    {
      img: escapeImg,
      title: "The Currency",
      price: "12.29 ETH",
      buyers: [escapeImg, escapeImg, escapeImg],
      days: "30 Days",
    },
    {
      img: escapeImg,
      title: "The Currency",
      price: "12.29 ETH",
      buyers: [escapeImg, escapeImg, escapeImg],
      days: "7 Days",
    },
    {
      img: escapeImg,
      title: "The Currency",
      price: "12.29 ETH",
      buyers: [escapeImg, escapeImg, escapeImg],
      days: "1 Day",
    },
    {
      img: escapeImg,
      title: "The Currency",
      price: "12.29 ETH",
      buyers: [escapeImg, escapeImg, escapeImg],
      days: "30 Days",
    },
    {
      img: escapeImg,
      title: "The Currency",
      price: "12.29 ETH",
      buyers: [escapeImg, escapeImg, escapeImg],
      days: "7 Days",
    },
    {
      img: escapeImg,
      title: "The Currency",
      price: "12.29 ETH",
      buyers: [escapeImg, escapeImg, escapeImg],
      days: "1 Day",
    },
    {
      img: escapeImg,
      title: "The Currency",
      price: "12.29 ETH",
      buyers: [escapeImg, escapeImg, escapeImg],
      days: "30 Days",
    },
  ];

  // Filter the data based on the active tab
  const filteredData = data.filter((el) => el.days === activeTab);

  // Calculate the number of items remaining to show
  const remainingItems = Math.max(filteredData.length - visibleCount, 0);

  const handleExploreMore = () => {
    setVisibleCount((prevCount) => prevCount + 5); // Show 4 more items on each click
  };

  return (
    <section className={classes.wrapper}>
      <div className={clsx(classes.container, "container")}>
        <div className={classes.header}>
          <div>
            <Heading h1 className={classes.heading}>
              Spotlight.{" "}
            </Heading>
            <Text xl2 neutral5>
              Projects you'll love
            </Text>
          </div>
          <div className={classes.tabs}>
            {tabs.map((tab, i) => (
              <button
                className={clsx(
                  classes.tab,
                  activeTab === tab && classes.activeTab
                )}
                key={i}
                onClick={() => {
                  setActiveTab(tab);
                  setVisibleCount(5); // Reset visible count when switching tabs
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className={classes.cards}>
          {filteredData.slice(0, visibleCount).map((el, i) => (
            <div className={classes.card} key={i}>
              <div className={classes.imgContainer}>
                <img src={el.img} alt={el.title} className={classes.img} />
              </div>
              <div className={classes.infoContainer}>
                <Text neutral1 xl2>
                  {el.title}
                </Text>
                <div className={classes.buyers}>
                  {el.buyers.map((buyer, buyerId) => (
                    <img
                      src={buyer}
                      alt="#"
                      className={classes.buyer}
                      style={{
                        marginLeft: buyerId === 0 ? 0 : `${-15}px`,
                      }}
                      key={buyerId}
                    />
                  ))}
                </div>
                <div className={classes.buyNow}>
                  <button className={classes.buyNowButton}>Buy now</button>
                  <Text base neutral1>
                    {el.price}
                  </Text>
                </div>
              </div>
            </div>
          ))}
        </div>

        {remainingItems > 0 && (
          <Button uppercase onClick={handleExploreMore}>
            Explore more{" "}
            <Text xs neutral7 className={classes.totalCard}>
              {remainingItems}
            </Text>
          </Button>
        )}
      </div>
    </section>
  );
};

export default Spotlight;
