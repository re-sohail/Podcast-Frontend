import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function useSignup() {
  let navigate = useNavigate();
  let [form, setForm] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  let [formErr, setFormErr] = useState({
    name: null,
    username: null,
    email: null,
    password: null,
  });
  let [hidePass, setHidePass] = useState(false);

  let hidePassword = () => {
    setHidePass((prev) => !prev);
  };

  let validator = (key, value) => {
    let err = null;

    if (!value) {
      err = `${key} is required`;
    }
    return err;
  };
  let inputHandle = (e) => {
    let token = e.target;
    let key = token.name;
    let value = token.value;
    setForm({ ...form, [key]: value });

    let error = validator(key, value);

    setFormErr({ ...formErr, [key]: error });
  };

  let submitData = async (e) => {
    e.preventDefault();

    let keys = Object.keys(form);

    let newFormErr = {};
    let error = "";

    for (let key of keys) {
      let value = form[key];
      error = validator(key, value);
      newFormErr[key] = error;
    }

    setFormErr(newFormErr);

    if (!error) {
      try {
        let response = await axios.post(
          "https://podcast-api-gh6v.onrender.com/sign-up",
          form
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
          navigate("/sign-in");
        }, 2000);
      } catch (error) {
        let errors = error?.response?.data?.message;
        errors.map((item, i) => {
          return toast.error(item, {
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
        });
      }
    }
  };

  return { form, formErr, hidePass, hidePassword, inputHandle, submitData };
}

export default useSignup;
