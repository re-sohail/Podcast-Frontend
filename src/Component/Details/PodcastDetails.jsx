import React, { useState, useEffect, useRef } from "react";
import rightShap from "../../assets/img/stars shapes.png";
import { useParams } from "react-router-dom";
import { MdSkipNext } from "react-icons/md";
import { MdSkipPrevious } from "react-icons/md";
import { IoIosPlay } from "react-icons/io";
import { MdPause } from "react-icons/md";
import useGetSingleData from "../../Hooks/useGetSingleData";
import usePlayAudio from "../../Hooks/usePlayAudio";

function PodcastDetails() {
  let { id } = useParams();

  let PodcastDetail = useGetSingleData(id);

  let {
    playPodcast,
    pausePodcast,
    currentTime,
    duration,
    formatTime,
    handleTimeUpdate,
    handleLoadedMetadata,
    playAudio,
    pauseAudio,
    closeAudio,
    Backward,
    Forward,
    handleChange,
    audioRef,
  } = usePlayAudio();

  return (
    <div className="x:hidden xs:block xs:px-4 sm:px-10 relative w-full xs:h-auto  bg-[#f7ede8] overflow-hidden xs:py-10">
      <div className="w-full flex items-center xs:gap-10 gap-20 xs:flex-col lg:flex-row">
        <div className="xs:w-full lg:w-[30%] h-[400px] border bg-[#81ADC8] rounded-xl relative">
          <img
            src={PodcastDetail.image}
            alt=""
            className="w-[100%] h-[100%] object-cover absolute -top-2 -left-2 rounded-xl"
          />
        </div>
        <div className="xs:w-full lg:w-[50%]">
          <div className="border border-[#CD4631] w-[160px] flex items-center justify-center mb-5">
            <h1 className="uppercase text-lg text-[#CD4631] font-medium">
              Enjoy Podcast
            </h1>
          </div>

          <h1 className="text-3xl font-semibold cursor-pointer hover:text-[#CD4631]">
            {PodcastDetail.title}
          </h1>
          <hr className="my-5 w-full h-[3px] bg-black" />
          <p className="text-[#4D4D4D]">{PodcastDetail.description}</p>
          <div className="py-8 flex items-center justify-between">
            <h1 className="text-[#4D4D4D] font-normal">
              Hosted by:{" "}
              <span className="text-[#CD4631] font-semibold">
                {PodcastDetail.user?.name}
              </span>
            </h1>
            <h1 className="text-[#4D4D4D] font-medium">
              {new Date(PodcastDetail.updatedAt).toLocaleDateString()}
            </h1>
          </div>
          <div className="xs:flex-col-reverse sm:flex-row mt-5 flex items-center justify-start xs:gap-5 gap-20 ">
            <button
              onClick={playPodcast ? closeAudio : playAudio}
              className="border select-none px-4 py-2 bg-black text-[#f5f5f5] rounded-md"
            >
              {playPodcast ? "Close Podcast" : "Play Podcast"}
            </button>
            {playPodcast && (
              <div className="w-[300px] flex items-center justify-center flex-col">
                <div className="flex items-center justify-center gap-10 text-3xl">
                  <MdSkipPrevious
                    onClick={Backward}
                    className="cursor-pointer"
                  />
                  {pausePodcast ? (
                    <IoIosPlay onClick={playAudio} className="cursor-pointer" />
                  ) : (
                    <MdPause onClick={pauseAudio} className="cursor-pointer" />
                  )}

                  <MdSkipNext onClick={Forward} className="cursor-pointer" />
                </div>
                <div className="w-full flex items-center justify-center flex-col">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={(currentTime / duration) * 100 || 0}
                    onChange={handleChange}
                    className="custom-slider"
                  />
                  <div className="w-[70%] mt-5 flex items-center text-[14px]">
                    <span>{formatTime(currentTime)}</span> /{" "}
                    <span className="text-[#5C5B5A]">
                      {formatTime(duration)}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <audio ref={audioRef} src={PodcastDetail.audio}></audio>
      <img
        src={rightShap}
        alt="Left Side Shape"
        className="absolute select-none pointer-events-none xs:-right-28 sm:-right-20 md:-right-10 md:top-36 lg:right-0 top-20"
      />
    </div>
  );
}

export default PodcastDetails;
