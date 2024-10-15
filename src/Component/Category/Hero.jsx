import React from "react";
import HeroPopular from "../Popular/HeroPopular";

function Hero() {
  let categoryData = {
    heading1: "Explore Our",
    heading2: "Categories",
    para: "We offer a diverse range of categories and feature a special guest every week.",
  };
  return (
    <div>
      <HeroPopular
        heading1={categoryData.heading1}
        heading2={categoryData.heading2}
        para={categoryData.para}
      />
    </div>
  );
}

export default Hero;
