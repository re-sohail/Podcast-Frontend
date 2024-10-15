import React from "react";
import Hero from "../Component/Home/Hero";
import HeroCards from "../Component/Home/HeroCards";
import Supported from "../Component/Home/Supported";
import Loader from "../Component/Loader/Loader";

function Home() {
  return (
    <>
      <Hero />
      <HeroCards />
      <Supported />
    </>
  );
}

export default Home;
