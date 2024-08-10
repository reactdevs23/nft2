import React, { useState } from "react";
import classes from "./Nfts.module.css";
import clsx from "clsx";
import { FaRegCircle } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import { Button, Heading, Input, Text } from "components/common";
import { MdClose } from "react-icons/md";
import { handleKeyDown } from "hooks";
import { avater, elnafrederick, escapeImg } from "images";
import AllNfts from "components/Nfts/AllNfts/AllNfts";

const Nfts = () => {
  const [activeTab, setActiveTab] = useState("1 Day");
  const tabs = ["1 Day", "7 Days", "30 Days"];
  const [searchValue, setSearchValue] = useState("");
  const [activeStatus, setActiveStatus] = useState([]);
  const [price, setPrice] = useState(0.5);
  const allStatus = ["All", "Auction", "Offer", "Buy now"];

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

  const toggleStatus = (status) => {
    setActiveStatus((prev) => {
      if (prev.includes(status)) {
        return prev.filter((item) => item !== status);
      } else {
        return [...prev, status];
      }
    });
  };

  const filterNfts = () => {
    let filteredData = nftData;

    // Filter by status
    if (activeStatus.length > 0 && !activeStatus.includes("All")) {
      filteredData = filteredData.filter((nft) =>
        activeStatus.includes(nft.status)
      );
    }

    // Filter by search value
    if (searchValue) {
      filteredData = filteredData.filter((nft) =>
        nft.name.toLowerCase().includes(searchValue.toLowerCase())
      );
    }

    return filteredData;
  };

  const handleLoadMore = () => {
    // Load more logic here
    const moreData = [
      // New data to be loaded
    ];
    setNftData([...nftData, ...moreData]);
  };

  const filteredNfts = filterNfts();

  return (
    <section className={classes.wrapper}>
      <div className={clsx(classes.container, "container")}>
        <div className={classes.header}>
          <Heading h1 neutral7 className={classes.heading}>
            NFTs
          </Heading>

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
                }}
              >
                {tab}
              </button>
            ))}
            <button
              className={classes.closeContainer}
              onClick={() => {
                setActiveTab(null);
              }}
            >
              <MdClose className={classes.close} />
            </button>
          </div>
        </div>
        <div className={classes.searchAndTitle}>
          <Heading neutral7 h3>
            Advanced filter
          </Heading>
          <Input
            search
            type2
            value={searchValue}
            setValue={setSearchValue}
            className={classes.searchInput}
            placeholder="Search by NFTs"
          />
        </div>
        <div className={classes.statusAndPrice}>
          <div className={classes.statusContainer}>
            <Text xl neutral7>
              Status
            </Text>
            <div className={classes.buttons}>
              {allStatus.map((el, i) => (
                <Button
                  transparent
                  className={clsx(
                    classes.statusButton,
                    classes.button,
                    activeStatus.includes(el) && classes.activeStatus
                  )}
                  key={i}
                  onClick={() => toggleStatus(el)}
                >
                  {activeStatus.includes(el) ? (
                    <FaCheckCircle className={classes.icon} />
                  ) : (
                    <FaRegCircle className={classes.icon} />
                  )}
                  {el}
                </Button>
              ))}
            </div>
          </div>
          <div className={classes.statusContainer}>
            <Text xl neutral7>
              Price
            </Text>
            <div className={classes.buttons}>
              <Input
                className={clsx(classes.input, classes.priceInput)}
                type="number"
                onKeyDown={handleKeyDown}
                value={price}
                setValue={setPrice}
              />{" "}
              <Button
                wFull
                transparent
                className={clsx(classes.button, classes.maxButton)}
              >
                Max
              </Button>
              <Button
                wFull
                neutral7
                className={clsx(classes.button, classes.applyButton)}
              >
                Apply
              </Button>
            </div>
          </div>
        </div>
        <AllNfts items={filterNfts} />
        <Button
          transparent
          className={classes.loadMoreButton}
          onClick={handleLoadMore}
        >
          Load More
        </Button>
      </div>
    </section>
  );
};

export default Nfts;
