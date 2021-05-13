/* eslint-disable react/prop-types */
import React from 'react';

const NextArrow = ({ currentSlide, slideCount, className, onClick }) => {
  return (
    <button className="slick-arrow slick-next" onClick={onClick}>
      <svg width="23" height="17" viewBox="0 0 23 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1.24414 8.07812L21.2441 8.07813"
          stroke="#7C808A"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.2441 1.07812L21.2441 8.07812L14.2441 15.0781"
          stroke="#7C808A"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};
const PrevArrow = ({ currentSlide, slideCount, className, onClick }) => {
  return (
    <button className="slick-arrow slick-prev" onClick={onClick}>
      <svg width="23" height="17" viewBox="0 0 23 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M21.2441 8.07812L1.24414 8.07813"
          stroke="#7C808A"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.24414 1.07812L1.24414 8.07812L8.24414 15.0781"
          stroke="#7C808A"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

const createSlickConfig = ({ arrows }, customParams) => {
  const defaultParams = {
    arrows: false,
    dots: false,
    speed: 700,
  };

  let config = { ...defaultParams, ...customParams };

  if (arrows) {
    config = {
      ...config,
      ...{
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
      },
    };
  }

  return config;
};

export { createSlickConfig };
