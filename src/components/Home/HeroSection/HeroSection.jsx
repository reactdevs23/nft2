import React from "react";
import classes from "./HeroSection.module.css";
import { Button, Heading, Text } from "components/common";
import clsx from "clsx";
import { escapeImg, heroImg, randomUser } from "images";

const HeroSection = () => {
  return (
    <section className={classes.wrapper}>
      <div className={clsx(classes.container, "container")}>
        <div className={classes.infoContainer}>
          <div className={classes.cards}>
            <div className={classes.card}>
              <img
                src={randomUser}
                alt="User"
                className={classes.randomUserImg}
              />
              <Text neutral1 lg>
                @randomdash
              </Text>
            </div>{" "}
            <div className={classes.card}>
              <img src={escapeImg} alt="Escape" className={classes.escapeImg} />
              <Text neutral1 lg>
                Escape
              </Text>
            </div>
          </div>

          <Heading h1 className={classes.heading}>
            Beyond the Dream.
          </Heading>

          <div className={classes.offerContainer}>
            <div className={classes.priceContainer}>
              <Text lg neutral4 bold>
                Buy now price
              </Text>
              <Heading h3>8.00 ETH</Heading>
              <Text lg neutral4 bold>
                $24,635.39
              </Text>
            </div>
            <Button uppercase className={classes.button}>
              MAKE OFFER
            </Button>{" "}
          </div>
        </div>
        <img src={heroImg} alt="#" className={classes.img} />
      </div>
    </section>
  );
};

export default HeroSection;
