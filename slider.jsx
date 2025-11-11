import React, { useState, useEffect } from "react";
import "./slider.css";
import a from "../assets/a.jpg";
import b from "../assets/b.jpg";
import c from "../assets/c.jpg";

function Slider() {
  const images = [a, b, c];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 2500);
    return () => clearInterval(t);
  }, []);

  return (
    <fieldset className="slider-box">
      {/* <legend className="slider-title">Featured</legend> */}
      <img src={images[index]} alt="slider" className="slider-img" />
    </fieldset>
  );
}

export default Slider;
