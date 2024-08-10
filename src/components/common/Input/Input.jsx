import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";

import classes from "./Input.module.css";
import clsx from "clsx";
// import { eyeIcon } from "../../../images";

const Input = ({
  value,
  setValue,
  search,
  placeholder,
  onKeyDown,
  type,
  className,
  readonly,
  noIcon,
  type2,
  icon,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div
      className={clsx(
        classes.inputContainer,

        className,

        search && classes.searchIconInputContainer
      )}
    >
      <input
        type={showPassword ? "text" : type ? type : "text"}
        onKeyDown={onKeyDown && onKeyDown}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={classes.input}
        placeholder={placeholder}
        required
        readOnly={readonly}
      />
      {search && !noIcon && (
        <CiSearch
          className={clsx(classes.searchIcon, type2 && classes.searchIcon2)}
        />
      )}
      {type !== "password" && !search && icon && icon}
      {type === "password" && (
        <>
          {showPassword ? (
            <FaRegEye
              className={classes.icon}
              onClick={() => setShowPassword((prev) => !prev)}
            />
          ) : (
            <FaRegEyeSlash
              className={classes.icon}
              onClick={() => setShowPassword((prev) => !prev)}
            />
          )}
        </>
      )}
      {/* {search && value && (
        <MdClose className={classes.close} onClick={() => setValue("")} />
      )} */}
    </div>
  );
};

export default Input;
