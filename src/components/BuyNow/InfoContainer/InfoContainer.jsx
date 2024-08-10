import React, { useState } from "react";
import classes from "./InfoContainer.module.css";
import { avater, escapeImg, fullScreenIcon, musicIcon } from "images";
import { Button, Heading, Text } from "components/common";
import clsx from "clsx";
import { FaLink } from "react-icons/fa6";
import { TfiWorld } from "react-icons/tfi";
import { FiPlus } from "react-icons/fi";
import { HiOutlineExternalLink } from "react-icons/hi";
import { MdClose } from "react-icons/md";

const InfoContainer = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    setIsFullscreen((prev) => !prev);
  };

  const links = [
    {
      title: "View on Etherscane",
      icon: <TfiWorld className={classes.icon} />,
      link: "#",
    },
    {
      title: "View metadata",
      icon: <FaLink className={classes.icon} />,
      link: "#",
    },
    {
      title: "View on IPFS",
      icon: <FaLink className={classes.icon} />,
      link: "#",
    },
  ];
  return (
    <section className={classes.wrapper}>
      <div
        className={clsx(
          classes.imgContainer,
          isFullscreen && classes.fullscreen
        )}
      >
        <div className={classes.topBar}>
          <button className={classes.music}>
            <img src={musicIcon} alt="Music" className={classes.musicIcon} />
          </button>{" "}
          <button className={classes.fullScreen} onClick={toggleFullscreen}>
            {isFullscreen ? (
              <MdClose className={classes.close} />
            ) : (
              <img
                src={fullScreenIcon}
                alt="Music"
                className={classes.fullScreenIcon}
              />
            )}
          </button>
        </div>
        <img src={escapeImg} alt="#" className={classes.img} />
      </div>{" "}
      <div className={clsx(classes.infoContainer)}>
        <div
          className={clsx(classes.createdByAndCollection, classes.container)}
        >
          <div className={classes.createdBy}>
            <Text sm neutral5 className={classes.label}>
              Created by
            </Text>
            <div className={classes.authorImgContainer}>
              <img src={avater} alt="#" className={classes.authorImg} />
            </div>
            <div className={classes.logIn}>
              <Text base neutral7 className={classes.author}>
                Dash
              </Text>
              <Text sm neutral5 className={classes.login}>
                @randomdash
              </Text>
            </div>
          </div>
          <div className={classes.collection}>
            <Text sm neutral5 className={classes.label}>
              Collection
            </Text>

            <img src={escapeImg} alt="#" className={classes.collectionImg} />

            <div className={classes.logIn}>
              <Text base neutral7 className={classes.author}>
                Escape
              </Text>
              <Button className={classes.button}>CUTE</Button>
            </div>
          </div>
        </div>
        <hr className={classes.hr} />
        <div className={clsx(classes.detailsContainer, classes.container)}>
          <Heading h4 neutral7>
            Details
          </Heading>
          <Text semiBold xl neutral5>
            We are laying the groundwork for web3 — the next generation of the
            internet full of limitless possibilities. Join the millions of
            creators, collectors, and curators who are on this journey with you.
          </Text>
          <hr className={classes.hr} />

          <div className={classes.links}>
            {links.map((link, i) => (
              <a
                href="#/"
                target="_blank"
                rel="noreferrer"
                key={i}
                className={classes.link}
              >
                {link.icon}{" "}
                <Text base neutral7>
                  {link.title}
                </Text>
              </a>
            ))}
          </div>
          <Button className={classes.addTag} transparent>
            Add tags <FiPlus />
          </Button>
        </div>{" "}
        <hr className={classes.hr} />
        <div className={clsx(classes.provenance, classes.container)}>
          {" "}
          <Heading h4 neutral7>
            Details
          </Heading>{" "}
          <hr className={classes.hr} />
          <a
            href="#/"
            target="_blank"
            rel="noreferrer"
            className={classes.provenanceInfo}
          >
            <div className={classes.authorImgContainer}>
              <img src={avater} alt="#" className={classes.authorImg} />
            </div>
            <div className={classes.provonenceAuthorInfo}>
              <Text base neutral7 className={classes.mintBy}>
                Minted by
              </Text>
              <Text base neutral5 className={classes.login}>
                @randomdash
              </Text>{" "}
              <Text sm semiBold neutral5 className={classes.date}>
                Aug 18, 2022 at 18:80
              </Text>
            </div>
            <button className={classes.linkButton}>
              <HiOutlineExternalLink className={classes.to} />
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default InfoContainer;
