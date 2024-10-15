import React from "react";
import { Link } from "react-router-dom";

const SinglePodcast = React.memo((props) => {
  return (
    <>
      <div className="xs:w-auto h-[250px] p-2 border-2 border-black rounded-xl overflow-hidden">
        <div className="w-full flex items-center">
          <div className="w-[30%] h-[180px] rounded-md overflow-hidden">
            <img
              src={props.image}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="pl-4 w-[70%] h-[180px] overflow-hidden border">
            <Link to={`/details/${props._id}`}>
              <h1 className="text-2xl font-semibold cursor-pointer hover:text-[#CD4631] line-clamp-2 capitalize">
                {props.title}
              </h1>
            </Link>
            <hr className="w-full  h-[3px] bg-[#4d4d4dac] my-3" />
            <p className="line-clamp-3">{props.description}</p>
          </div>
        </div>
        <div className="flex items-center justify-between w-full h-[60px]">
          <h1 className="border-2 border-[#4d4d4dc2] text-[#4D4D4D] px-3 py-2 rounded-md capitalize">
            {props.category}
          </h1>
          <div className="flex items-center justify-start gap-2">
            <h1 className="font-semibold text-[#4D4D4D]">Hosted by:</h1>
            <h1 className="text-[#4D4D4D] capitalize">{props.user}</h1>
          </div>
        </div>
      </div>
    </>
  );
});

export default SinglePodcast;
