import React, { useEffect, useState } from "react";
import { SiPodcastaddict } from "react-icons/si";
import { Link, useLocation } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import MobileNav from "./MobileNav";
import { useSelector } from "react-redux";

function Header() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  let cureentLocation = useLocation();
  let [active, setActive] = useState(
    cureentLocation.pathname.replace("/", "") || "home"
  );
  let [ActiveMobile, setActiveMobile] = useState(false);

  useEffect(() => {
    let location = cureentLocation.pathname.replace("/", "");
    setActive(location || "home");
  }, []);

  let mobileTogel = () => {
    setActiveMobile((prev) => !prev);
  };

  return (
    <div className=" xs:px-5 xs:py-5 md:px-10 md:py-5  x:hidden xs:flex items-center justify-between bg-[#f7ede8]">
      <Link to={"/"}>
        <SiPodcastaddict
          onClick={() => setActive("home")}
          className="text-5xl cursor-pointer"
        />
      </Link>
      <div className="xs:hidden md:block">
        <ul className="flex items-center gap-5">
          <Link to={"/"}>
            {" "}
            <li
              onClick={() => setActive("home")}
              className={`text-base cursor-pointer ${
                active === "home" ? "border-b-2" : "border-none"
              }  border-black`}
            >
              Home
            </li>
          </Link>
          <Link to={"/categories"}>
            <li
              onClick={() => setActive("categories")}
              className={`text-base cursor-pointer ${
                active === "categories" ? "border-b-2" : "border-none"
              } border-black`}
            >
              Categories
            </li>
          </Link>
          <Link to={"/all-podcasts"}>
            <li
              onClick={() => setActive("all-podcasts")}
              className={`text-base cursor-pointer ${
                active === "all-podcasts" ? "border-b-2" : "border-none"
              } border-black`}
            >
              All Podcasts
            </li>
          </Link>
        </ul>
      </div>
      <div className="xs:hidden md:flex items-center gap-5">
        {isLoggedIn ? (
          <Link to={"/profile"}>
            <button
              onClick={() => setActive("sign-up")}
              className="border select-none px-4 py-2 bg-black text-[#f5f5f5] rounded-md"
            >
              Profile
            </button>
          </Link>
        ) : (
          <>
            <Link to={"/sign-in"}>
              {" "}
              <button
                onClick={() => setActive("sign-in")}
                className={`${
                  active === "sign-in" ? "border-b-2" : "border-none"
                } border-black`}
              >
                Login
              </button>
            </Link>
            <Link to={"/sign-up"}>
              <button
                onClick={() => setActive("sign-up")}
                className="border select-none px-4 py-2 bg-black text-[#f5f5f5] rounded-md"
              >
                Get Started
              </button>
            </Link>
          </>
        )}
      </div>
      <div onClick={mobileTogel} className="xs:block md:hidden">
        <IoMenu className="text-3xl" />
      </div>
      {ActiveMobile && <MobileNav setActiveMobile={setActiveMobile} />}
    </div>
  );
}

export default Header;
