import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const MobileNav = ({ setActiveMobile }) => {
  let isloggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <div className="x:hidden xs:block xs:w-full sm:w-[400px] md:hidden px-10 py-10 bg-[#fbfbfb] absolute top-[87px] xs:right-0 sm:right-3 sm:rounded-md z-50">
      <div>
        <ul className="flex items-center flex-col gap-5">
          <Link to={"/"}>
            {" "}
            <li
              onClick={() => {
                setActiveMobile(false);
              }}
              className="text-xl"
            >
              Home
            </li>
          </Link>
          <Link to={"/categories"}>
            <li
              onClick={() => {
                setActiveMobile(false);
              }}
              className="text-xl"
            >
              Categories
            </li>
          </Link>
          <Link to={"/all-podcasts"}>
            <li
              onClick={() => {
                setActiveMobile(false);
              }}
              className="text-xl"
            >
              All Podcasts
            </li>
          </Link>
        </ul>
      </div>
      <div className=" flex items-center justify-center pt-10 gap-5">
        {isloggedIn ? (
          <Link to={"/profile"}>
            <button
              onClick={() => {
                setActiveMobile(false);
              }}
              className="px-4 py-2 bg-black text-[#f5f5f5] rounded-md"
            >
              Profile
            </button>
          </Link>
        ) : (
          <>
            <Link to={"/sign-in"}>
              {" "}
              <button
                onClick={() => {
                  setActiveMobile(false);
                }}
                className="border border-black  px-4 py-2 rounded-md"
              >
                Login
              </button>
            </Link>
            <Link to={"/sign-up"}>
              <button
                onClick={() => {
                  setActiveMobile(false);
                }}
                className="px-4 py-2 bg-black text-[#f5f5f5] rounded-md"
              >
                Get Started
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default MobileNav;
