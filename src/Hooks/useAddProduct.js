import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function useAddProduct() {
  let navigate = useNavigate();
  let [uploadedImage, setUploadedImage] = useState(null);
  let [uploadedAudio, setUploadedAudio] = useState(null);
  let [imageDragging, setImageDragging] = useState(false);
  let [input, setInput] = useState({
    title: "",
    description: "",
    category: "",
  });

  const handleChangeImage = (e) => {
    let file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setUploadedImage(file);
    } else {
      console.error("Not a valid image file");
    }
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    setImageDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setImageDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setImageDragging(false);
    let file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      setUploadedImage(file);
    } else {
      console.error("Dropped file is not an image");
    }
  };
  const handleAudio = (e) => {
    e.preventDefault();
    let file = e.target.files[0];
    setUploadedAudio(file);
  };

  let handleInput = (e) => {
    let { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const submittedDate = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("title", input.title);
    data.append("description", input.description);
    data.append("category", input.category);
    data.append("image", uploadedImage);
    data.append("audio", uploadedAudio);

    try {
      let response = await axios.post(
        "https://podcast-api-gh6v.onrender.com/add-podcast",
        data,
        {
          headers: { "Content-Type": "multipart/form-data" },
          withCredentials: true,
        }
      );
      toast.success(response?.data?.message, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Flip,
      });
      setTimeout(() => {
        navigate("/profile");
        dispatch(authActions.login());
      }, 2000);
    } catch (error) {
      console.log(error);
      toast.success(error?.response?.data?.message, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Flip,
      });
    }
  };

  return {
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
  };
}

export default useAddProduct;
