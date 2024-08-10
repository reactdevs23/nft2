import React from "react";

import { FiTwitter, FiInstagram, FiFacebook } from "react-icons/fi";
import { TbRectangle } from "react-icons/tb";

import classes from "./Footer.module.css";
import { Link } from "react-router-dom";

import { logo } from "../../../images";
import { Button, Heading, Text } from "../../common";
import clsx from "clsx";

const Footer = () => {
  const socialLinks = [
    {
      logo: <FiInstagram className={classes.socialIcon} />,
      name: "Instagram",
      link: "#",
    },
    {
      logo: <FiTwitter className={classes.socialIcon} />,
      name: "Twitter",
      link: "#",
    },
    {
      logo: <FiFacebook className={classes.socialIcon} />,
      name: "Facebook",
      link: "#",
    },
    {
      logo: <TbRectangle className={classes.socialIcon} />,
      name: "Mirror",
      link: "#",
    },
  ];
  return (
    <div className={clsx(classes.footer)}>
      <footer className={clsx(classes.wrapper, "container")}>
        <div className={clsx(classes.itemContainer, classes.logoContainer)}>
          <img src={logo} alt="#" className={classes.logo} />
          <Text xl neutral5>
            Empower your creativity.
          </Text>
        </div>{" "}
        <div className={clsx(classes.itemContainer)}>
          <Heading neutral7 className={classes.heading}>
            CRYPTER.
          </Heading>

          <Link to="/explorer" className={classes.item}>
            Explorer
          </Link>
          <button className={classes.item}>Connect wallet</button>
          <button className={classes.item}>Upload</button>
          <Link to="/how-it-work" className={classes.item}>
            How it work
          </Link>
        </div>{" "}
        <div className={clsx(classes.itemContainer)}>
          <Heading neutral7 className={classes.heading}>
            INFO
          </Heading>
          <button className={classes.item}>Download</button>
          <Link to="/help-center" className={classes.item}>
            Help center
          </Link>{" "}
          <Link to="/blog" className={classes.item}>
            Blog
          </Link>{" "}
          <Link to="/jobs" className={classes.item}>
            Jobs
          </Link>
        </div>{" "}
        <div className={clsx(classes.itemContainer)}>
          <Heading neutral7 className={classes.heading}>
            SOCIAL
          </Heading>
          {socialLinks.map((el, i) => (
            <a
              key={i}
              href={el.link}
              target="_blank"
              rel="noreferrer"
              className={classes.item}
            >
              {el.logo} <span>{el.name}</span>
            </a>
          ))}
        </div>
      </footer>
      <div className={classes.bottomBar}>
        <div className={clsx(classes.copyRightContainer, "container")}>
          <Text neutral4 className={clsx(classes.item, classes.copyRight)}>
            Copyright © 2022 UI8 LLC. All rights reserved
          </Text>
          <div className={classes.cookies}>
            {" "}
            <Text neutral4 className={clsx(classes.item, classes.cookiesText)}>
              We use cookies for better service.
            </Text>
            <Button transparent onClick={() => {}}>
              ACCEPT
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
