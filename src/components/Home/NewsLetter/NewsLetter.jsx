import React, { useState } from "react";
import classes from "./NewsLetter.module.css";
import { FaRegUser } from "react-icons/fa6";

import { Button, Heading, Input, Text } from "components/common";
const NewsLetter = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <Heading h2>NewsLetter</Heading>
        <div className={classes.inputWrapper}>
          <Text xl semibold neutral4 className={classes.info}>
            Get the latest Crypter updates
          </Text>
          <div className={classes.inputContainer}>
            <Input
              value={name}
              setValue={setName}
              placeholder="Name"
              icon={<FaRegUser className={classes.icon} />}
            />
            <Input
              type="email"
              value={email}
              setValue={setEmail}
              placeholder="Email"
              icon={<span className={classes.icon}>@</span>}
            />
          </div>
        </div>
        <Button>SUBSCRIBE NOW</Button>
      </div>
    </div>
  );
};

export default NewsLetter;
