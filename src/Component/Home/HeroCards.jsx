import React, { useState } from "react";
import { categories } from "../../assets/categories";
import CategoryCard from "../Popular/CategoryCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

function HeroCards() {
  return (
    <div className="x:hidden xs:block xs:px-5 md:px-10 pb-24 bg-[#f7ede8]">
      <Swiper
        spaceBetween={10}
        navigation={false}
        modules={[Navigation, Autoplay]}
        loop={true}
        autoplay={{ delay: 5000 }}
        breakpoints={{
          320: {
            // for mobile devices
            slidesPerView: 1,
          },
          640: {
            // for small screens
            slidesPerView: 2,
          },
          768: {
            // for medium screens (md)
            slidesPerView: 2,
          },
          1024: {
            // for large screens
            slidesPerView: 3,
          },
          1280: {
            // for large screens
            slidesPerView: 4,
          },
        }}
        className="mySwiper"
      >
        {categories &&
          categories.map((item, i) => {
            return (
              <SwiperSlide key={i}>
                <Link to={item.url}>
                  <CategoryCard image={item.image} title={item.title} />
                </Link>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
}

export default HeroCards;
