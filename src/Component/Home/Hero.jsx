import React from "react";
import leftShap from "../../assets/svg/Hero Shape Swirl.svg";
import rightShap from "../../assets/img/stars shapes.png";
import HeroPopular from "../Popular/HeroPopular";

function Hero() {
  let homeData = {
    heading1: "Your Daily",
    heading2: "Podcast",
    para: "We cover specific kinds of categories and a weekly special guest.",
  };
  return (
    <>
      <HeroPopular
        heading1={homeData.heading1}
        heading2={homeData.heading2}
        para={homeData.para}
      />
    </>
  );
}

export default Hero;
