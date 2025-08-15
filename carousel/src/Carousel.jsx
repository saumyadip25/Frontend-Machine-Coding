// Carousel.js - Simple animation on prev/next only
import "./Carousel.css";
import { useState, useEffect, useRef } from "react";
import Dot from "./Dot";

const Carousel = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const [animationClass, setAnimationClass] = useState(""); // Animation class
  const intervalRef = useRef(null);
  const { imagesList } = props;

  const goToPrev = () => {
    setAnimationClass("slide-from-left"); // Add animation class
    setCurrentIndex((prev) => (prev === 0 ? imagesList.length - 1 : prev - 1));

    // Remove animation class after animation completes
    setTimeout(() => setAnimationClass(""), 500);
  };

  const goToNext = () => {
    setAnimationClass("slide-from-right"); // Add animation class
    setCurrentIndex((prev) => (prev === imagesList.length - 1 ? 0 : prev + 1));

    // Remove animation class after animation completes
    setTimeout(() => setAnimationClass(""), 500);
  };

  const goToSlide = (index) => {
    // No animation for dot clicks - just instant change
    setCurrentIndex(index);
  };

  const startAutoPlay = () => {
    setIsRunning(true);
  };

  const stopAutoPlay = () => {
    setIsRunning(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        // Auto-play uses next animation
        setAnimationClass("slide-from-right");
        setCurrentIndex((prev) => {
          const newIndex = prev === imagesList.length - 1 ? 0 : prev + 1;
          setTimeout(() => setAnimationClass(""), 500);
          return newIndex;
        });
      }, 3000);
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isRunning, imagesList.length]);

  const currentImage = imagesList[currentIndex];

  return (
    <div
      className="carousel-container"
      onMouseEnter={stopAutoPlay}
      onMouseLeave={startAutoPlay}
    >
      <button onClick={goToPrev} className="carousel-btn carousel-btn--prev">
        Prev
      </button>

      <img
        src={currentImage?.url}
        alt={currentImage?.alt}
        className={`carousel-image ${animationClass}`} // Apply animation class
        loading="lazy"
      />

      <button onClick={goToNext} className="carousel-btn carousel-btn--next">
        Next
      </button>

      <Dot
        totalLength={imagesList.length}
        currentIndex={currentIndex}
        goToSlide={goToSlide}
      />
    </div>
  );
};

export default Carousel;
