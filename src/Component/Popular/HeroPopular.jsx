import React from "react";
import leftShap from "../../assets/svg/Hero Shape Swirl.svg";
import rightShap from "../../assets/img/stars shapes.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const HeroPopular = React.memo((props) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <div className="x:hidden xs:block xs:px-4 sm:px-10 relative w-full xs:h-[50vh] sm:h-[70vh] bg-[#f7ede8] overflow-hidden">
      <div className="w-full h-full flex items-center justify-center flex-col">
        <h1 className="font-semibold xs:text-6xl sm:text-8xl md:text-9xl">
          {props.heading1}
        </h1>
        <h1 className="font-semibold xs:text-6xl sm:text-8xl md:text-9xl text-[#CD4631]">
          {props.heading2}
        </h1>
        <p className="xs:w-[90%] sm:w-[70%] md:w-[60%] lg:w-[40%] xl:w-full text-center pt-5 text-[#4D4D4D] text-base">
          {props.para}
        </p>
        <Link to={isLoggedIn ? "/all-podcasts" : "/sign-in"}>
          <button className="border select-none px-4 py-2 mt-10 bg-black text-[#f5f5f5] rounded-md">
            Get Started
          </button>
        </Link>
      </div>

      <img
        src={leftShap}
        alt="Left Side Shape"
        className="absolute select-none pointer-events-none xs:-left-80 sm:-left-72 md:-left-48 lg:-left-28 xl:-left-16 top-0"
      />
      <img
        src={rightShap}
        alt="Left Side Shape"
        className="absolute select-none pointer-events-none xs:-right-28 sm:-right-20 md:-right-10 md:top-36 lg:right-0 top-20"
      />
    </div>
  );
});

export default HeroPopular;
