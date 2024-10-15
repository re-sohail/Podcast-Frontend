import React, { useEffect, useState } from "react";
import SinglePodcast from "../Popular/SinglePodcast";
import useAllPodcast from "../../Hooks/useAllPodcast";

function Podcasts() {
  let Podcast = useAllPodcast();
  return (
    <div className="x:hidden xs:block w-full min-h-[90vh] bg-[#f7ede8] xs:px-5 sm:px-7 py-10">
      <h1 className="text-2xl font-semibold">All Podcasts</h1>
      <div className="grid xs:grid-cols-1 lg:grid-cols-2 gap-5 row-gap flex-wrap pt-10">
        {Podcast &&
          Podcast.map((item, i) => {
            return (
              <SinglePodcast
                key={i}
                image={item.image}
                title={item.title}
                description={item.description}
                audio={item.audio}
                category={item.category.categoryName}
                user={item.user?.name}
                _id={item._id}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Podcasts;
