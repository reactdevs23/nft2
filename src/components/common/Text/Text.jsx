import React from "react";
import classes from "./Text.module.css";
import clsx from "clsx";
const Text = ({
  children,

  neutral1,
  neutral3,
  neutral4,
  neutral5,
  neutral6,
  neutral7,
  neutral8,
  xs,
  sm,
  base,
  md,
  lg,
  xl,
  xl2,
  xl3,
  xl4,
  uppercase,
  semiBold,
  bold,
  regular,
  font600,
  textCenter,
  textRight,
  className,
  onClick,
}) => {
  return (
    <p
      onClick={onClick && onClick}
      className={clsx(
        classes.text,
        neutral1 && classes.neutral1,
        neutral3 && classes.neutral3,
        neutral4 && classes.neutral4,
        neutral5 && classes.neutral5,
        neutral6 && classes.neutral6,
        neutral7 && classes.neutral7,
        neutral8 && classes.neutral8,
        uppercase && classes.uppercase,
        xs && classes.xs,
        sm && classes.sm,
        md && classes.md,
        base && classes.base,
        lg && classes.lg,
        xl && classes.xl,
        xl2 && classes.xl2,
        xl3 && classes.xl3,
        xl4 && classes.xl4,
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
    </p>
  );
};

export default Text;
