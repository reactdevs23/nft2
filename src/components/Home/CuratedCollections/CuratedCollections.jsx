import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules"; // Correct import
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

import classes from "./CuratedCollections.module.css";
import Collection from "./Collection/Collection";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import clsx from "clsx";
import { avater, escapeImg } from "images";
import { useRef, useState } from "react";
import { Heading } from "components/common";
import "./CurateCollection.css";

export const curatedCollections = [
  {
    title: "Cute Planet",
    login: "tranmautritam",
    price: "1.0 ETH",
    avatar: avater,
    to: "/",
    images: [
      escapeImg,
      escapeImg,
      escapeImg,
      escapeImg,
      escapeImg,
      escapeImg,
      escapeImg,
      escapeImg,
    ],
    color: "#BCE6EC",
    url: "/collection",
  },
  {
    title: "UI8 all-access",
    login: "randomdash",
    price: "1.2 ETH",
    avatar: avater,
    to: "/",
    images: [
      escapeImg,
      escapeImg,
      escapeImg,
      escapeImg,
      escapeImg,
      escapeImg,
      escapeImg,
      escapeImg,
    ],
    color: "#B9A9FB",
    url: "/collection",
  },
  {
    title: "Beyond the Dream",
    login: "randomdash",
    price: "2.4 ETH",
    avatar: avater,
    to: "/",
    images: [
      escapeImg,
      escapeImg,
      escapeImg,
      escapeImg,
      escapeImg,
      escapeImg,
      escapeImg,
      escapeImg,
    ],
    color: "#DBFF73",
    url: "/collection",
  },
  {
    title: "Beyond the Dream",
    login: "randomdash",
    price: "5.4 ETH",
    avatar: avater,
    to: "/",
    images: [
      escapeImg,
      escapeImg,
      escapeImg,
      escapeImg,
      escapeImg,
      escapeImg,
      escapeImg,
      escapeImg,
    ],
    color: "#BCE6EC",
    url: "/collection",
  },
  {
    title: "Cute Planet",
    login: "tranmautritam",
    price: "1.0 ETH",
    avatar: avater,
    to: "/",
    images: [
      escapeImg,
      escapeImg,
      escapeImg,
      escapeImg,
      escapeImg,
      escapeImg,
      escapeImg,
      escapeImg,
    ],
    color: "#BCE6EC",
    url: "/collection",
  },
  {
    title: "UI8 all-access",
    login: "randomdash",
    price: "1.2 ETH",
    avatar: avater,
    to: "/",
    images: [
      escapeImg,
      escapeImg,
      escapeImg,
      escapeImg,
      escapeImg,
      escapeImg,
      escapeImg,
      escapeImg,
    ],
    color: "#B9A9FB",
    url: "/collection",
  },
  {
    title: "Beyond the Dream",
    login: "randomdash",
    price: "2.4 ETH",
    avatar: avater,
    to: "/",
    images: [
      escapeImg,
      escapeImg,
      escapeImg,
      escapeImg,
      escapeImg,
      escapeImg,
      escapeImg,
      escapeImg,
    ],
    color: "#DBFF73",
    url: "/collection",
  },
  {
    title: "Beyond the Dream",
    login: "randomdash",
    price: "5.4 ETH",
    avatar: avater,
    to: "/",
    images: [
      escapeImg,
      escapeImg,
      escapeImg,
      escapeImg,
      escapeImg,
      escapeImg,
      escapeImg,
      escapeImg,
    ],
    color: "#BCE6EC",
    url: "/collection",
  },
  {
    title: "Cute Planet",
    login: "tranmautritam",
    price: "1.0 ETH",
    avatar: avater,
    to: "/",
    images: [
      escapeImg,
      escapeImg,
      escapeImg,
      escapeImg,
      escapeImg,
      escapeImg,
      escapeImg,
      escapeImg,
    ],
    color: "#BCE6EC",
    url: "/collection",
  },
  {
    title: "UI8 all-access",
    login: "randomdash",
    price: "1.2 ETH",
    avatar: avater,
    to: "/",
    images: [
      escapeImg,
      escapeImg,
      escapeImg,
      escapeImg,
      escapeImg,
      escapeImg,
      escapeImg,
      escapeImg,
    ],
    color: "#B9A9FB",
    url: "/collection",
  },
  {
    title: "Beyond the Dream",
    login: "randomdash",
    price: "2.4 ETH",
    avatar: avater,
    to: "/",
    images: [
      escapeImg,
      escapeImg,
      escapeImg,
      escapeImg,
      escapeImg,
      escapeImg,
      escapeImg,
      escapeImg,
    ],
    color: "#DBFF73",
    url: "/collection",
  },
  {
    title: "Beyond the Dream",
    login: "randomdash",
    price: "5.4 ETH",
    avatar: avater,
    to: "/",
    images: [
      escapeImg,
      escapeImg,
      escapeImg,
      escapeImg,
      escapeImg,
      escapeImg,
      escapeImg,
      escapeImg,
    ],
    color: "#BCE6EC",
    url: "/collection",
  },
  {
    title: "Cute Planet",
    login: "tranmautritam",
    price: "1.0 ETH",
    avatar: avater,
    to: "/",
    images: [
      escapeImg,
      escapeImg,
      escapeImg,
      escapeImg,
      escapeImg,
      escapeImg,
      escapeImg,
      escapeImg,
    ],
    color: "#BCE6EC",
    url: "/collection",
  },
];

const CuratedCollections = () => {
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
      <div className={clsx(classes.container, "container")}>
        <div className={classes.header}>
          <Heading h1 neutral7 className={clsx(classes.heading)}>
            Curated <br /> collections.
          </Heading>
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
                  curatedCollections.length -
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
            navigation={false}
            slidesPerView={1}
            spaceBetween={12}
            effect={"fade"}
            scrollbar={{
              hide: false,
            }}
            modules={[Navigation, Scrollbar]}
            className={clsx("collections-swiper", classes.swiper)}
            breakpoints={{
              520: {
                slidesPerView: 1.4,
                spaceBetween: 24,
              },
              767: {
                slidesPerView: 2.3,
                spaceBetween: 24,
              },
              991: {
                slidesPerView: 2.5,
                spaceBetween: 24,
              },
              1199: {
                slidesPerView: 2.8,
                spaceBetween: 24,
              },
              1280: {
                slidesPerView: 3.2,
                spaceBetween: 24,
              },
              1440: {
                slidesPerView: 3.5,
                spaceBetween: 32,
              },
            }}
          >
            {curatedCollections.map((collection, index) => (
              <SwiperSlide key={index}>
                <Collection item={collection} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default CuratedCollections;
