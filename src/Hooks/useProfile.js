import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { authActions } from "../utility/Slice/auth";

function useProfile() {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let [userData, setUserData] = useState();
  let [userPodcast, setUserPodcast] = useState([]);

  let fetchUser = async () => {
    try {
      let response = await axios.get(
        "https://podcast-api-gh6v.onrender.com/user-details",
        {
          withCredentials: true,
        }
      );
      setUserData(response?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  let fetchUserPodcast = async () => {
    try {
      let response = await axios.get(
        "https://podcast-api-gh6v.onrender.com/get-user-podcast",
        {
          withCredentials: true,
        }
      );
      setUserPodcast(response?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser();
    fetchUserPodcast();
  }, []);

  const logout = async () => {
    try {
      let response = await axios.post(
        "https://podcast-api-gh6v.onrender.com/sign-out",
        {},
        { withCredentials: true }
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
        dispatch(authActions.logout());
        navigate("/");
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  return { userData, userPodcast, logout };
}

export default useProfile;
