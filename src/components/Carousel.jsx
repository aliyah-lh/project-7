import React, { useState } from "react";
import "../styles/carousel.scss";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

export default function Carousel({ slides }) {
  const pics = slides;
  const length = slides.length;

  const [currentSlide, setCurrentSlide] = useState(0);

  const previousSlide = () => {
    setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : length - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide < length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="carousel">
      <div
        className="carousel__slider"
        style={{ transform: `translateX(${-currentSlide * 100}%)` }}
      >
        {pics.map((slide, index) => (
          <img
            key={index}
            className="carousel__slider__pictures"
            src={slide}
            alt={`Slide ${index + 1}`}
          />
        ))}
      </div>

      {length > 1 && (
        <div className="carousel__commands">
          <button
            className="carousel__commands__buttons"
            onClick={previousSlide}
          >
            <FaAngleLeft className="arrow-icon" />
          </button>

          <p className="carousel__commands__photocount">
            {currentSlide + 1}/{pics.length}
          </p>

          <button className="carousel__commands__buttons" onClick={nextSlide}>
            <FaAngleRight className="arrow-icon" />
          </button>
        </div>
      )}
    </div>
  );
}
