import React from "react";
import { supported } from "../../assets/supported";

function Supported() {
  return (
    <div className="x:hidden xs:block w-full h-[140px] bg-[#f7ede8]">
      <div className="w-[95%] h-full mx-auto flex items-center xs:justify-center lg:justify-between xs:flex-col lg:flex-row xs:gap-5 xs:px-2 md:px-10 border-t-2 border-[#4D4D4D]">
        <div>
          <h1 className="text-2xl font-semibold">Supported by:</h1>
        </div>
        <div className="xs:w-full lg:w-[60%] xs:flex-wrap  flex items-center justify-between xs:gap-1 lg:gap-10 xl:gap-28">
          {supported &&
            supported.map((item, i) => {
              return (
                <img
                  key={i}
                  src={item.image}
                  alt="supported by images"
                  className="select-none pointer-events-none"
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Supported;
