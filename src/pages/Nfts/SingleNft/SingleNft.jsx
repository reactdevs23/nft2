import React from "react";
import classes from "./SingleNft.module.css";
import clsx from "clsx";
import { Text } from "components/common";
import { verifiedIcon } from "images";
import { FaCircle } from "react-icons/fa6";

const SingleNft = ({
  avatar,
  label,
  img,
  userImg,
  author,
  verified,
  currentBid,
  price,
}) => {
  return (
    <div className={clsx(classes.card)}>
      {" "}
      <div className={classes.imgContainer}>
        <div className={classes.box}>
          <img src={avatar} alt={label} className={classes.avatar} />
          <Text neutral8 lg>
            {label}
          </Text>
        </div>
        <img src={img} alt="#" className={classes.img} />
      </div>
      <div className={classes.userContainer}>
        <img src={userImg} alt="#" className={classes.userImg} />
        <Text xl neutral7 className={classes.author}>
          {author}
        </Text>
        {verified && (
          <img src={verifiedIcon} alt="#" className={classes.verifiedIcon} />
        )}
      </div>
      <div className={classes.priceContainer}>
        <div className={classes.currentBid}>
          <Text base neutral5 className={classes.bid}>
            <FaCircle className={classes.circle} /> Current bid
          </Text>
          <Text xl neutral7 className={classes.bidPrice}>
            {currentBid}
          </Text>
        </div>{" "}
        <div className={classes.buyNow}>
          <Text base neutral5 textRight>
            Buy now
          </Text>
          <Text xl neutral7 textRight className={classes.price}>
            {price}
          </Text>
        </div>
      </div>
    </div>
  );
};
export default SingleNft;
