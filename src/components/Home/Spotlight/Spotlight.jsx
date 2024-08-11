import React, { useState } from "react";
import classes from "./Spotlight.module.css";
import clsx from "clsx";
import { Button, Heading, Text } from "components/common";
import {
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  avatar1,
  avatar2,
  avatar3,
  avatar5,
  avatar4,
} from "images";

const Spotlight = () => {
  const [activeTab, setActiveTab] = useState("1 Day");
  const [visibleCount, setVisibleCount] = useState(5); // Initial number of items to show

  const tabs = ["1 Day", "7 Days", "30 Days"];

  const data = [
    {
      img: img1,
      title: "The Currency",
      price: "12.29 ETH",
      buyers: [avatar1, avatar2, avatar3],
      days: "1 Day",
    },
    {
      img: img2,
      title: "The Currency",
      price: "12.29 ETH",
      buyers: [avatar4, avatar5, avatar1],
      days: "7 Days",
    },
    {
      img: img3,
      title: "The Currency",
      price: "12.29 ETH",
      buyers: [avatar1, avatar2, avatar3],
      days: "1 Day",
    },
    {
      img: img4,
      title: "The Currency",
      price: "12.29 ETH",
      buyers: [avatar4, avatar5, avatar1],
      days: "7 Days",
    },
    {
      img: img5,
      title: "The Currency",
      price: "12.29 ETH",
      buyers: [avatar1, avatar2, avatar3],
      days: "1 Day",
    },
    {
      img: img6,
      title: "The Currency",
      price: "12.29 ETH",
      buyers: [avatar4, avatar5, avatar1],
      days: "7 Days",
    },
    {
      img: img7,
      title: "The Currency",
      price: "12.29 ETH",
      buyers: [avatar1, avatar2, avatar3],
      days: "1 Day",
    },
    {
      img: img8,
      title: "The Currency",
      price: "12.29 ETH",
      buyers: [avatar4, avatar5, avatar1],
      days: "7 Days",
    },
    {
      img: img9,
      title: "The Currency",
      price: "12.29 ETH",
      buyers: [avatar1, avatar2, avatar3],
      days: "1 Day",
    },
    {
      img: img10,
      title: "The Currency",
      price: "12.29 ETH",
      buyers: [avatar4, avatar5, avatar1],
      days: "7 Days",
    },
    {
      img: img11,
      title: "The Currency",
      price: "12.29 ETH",
      buyers: [avatar1, avatar2, avatar3],
      days: "1 Day",
    },
    {
      img: img12,
      title: "The Currency",
      price: "12.29 ETH", // Added missing price
      buyers: [avatar4, avatar5, avatar1],
      days: "7 Days",
    },
    {
      img: img13,
      title: "The Currency",
      price: "12.29 ETH",
      buyers: [avatar1, avatar2, avatar3],
      days: "1 Day",
    },
    {
      img: img14,
      title: "The Currency",
      price: "12.29 ETH",
      buyers: [avatar4, avatar5, avatar1],
      days: "30 Days",
    },
    {
      img: img15,
      title: "The Currency",
      price: "12.29 ETH",
      buyers: [avatar1, avatar2, avatar3],
      days: "7 Days",
    },
    {
      img: img16,
      title: "The Currency",
      price: "12.29 ETH",
      buyers: [avatar4, avatar5, avatar1],
      days: "1 Day",
    },
    {
      img: img17,
      title: "The Currency",
      price: "12.29 ETH",
      buyers: [avatar1, avatar2, avatar3],
      days: "30 Days",
    },
    {
      img: img18,
      title: "The Currency",
      price: "12.29 ETH",
      buyers: [avatar4, avatar5, avatar1],
      days: "7 Days",
    },
    {
      img: img1,
      title: "The Currency",
      price: "12.29 ETH",
      buyers: [avatar1, avatar2, avatar3],
      days: "1 Day",
    },
    {
      img: img2,
      title: "The Currency",
      price: "12.29 ETH",
      buyers: [avatar4, avatar5, avatar1],
      days: "7 Days",
    },
    {
      img: img3,
      title: "The Currency",
      price: "12.29 ETH",
      buyers: [avatar1, avatar2, avatar3],
      days: "1 Day",
    },
    {
      img: img4,
      title: "The Currency",
      price: "12.29 ETH",
      buyers: [avatar4, avatar5, avatar1],
      days: "7 Days",
    },
    {
      img: img5,
      title: "The Currency",
      price: "12.29 ETH",
      buyers: [avatar1, avatar2, avatar3],
      days: "1 Day",
    },
    {
      img: img6,
      title: "The Currency",
      price: "12.29 ETH",
      buyers: [avatar4, avatar5, avatar1],
      days: "7 Days",
    },
    {
      img: img7,
      title: "The Currency",
      price: "12.29 ETH",
      buyers: [avatar1, avatar2, avatar3],
      days: "1 Day",
    },
    {
      img: img8,
      title: "The Currency",
      price: "12.29 ETH",
      buyers: [avatar4, avatar5, avatar1],
      days: "7 Days",
    },
    {
      img: img9,
      title: "The Currency",
      price: "12.29 ETH",
      buyers: [avatar1, avatar2, avatar3],
      days: "1 Day",
    },
    {
      img: img10,
      title: "The Currency",
      price: "12.29 ETH",
      buyers: [avatar4, avatar5, avatar1],
      days: "7 Days",
    },
    {
      img: img11,
      title: "The Currency",
      price: "12.29 ETH",
      buyers: [avatar1, avatar2, avatar3],
      days: "1 Day",
    },
    {
      img: img12,
      title: "The Currency",
      price: "12.29 ETH", // Added missing price
      buyers: [avatar4, avatar5, avatar1],
      days: "7 Days",
    },
    {
      img: img13,
      title: "The Currency",
      price: "12.29 ETH",
      buyers: [avatar1, avatar2, avatar3],
      days: "1 Day",
    },
    {
      img: img14,
      title: "The Currency",
      price: "12.29 ETH",
      buyers: [avatar4, avatar5, avatar1],
      days: "30 Days",
    },
    {
      img: img15,
      title: "The Currency",
      price: "12.29 ETH",
      buyers: [avatar1, avatar2, avatar3],
      days: "7 Days",
    },
    {
      img: img16,
      title: "The Currency",
      price: "12.29 ETH",
      buyers: [avatar4, avatar5, avatar1],
      days: "1 Day",
    },
    {
      img: img17,
      title: "The Currency",
      price: "12.29 ETH",
      buyers: [avatar1, avatar2, avatar3],
      days: "30 Days",
    },
    {
      img: img18,
      title: "The Currency",
      price: "12.29 ETH",
      buyers: [avatar4, avatar5, avatar1],
      days: "7 Days",
    },
  ];

  const filteredData = data.filter((el) => el.days === activeTab);

  const remainingItems = Math.max(filteredData.length - visibleCount, 0);

  const handleExploreMore = () => {
    setVisibleCount((prevCount) => prevCount + 5);
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
