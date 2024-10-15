import React from "react";
import SinglePodcast from "../Popular/SinglePodcast";
import NoDataFound from "../Popular/NoDataFound";
import useSingleCategory from "../../Hooks/useSingleCategory";

function SingleCate() {
  let { PodcastCategory, name } = useSingleCategory();
  return (
    <>
      <div className="x:hidden xs:block w-full min-h-[90vh] bg-[#f7ede8] xs:px-5 sm:px-7 py-10">
        <h1 className="text-2xl font-semibold">
          <span className="capitalize">{name}</span> Podcasts
        </h1>
        <div
          className={`grid xs:grid-cols-1 ${
            PodcastCategory.length > 0 ? "lg:grid-cols-2" : "lg:grid-cols-1"
          } gap-5 row-gap flex-wrap pt-10`}
        >
          {PodcastCategory && PodcastCategory.length > 0 ? (
            PodcastCategory.map((item, i) => {
              return (
                <SinglePodcast
                  key={i}
                  image={item.image}
                  title={item.title}
                  description={item.description}
                  audio={item.audio}
                  category={item.category?.categoryName}
                  user={item.user?.name}
                  _id={item._id}
                />
              );
            })
          ) : (
            <NoDataFound name={name} />
          )}
        </div>
      </div>
    </>
  );
}
export default SingleCate;
