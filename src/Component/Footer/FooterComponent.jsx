import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SiPodcastaddict } from "react-icons/si";
import { FaSquareFacebook } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { categories } from "../../assets/categories";
import google from "../../assets/img/Google Podcast footer.png";
import spotify from "../../assets/img/Spotify footer.png";
import youtube from "../../assets/img/Youtube footer.png";

function FooterComponent() {
  return (
    <div className="x:hidden xs:block w-full min-h-[50vh] bg-white xs:px-6 md:px-10 pt-20 pb-5">
      <div className="w-full grid xs:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xs:gap-20">
        <div>
          <Link to={"/"}>
            <SiPodcastaddict className="text-5xl cursor-pointer" />
          </Link>
          <h1 className="w-[65%] py-5 text-[#4D4D4D]">
            Bringing voices to life. Your stories, our platform.
          </h1>
          <div className="flex items-center justify-start gap-5">
            <Link to={"https://www.linkedin.com/in/re-sohail/"} target="_blank">
              <FaLinkedin className="text-3xl cursor-pointer hover:text-[#CD4631]" />
            </Link>
            <Link to={"https://facebook.com/re.sohail"} target="_blank">
              <FaSquareFacebook className="text-3xl cursor-pointer hover:text-[#CD4631]" />
            </Link>
            <Link to={"https://instagram.com/re_sohail"} target="_blank">
              <RiInstagramFill className="text-3xl cursor-pointer hover:text-[#CD4631]" />
            </Link>
          </div>
        </div>
        <div>
          <h1 className="uppercase text-base font-semibold">Categeries</h1>
          <ul className="xs:mt-4">
            {categories &&
              categories.map((item, i) => {
                return (
                  <Link key={i} to={item.url}>
                    <li className="mt-3 hover:text-[#CD4631]">{item.title}</li>
                  </Link>
                );
              })}
          </ul>
        </div>
        <div>
          <h1 className="text-[#4D4D4D]">
            Listen to episodes on your fav platform:
          </h1>
          <div className="flex items-center xs:gap-5 sm:gap-10 mt-5">
            <img src={google} alt="google podcast img" />
            <img src={spotify} alt="spotify podcast img" />
            <img src={youtube} alt="youtube podcast img" />
          </div>
        </div>
      </div>
      <div className="mt-20 border-t-2 border-[#4D4D4D] py-5 flex items-start justify-between">
        <h1 className="flex items-center gap-2">
          ©2024. All Rights Reserved.{" "}
          <Link to={"/"}>
            <span className="text-[#CD4631] xs:hidden md:block">
              Podcast Guru
            </span>
          </Link>
        </h1>
        <a
          href="../../assets/files/Privacy Policy.pdf"
          download="Privacy Policy.pdf"
        >
          <h1 className="hover:underline">Privacy</h1>
        </a>
      </div>
    </div>
  );
}

export default FooterComponent;
