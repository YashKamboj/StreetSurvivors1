import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./slider-styles.scss";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const ImageSlider = () => (
  <div>
    <AwesomeSlider animation="cubeAnimation">
      <div data-src="./Screenshot (26).png" />
      <div data-src="./Screenshot (26).png" />
      <div data-src="./Screenshot (26).png" />
      <div data-src="./Screenshot (26).png" />
    </AwesomeSlider>
  </div>
);
export default ImageSlider;
