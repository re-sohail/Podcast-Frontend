import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { authActions } from "../utility/Slice/auth.js";
import { useNavigate } from "react-router-dom";
import { toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function useSignIn() {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  let [form, setForm] = useState({
    email: "",
    password: "",
  });

  let [formErr, setFormErr] = useState({
    email: null,
    password: null,
  });

  let [hidePass, setHidePass] = useState(false);

  let hidePassword = () => {
    setHidePass((prev) => !prev);
  };

  let validator = (value, key) => {
    let err = null;

    if (!value) {
      err = `${key} is required`;
    }
    return err;
  };

  let inputHandle = (e) => {
    let token = e.target;
    let value = token.value;
    let key = token.name;

    setForm({ ...form, [key]: value });

    let error = validator(value, key);
    setFormErr({ ...formErr, [key]: error });
  };

  let submitData = async (e) => {
    e.preventDefault();

    let keys = Object.keys(form);
    let newFormErr = {};
    let error = "";

    for (let key of keys) {
      let value = form[key];
      let error = validator(value, key);
      newFormErr[key] = error;
    }

    setFormErr(newFormErr);

    if (!error) {
      try {
        let response = await axios.post(
          "https://podcast-api-gh6v.onrender.com/sign-in",
          form,
          {
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
        toast.error(error?.response?.data?.message, {
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
    }
  };

  return { form, formErr, hidePass, hidePassword, inputHandle, submitData };
}

export default useSignIn;
