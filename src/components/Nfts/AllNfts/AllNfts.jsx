import React from "react";
import classes from "./AllNfts.module.css";
import clsx from "clsx";
import { Text } from "components/common";
import { verifiedIcon } from "images";
import { FaCircle } from "react-icons/fa6";
const AllNfts = ({ items }) => {
  return (
    <div className={classes.cards}>
      {items.map((el, i) => (
        <div
          className={clsx(classes.card, el.escp && classes.escpCard)}
          key={i}
        >
          {" "}
          <div className={classes.imgContainer}>
            <div className={classes.box}>
              <img src={el.avater} alt={el.label} className={classes.avater} />
              <Text neutral8 lg>
                {el.label}
              </Text>
            </div>
            <img src={el.img} alt="#" className={classes.img} />
          </div>
          <div className={classes.userContainer}>
            <img src={el.userImg} alt="#" className={classes.userImg} />
            <Text xl neutral7 className={classes.author}>
              {el.author}
            </Text>
            {el.verified && (
              <img
                src={verifiedIcon}
                alt="#"
                className={classes.verifiedIcon}
              />
            )}
          </div>
          <div className={classes.priceContainer}>
            <div className={classes.currentBid}>
              <Text base neutral5 className={classes.bid}>
                <FaCircle className={classes.circle} /> Current bid
              </Text>
              <Text xl neutral7 className={classes.bidPrice}>
                {el.currentBid}
              </Text>
            </div>{" "}
            <div className={classes.buyNow}>
              <Text base neutral5 textRight>
                Buy now
              </Text>
              <Text xl neutral7 textRight className={classes.price}>
                {el.price}
              </Text>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllNfts;
