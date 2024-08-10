import { useState } from "react";
import classes from "./BuyNow.module.css";
import { LuCircleDot } from "react-icons/lu";
import InfoContainer from "components/BuyNow/InfoContainer/InfoContainer";
import { Button, Heading, Text } from "components/common";
import { MdClose } from "react-icons/md";
import { handleKeyDown } from "hooks";
import { useNavigate } from "react-router-dom";

const BuyNowPage = () => {
  const navigate = useNavigate();
  const [price, setPrice] = useState(1.25);
  return (
    <section className={classes.wrapper}>
      <InfoContainer />
      <div className={classes.buyNow}>
        <div className={classes.infoContainer}>
          <div className={classes.header}>
            <Heading h3 neutral7>
              Buy now
            </Heading>
            <button
              className={classes.closeButton}
              onClick={() => navigate(-1)}
            >
              <MdClose className={classes.closeIcon} />
            </button>
          </div>
          <Text xl neutral5 semiBold>
            Confirm the transaction to buy{" "}
            <span className={classes.escape}>Escape NFT</span>{" "}
          </Text>
          <div className={classes.feature}>
            <LuCircleDot className={classes.dot} />
            <Text semiBold xl neutral7>
              Learn how to buy on Crypter
            </Text>
          </div>{" "}
        </div>

        <div className={classes.priceContainer}>
          <Text lg neutral5>
            Total price
          </Text>
          <div className={classes.inputContainer}>
            <input
              type="number"
              onKeyDown={handleKeyDown}
              className={classes.input}
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <Heading h3 neutral7>
              ETH
            </Heading>
          </div>

          <Button neutral7 wFull className={classes.confirmButton}>
            confirm
          </Button>

          <Text sm neutral5 className={classes.info}>
            We are laying the groundwork for web3 — the next generation of the
            internet full of limitless possibilities. Join the millions of
            creators, collectors, and curators who are on this journey with you.
          </Text>
        </div>
      </div>
    </section>
  );
};

export default BuyNowPage;
