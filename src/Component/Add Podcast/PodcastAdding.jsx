import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import useAddProduct from "../../Hooks/useAddProduct";

function PodcastAdding() {
  let {
    uploadedImage,
    uploadedAudio,
    imageDragging,
    input,
    handleChangeImage,
    handleDragEnter,
    handleDragLeave,
    handleDragOver,
    handleDrop,
    handleAudio,
    handleInput,
    submittedDate,
  } = useAddProduct();
  return (
    <div className="x:hidden xs:block xs:p-6 md:p-10 w-full min-h-[55vh] bg-[#F7EDE8]">
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
      <form className="w-full h-full flex items-start justify-start gap-10 xs:flex-col lg:flex-row">
        <div
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          className={`xs:w-full lg:w-2/6 full border-black border-2 border-dotted ${
            imageDragging ? "bg-gray-200" : ""
          }`}
        >
          <input
            type="file"
            accept="image/*"
            id="file"
            name="image"
            onChange={handleChangeImage}
            required
            className="hidden"
          />
          {uploadedImage ? (
            <div className="w-full h-[55vh] overflow-hidden">
              <img
                src={URL.createObjectURL(uploadedImage)}
                alt="thumbnail image"
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <label
              htmlFor="file"
              className="w-full h-[55vh] flex items-center justify-center text-xl cursor-pointer hover:bg-[#f7f5f4c5] transition-all duration-300"
            >
              <div className="text-center">
                Drag and Drop the Thumbnail <br /> or click to browse
              </div>
            </label>
          )}
        </div>
        <div className="xs:w-full lg:w-4/6 h-full">
          <div>
            <label htmlFor="title" className="text-lg font-semibold">
              Title
            </label>
            <input
              type="text"
              placeholder="Write your podcast's title"
              name="title"
              id="title"
              required
              value={input.title}
              onChange={handleInput}
              className={`w-full h-[50px] px-3 text-zinc-900 bg-transparent border-2 border-black placeholder:text-zinc-500 outline-none mt-2`}
            />
          </div>

          <div className="mt-5">
            <label htmlFor="description" className="text-lg font-semibold">
              Description
            </label>
            <textarea
              type="text"
              placeholder="Write your podcast's Description"
              name="description"
              id="description"
              required
              value={input.description}
              onChange={handleInput}
              className={`w-full h-[140px] resize-none p-3 text-zinc-900 bg-transparent border-2 border-black placeholder:text-zinc-500 outline-none mt-2`}
            ></textarea>
          </div>

          <div className="flex xs:items-start lg:items-center justify-start xs:gap-5 lg:gap-10 xs:flex-col lg:flex-row">
            <div className="xs:mt-5 lg:mt-0 flex items-start flex-col">
              <label htmlFor="Description" className="text-lg font-semibold">
                Podcast File
              </label>
              <input
                type="file"
                accept=".mp3 , .wav, .m4a, .ogg"
                placeholder="Write your podcast's Description"
                name="audio"
                id="audio"
                required
                onChange={handleAudio}
                className="pt-3"
              />
            </div>
            <div className="lg:mt-5 flex items-start flex-col">
              <label htmlFor="Description" className="text-lg font-semibold">
                Choose Category
              </label>
              <select
                name="category"
                value={input.category}
                onChange={handleInput}
                id="category"
                required
                className="mt-3 w-[300px] h-[50px] bg-transparent border-2  border-black outline-none"
              >
                <option value="">Please Choose the category</option>
                <option value="traveling">Traveling</option>
                <option value="self–confidence">Self Confidence</option>
                <option value="perplexed-mind">Perplexed Mind</option>
                <option value="women-rights">Women Rights</option>
                <option value="social-class">Social Class</option>
              </select>
            </div>
          </div>
          <button
            onClick={submittedDate}
            className="border select-none px-4 py-2 xs:mt-10 lg:mt-2 bg-black text-[#f5f5f5] rounded-md"
          >
            Upload
          </button>
        </div>
      </form>
    </div>
  );
}

export default PodcastAdding;
