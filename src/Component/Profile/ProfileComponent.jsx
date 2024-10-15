import React from "react";
import { Link } from "react-router-dom";
import SinglePodcast from "../Popular/SinglePodcast";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useProfile from "../../Hooks/useProfile";

function ProfileComponent() {
  let { userData, userPodcast, logout } = useProfile();

  return (
    <div className="x:hidden xs:block bg-[#f7ede8] w-full min-h-[90vh] xs:px-5 md:p-10">
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Flip
      />
      <div className="w-full xs:h-auto sm:h-[200px] border-b-2 border-[#4D4D4D] flex xs:items-start sm:items-center justify-between xs:flex-col xs:gap-5 sm:flex-row xs:py-5 sm:py-0">
        <div>
          <h1 className="text-xl font-semibold pb-4">
            {userData && userData.name}
          </h1>
          <h1 className="text-[#4D4D4D]">{userData && userData.username}</h1>
          <h1 className="text-[#4D4D4D]">{userData && userData.email}</h1>
        </div>
        <div className="flex xs:items-start sm:items-center flex-col gap-4">
          <Link to={"/profile/add-podcast"}>
            <button className="border select-none px-4 py-2 border-[#4D4D4D] rounded-md">
              Add Podcast
            </button>
          </Link>
          <button
            onClick={() => {
              logout();
            }}
            className="border select-none px-4 py-2 bg-black text-[#f5f5f5] rounded-md"
          >
            Logout
          </button>
        </div>
      </div>

      <h1 className="text-2xl font-semibold pt-5">Uploaded Podcasts</h1>
      <div className="grid xs:grid-cols-1 lg:grid-cols-2 gap-5 row-gap flex-wrap pt-5">
        {userPodcast &&
          userPodcast.map((item, i) => {
            return (
              <SinglePodcast
                key={i}
                image={item.image}
                title={item.title}
                description={item.description}
                audio={item.audio}
                category={item.category.categoryName}
                user={item.user.name}
                _id={item._id}
              />
            );
          })}
      </div>
    </div>
  );
}

export default ProfileComponent;
