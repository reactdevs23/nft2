import React from "react";
import classes from "./Heading.module.css";
import clsx from "clsx";
const Heading = ({
  children,
  h1,
  h2,
  h4,
  neutral1,
  neutral7,
  semiBold,
  bold,
  font600,

  textCenter,
  textRight,
  className,
  regular,
}) => {
  return (
    <h2
      className={clsx(
        classes.heading,
        neutral1 && classes.neutral1,
        neutral7 && classes.neutral7,
        h1 && classes.h1,
        h2 && classes.h2,
        h4 && classes.h4,
        bold && classes.bold,
        font600 && classes.font600,
        semiBold && classes.semiBold,
        regular && classes.regular,
        textCenter && classes.textCenter,
        textRight && classes.textRight,
        className
      )}
    >
      {children}
    </h2>
  );
};

export default Heading;
