import React, { useState } from "react";
import classes from "./Nfts.module.css";
import clsx from "clsx";
import { FaRegCircle } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import { Button, Heading, Input, Text } from "components/common";
import { MdClose } from "react-icons/md";
import { handleKeyDown } from "hooks";
import {
  avatar,
  escapeImg,
  nft1,
  nft2,
  nft3,
  nft4,
  nft5,
  nft6,
  nft7,
  nft8,
  nft9,
  nft10,
  nft11,
  nft12,
} from "images";

import { TbHexagonLetterO } from "react-icons/tb";
import SingleNft from "./SingleNft/SingleNft";
import Tabs from "components/common/Tabs/Tabs";

const Nfts = ({ className }) => {
  const [showAdvanceFilter, setShowAdvanceFilter] = useState(false);
  const [activeTab, setActiveTab] = useState("1 Day");
  const tabs = ["1 Day", "7 Days", "30 Days"];
  const [searchValue, setSearchValue] = useState("");
  const [activeStatus, setActiveStatus] = useState("All");
  const [price, setPrice] = useState(0.5);
  const allStatus = ["All", "Auction", "Offer", "Buy now"];

  const [nftData, setNftData] = useState([
    {
      img: nft1,
      userImg: avatar,
      author: "elnafrederick",
      avatar: escapeImg,
      label: "ESCP",
      currentBid: "0.4321 ETH",
      price: "2.00 ETH",
      verified: true,
      status: "Buy now",
    },
    {
      img: nft2,
      userImg: avatar,
      author: "elnafrederick",
      avatar: escapeImg,
      label: "ESCP",
      currentBid: "0.4321 ETH",
      price: "2.00 ETH",
      verified: true,
      status: "Auction",
    },
    {
      img: nft3,
      userImg: avatar,
      author: "elnafrederick",
      avatar: escapeImg,
      label: "ESCP",
      currentBid: "0.4321 ETH",
      price: "2.00 ETH",
      verified: true,
      status: "Buy now",
    },
    {
      img: nft4,
      userImg: avatar,
      author: "elnafrederick",
      avatar: escapeImg,
      label: "ESCP",
      currentBid: "0.4321 ETH",
      price: "2.00 ETH",
      verified: true,
      status: "Auction",
    },
    {
      img: nft5,
      userImg: avatar,
      author: "elnafrederick",
      avatar: escapeImg,
      label: "ESCP",
      currentBid: "0.4321 ETH",
      price: "2.00 ETH",
      verified: true,
      status: "Buy now",
    },
    {
      img: nft6,
      userImg: avatar,
      author: "elnafrederick",
      avatar: escapeImg,
      label: "ESCP",
      currentBid: "0.4321 ETH",
      price: "2.00 ETH",
      verified: true,
      status: "Auction",
    },
    {
      img: nft7,
      userImg: avatar,
      author: "elnafrederick",
      avatar: escapeImg,
      label: "ESCP",
      currentBid: "0.4321 ETH",
      price: "2.00 ETH",
      verified: true,
      status: "Buy now",
    },
    {
      img: nft8,
      userImg: avatar,
      author: "elnafrederick",
      avatar: escapeImg,
      label: "ESCP",
      currentBid: "0.4321 ETH",
      price: "2.00 ETH",
      verified: true,
      status: "Auction",
    },
    {
      img: nft9,
      userImg: avatar,
      author: "elnafrederick",
      avatar: escapeImg,
      label: "ESCP",
      currentBid: "0.4321 ETH",
      price: "2.00 ETH",
      verified: true,
      status: "Buy now",
    },
    {
      img: nft10,
      userImg: avatar,
      author: "elnafrederick",
      avatar: escapeImg,
      label: "ESCP",
      currentBid: "0.4321 ETH",
      price: "2.00 ETH",
      verified: true,
      status: "Auction",
    },
    {
      img: nft11,
      userImg: avatar,
      author: "elnafrederick",
      avatar: escapeImg,
      label: "ESCP",
      currentBid: "0.4321 ETH",
      price: "2.00 ETH",
      verified: true,
      status: "Buy now",
    },
    {
      img: nft12,
      userImg: avatar,
      author: "elnafrederick",
      avatar: escapeImg,
      label: "ESCP",
      currentBid: "0.4321 ETH",
      price: "2.00 ETH",
      verified: true,
      status: "Auction",
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
      filteredData = filteredData.filter(
        (nft) =>
          nft.author.toLowerCase().includes(searchValue.toLowerCase()) ||
          nft.label.toLowerCase().includes(searchValue.toLowerCase())
      );
    }

    return filteredData;
  };

  const filteredNfts = filterNfts();

  return (
    <section className={clsx(classes.wrapper, className)}>
      <div className={clsx(classes.container, "container")}>
        <div className={classes.header}>
          <Heading h1 neutral7 className={classes.heading}>
            NFTs
          </Heading>

          <Tabs
            className={classes.tabs}
            tabs={tabs}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />

          {showAdvanceFilter ? (
            <button
              className={classes.closeContainer}
              onClick={() => {
                setShowAdvanceFilter(false);
              }}
            >
              <MdClose className={classes.close} />
            </button>
          ) : (
            <button
              className={clsx(classes.iconContainer, classes.hexagon)}
              onClick={() => {
                setShowAdvanceFilter(true);
              }}
            >
              <TbHexagonLetterO className={classes.icon} />
            </button>
          )}
        </div>

        {showAdvanceFilter && (
          <>
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
                <div className={clsx(classes.buttons, classes.statusButtons)}>
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
                <div className={clsx(classes.buttons, classes.priceButtons)}>
                  <Input
                    className={clsx(classes.input, classes.priceInput)}
                    type="number"
                    onKeyDown={handleKeyDown}
                    value={price}
                    setValue={setPrice}
                  />
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
          </>
        )}

        <div className={classes.cards}>
          {filteredNfts.map((el, i) => (
            <SingleNft {...el} key={i} />
          ))}
        </div>

        <Button
          transparent
          className={classes.loadMoreButton}
          onClick={() => {}}
          loading
        >
          Load More
        </Button>
      </div>
    </section>
  );
};

export default Nfts;
