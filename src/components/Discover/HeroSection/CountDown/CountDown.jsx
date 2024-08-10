import React, { useEffect, useState } from "react";
import classes from "./CountDown.module.css";
import { Heading, Text } from "components/common";

const CountDown = ({ time, text, background }) => {
  const endTime = new Date(time).getTime();

  const [currentTime, setcurrentTime] = useState(new Date().getTime());
  const [timeisOver, setTimeIsOver] = useState(false);
  const gap = endTime - currentTime; //177670892

  const seconds = 1000; // in milliseconds
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;

  const day = Math.floor(gap / days);
  const hour = Math.floor((gap % days) / hours);
  const minute = Math.floor((gap % hours) / minutes);
  const second = Math.floor((gap % minutes) / seconds);

  useEffect(() => {
    if (gap <= 0) {
      setTimeIsOver(true);
    } else {
      const timeoutId = setTimeout(
        () => setcurrentTime(new Date().getTime()),
        1000
      );
      return () => clearTimeout(timeoutId);
    }
  }, [currentTime, gap]);

  return (
    <div className={classes.container}>
      {timeisOver ? (
        <Text base neutral5>
          Auction End
        </Text>
      ) : (
        <>
          <Text base neutral5 className={classes.label}>
            Auction ends in
          </Text>
          <div className={classes.wrapper}>
            <div className={classes.count}>
              <Heading h3 neutral7>{`${
                hour < 10 ? "0" + hour : hour
              }`}</Heading>
              <Text neutral5 lg>
                Hours
              </Text>
            </div>
            <div className={classes.count}>
              <Heading h3 neutral7>{`${
                minute < 10 ? "0" + minute : minute
              }`}</Heading>
              <Text neutral5 lg>
                Minutes
              </Text>
            </div>
            <div className={classes.count}>
              <Heading h3 neutral7>
                {`${second < 10 ? "0" + second : second}`}
              </Heading>
              <Text neutral5 lg>
                Seconds
              </Text>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CountDown;
