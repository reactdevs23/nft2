import React, { useEffect, useRef, useState } from "react";

import { earnTogether, escapeImg } from "images";

import styles from "./ImageSlider.module.css"; // Import the module CSS
const items = [escapeImg, earnTogether];
const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const slideContainerRef = useRef(null);

  const handlePrevious = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? items.length - 1 : prevIndex - 1
      );
      setFade(true);
    }, 500); // Matches the CSS transition duration
  };

  const handleNext = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === items.length - 1 ? 0 : prevIndex + 1
      );
      setFade(true);
    }, 500); // Matches the CSS transition duration
  };

  useEffect(() => {
    if (slideContainerRef.current) {
      slideContainerRef.current.style.opacity = fade ? 1 : 0;
    }
  }, [fade]);

  return (
    <div className={styles.carousel}>
      <button
        className={`${styles.navButton} ${styles.prevButton}`}
        onClick={handlePrevious}
      >
        Prev
      </button>
      <div className={styles.slideContainer} ref={slideContainerRef}>
        <div className={styles.slide}>
          <img src={items[currentIndex]} alt="#" className={styles.image} />
        </div>
      </div>
      <button
        className={`${styles.navButton} ${styles.nextButton}`}
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
};

export default Carousel;
