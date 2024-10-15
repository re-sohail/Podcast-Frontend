import React from "react";

const CategoryCard = React.memo(({ image, title }) => {
  return (
    <div className="relative">
      <img
        src={image}
        alt="category images"
        className="w-[370px] h-[370px] rounded-lg object-cover"
      />
      <h1 className="text-2xl text-[#81ADC8] font-semibold absolute bottom-5 left-5">
        {title}
      </h1>
    </div>
  );
});

export default CategoryCard;
