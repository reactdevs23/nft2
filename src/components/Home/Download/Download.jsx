import React from "react";
import classes from "./Download.module.css";
import { AiOutlineApple } from "react-icons/ai";
import { RiGoogleLine } from "react-icons/ri";

import { Button, Heading, Text } from "components/common";
const Download = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <Heading h2 neutral7>
          Download
        </Heading>
        <Text xl semibold neutral7 className={classes.info}>
          In web3, artists are taking back ownership and control over their
          creativity. All collections on Crypter are creator-owned smart
          contracts that will stand the test of time.
        </Text>

        <div className={classes.buttonContainer}>
          <Button neutral7>
            apple store <AiOutlineApple className={classes.appleIcon} />{" "}
          </Button>{" "}
          <Button>
            google play <RiGoogleLine className={classes.googleIcon} />{" "}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Download;
