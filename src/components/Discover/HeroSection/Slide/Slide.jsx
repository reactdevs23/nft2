import classes from "./Slide.module.css";
import { Button, Heading, Text } from "components/common";
import { FaArrowRight } from "react-icons/fa6";

import CountDown from "../CountDown/CountDown";

import clsx from "clsx";

const Slide = ({ title, img, avater, login, time }) => {
  return (
    <div className={classes.slide}>
      <img src={img} alt="Slide" className={classes.image} />
      <div className={clsx(classes.bottomBar, "container")}>
        <div className={classes.leftSide}>
          <div className={classes.top}>
            <Heading h1>{title}</Heading>

            <div className={classes.card}>
              <img src={avater} alt={login} className={classes.avater} />
              <Text neutral1 lg>
                {login}
              </Text>
            </div>
          </div>

          <div className={classes.buttonContainer}>
            <Button link="#" transparent className={classes.viewNftButton}>
              {" "}
              View Nft
              <FaArrowRight className={classes.arrow} />
            </Button>

            <Button className={classes.placeABidButton}> place a bid</Button>
          </div>
        </div>
        <CountDown time={time} />
      </div>
    </div>
  );
};

export default Slide;
