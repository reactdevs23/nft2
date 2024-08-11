import { cuteDog, dog, escapeImg } from "images";
import React, { useState } from "react";
import Slider from "react-slick";
import Slide from "./Slide/Slide";
import clsx from "clsx";
import classes from "./HeroSection.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const data = [
  {
    title: "D-0-G",
    img: dog,
    avater: escapeImg,
    login: "randomdash",
    time: "Aug 12 2024 05:30:01",
  },
  {
    title: "Cute Dog",
    img: cuteDog,
    avater: escapeImg,
    login: "moyoshiro",
    time: "Aug 12 2024 05:30:01",
  },
  {
    title: "D-0-G",
    img: dog,
    avater: escapeImg,
    login: "randomdash",
    time: "Aug 12 2024 05:30:01",
  },
  {
    title: "Cute Dog",
    img: cuteDog,
    avater: escapeImg,
    login: "moyoshiro",
    time: "Aug 12 2024 05:30:01",
  },
];

const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: false,
    fade: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    nextArrow: <CustomNextArrow isActive={activeSlide < data.length - 1} />,
    prevArrow: <CustomPrevArrow isActive={activeSlide > 0} />,
    beforeChange: (current, next) => setActiveSlide(next),
  };

  return (
    <div className={classes.wrapper}>
      <Slider {...settings}>
        {data.map((el, i) => (
          <div
            key={i}
            className={clsx(classes.slideWrapper, {
              [classes.activeSlide]: activeSlide === i,
            })}
          >
            <Slide {...el} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSection;
const CustomNextArrow = ({ onClick, isActive }) => (
  <button
    onClick={onClick}
    className={clsx(classes.nextButton, {
      [classes.activeButton]: isActive,
    })}
  >
    <FaArrowRight className={classes.arrow} />
  </button>
);

const CustomPrevArrow = ({ onClick, isActive }) => (
  <button
    className={clsx(classes.prevButton, {
      [classes.activeButton]: isActive,
    })}
    onClick={onClick}
  >
    <FaArrowLeft className={classes.arrow} />
  </button>
);
