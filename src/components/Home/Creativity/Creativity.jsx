import React from "react";
import classes from "./Creativity.module.css";
import clsx from "clsx";
import { LuCircleDot } from "react-icons/lu";

import { Button, Heading, Text } from "components/common";
import { collecting, earnTogether, mintFees } from "images";

const Creativity = () => {
  const data = [
    {
      video: collecting,
      title: "Your Collection, your way.",
      infos: [
        "In web3, artists are taking back ownership and control over their creativity. All collections on Crypter are creator-owned smart contracts that will stand the test of time.",
      ],
      features: [
        "You’ll earn a 10% royalty for all secondary market sales.",
        "Creativity is valuable on Crypter",
      ],
      learnMore: "",
    },
    {
      video: mintFees,
      title: "Lowest mint fees",
      infos: [
        "Minting an NFT is like adding your signature to a painting. Make your mark in web3 with works that are emblematic of your creative practice.",
        "Plus, you’ll earn a 10% royalty for all secondary market sales. Forever.",
      ],
      learnMore: "",
    },
    {
      video: earnTogether,
      title: "Create together, earn together.",
      infos: [
        "Add a Split to your NFT to seamlessly pay creative collaborators—photographers, producers, choreographers, dancers, poets—and so on.",
        "You can also use Splits to donate directly to the causes you care about most. That’s the web3 way.",
      ],
      learnMore: "",
    },
  ];
  return (
    <section className={classes.wrapper}>
      <div className={clsx(classes.container, "container")}>
        <div className={classes.header}>
          <Heading h1 neutral7 textCenter>
            Own your creativity.
          </Heading>
          <Text xl2 textCenter neutral5>
            Each web3 community is unique and deserves a custom marketplace with
            its own look, features, fees.
          </Text>
        </div>

        <div className={classes.cards}>
          {data.map((el, i) => (
            <div
              className={clsx(classes.card, (i + 1) % 2 === 0 && classes.card2)}
              key={i}
            >
              <div className={classes.videoContainer}>
                <video
                  className={classes.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src={el.video} type="video/mp4" />
                </video>
              </div>
              <div className={classes.infoContainer}>
                <Heading h2 neutral7 className={classes.title}>
                  {el.title}
                </Heading>
                <div className={classes.infos}>
                  {el?.infos?.map((info, i) => (
                    <Text semiBold xl neutral5 key={i}>
                      {info}
                    </Text>
                  ))}
                </div>

                {el.features && (
                  <div className={classes.features}>
                    {el.features.map((feature, i) => (
                      <div className={classes.feature} key={i}>
                        <LuCircleDot className={classes.dot} />
                        <Text semiBold xl neutral8 key={i}>
                          {feature}
                        </Text>
                      </div>
                    ))}
                  </div>
                )}
                <Button
                  transparent
                  href={el.learnMore}
                  className={classes.button}
                >
                  learn more
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Creativity;
