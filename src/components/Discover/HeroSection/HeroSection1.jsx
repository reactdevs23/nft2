import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper/modules";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

import classes from "./HeroSection.module.css";
import Slide from "./Slide/Slide";

import "swiper/css/effect-fade";

import clsx from "clsx";
import { cuteDog, dog, earnTogether, escapeImg } from "images";
import { useRef, useState } from "react";

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
  const swiperRef = useRef(null); // Reference to the Swiper instance
  const [activeIndex, setActiveIndex] = useState(0); // State to track active slide index

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.swiper.slidePrev();
  };

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.swiper.slideNext();
  };

  return (
    <div className={classes.wrapper}>
      {" "}
      <div className={clsx(classes.container, "container")}>
        <div className={classes.nextAndPrevButton}>
          <button
            onClick={handlePrev}
            className={clsx(classes.prevButton, {
              [classes.activeButton]: activeIndex !== 0,
            })}
          >
            <FaArrowLeft className={classes.arrow} />
          </button>
          <button
            onClick={handleNext}
            className={clsx(classes.nextButton, {
              [classes.activeButton]:
                activeIndex <
                data.length -
                  Math.floor(
                    swiperRef.current?.swiper.params.slidesPerView || 0
                  ),
            })}
          >
            <FaArrowRight className={classes.arrow} />
          </button>
        </div>
      </div>
      <div className={classes.sliderWrapper}>
        <Swiper
          ref={swiperRef}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          effect={"fade"}
          disableOnInteraction={false}
          modules={[EffectFade, Navigation]}
          preventClicks={false}
          className={clsx(classes.swiper)}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <Slide {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HeroSection;
