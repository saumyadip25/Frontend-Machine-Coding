import "./Carousel.css";
import { useState, useEffect, useRef } from "react";
import Dot from "./Dot";

const Carousel = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const intervalRef = useRef(null);
  const { imagesList } = props;

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? imagesList.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === imagesList.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
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
        setCurrentIndex((prev) =>
          prev === imagesList.length - 1 ? 0 : prev + 1
        );
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
        className="carousel-image"
        loading="lazy" // Performance improvement
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
