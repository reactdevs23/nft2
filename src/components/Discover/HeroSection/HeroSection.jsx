import React from "react";
import ImageSlider from "./ImageSlider/ImageSlider";
import { cuteDog, dog, escapeImg } from "images";
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
  return (
    <div>
      <ImageSlider data={data} />
    </div>
  );
};

export default HeroSection;
