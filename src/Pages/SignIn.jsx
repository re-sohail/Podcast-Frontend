import React from "react";
import { BiShowAlt, BiHide } from "react-icons/bi";
import LoginPic from "../assets/img/rode-podcast.jpg";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useSignIn from "../Hooks/useSignIn";

function SignIn() {
  let { form, formErr, hidePass, hidePassword, inputHandle, submitData } =
    useSignIn();
  return (
    <div className="x:hidden xs:flex w-full h-[90vh] bg-[#f7ede8] items-center justify-center text-white">
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
      <div className="xs:w-[90%] md:w-[800px] md:h-[500px] bg-[#f7ede8]  border-[3px] border-black rounded-lg overflow-hidden flex items-start justify-start">
        <div className="xs:hidden md:flex w-[40%] h-full">
          <img src={LoginPic} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="xs:w-full md:w-[60%] xs:p-6 md:p-10">
          <h1 className="xs:text-3xl md:text-5xl text-[#CD4631]">Hello,</h1>
          <h1 className="xs:text-4xl md:text-6xl font-semibold text-black">
            Welcome!
          </h1>
          <form
            action=""
            method="POST"
            onSubmit={submitData}
            className="pt-8 flex items-start flex-col gap-3"
          >
            <input
              type="email"
              placeholder={
                formErr.email ? formErr.email : "Enter Your Valid Email"
              }
              name="email"
              value={form.email}
              onChange={inputHandle}
              className={`w-full h-[50px] px-3 text-zinc-900 border-2 outline-none ${
                formErr.email
                  ? "border-red-500 placeholder:text-red-500"
                  : "border-black"
              }`}
            />

            <div
              className={`w-full h-[50px] relative bg-white border-2 ${
                formErr.password ? "border-red-500 " : "border-black"
              } `}
            >
              <input
                type={hidePass ? "text" : "password"}
                placeholder={
                  formErr.password ? formErr.password : "Enter Your Password"
                }
                name="password"
                value={form.password}
                onChange={inputHandle}
                className={`w-[93%] h-full px-3 outline-none text-zinc-900 ${
                  formErr.password ? "placeholder:text-red-500" : ""
                }`}
              />
              {hidePass ? (
                <BiHide
                  onClick={hidePassword}
                  className="absolute top-3 right-2 text-xl cursor-pointer text-zinc-900"
                />
              ) : (
                <BiShowAlt
                  onClick={hidePassword}
                  className="absolute top-3 right-2 text-xl cursor-pointer text-zinc-900"
                />
              )}
            </div>

            <input
              type="submit"
              value="Login"
              className="w-full h-[40px] cursor-pointer px-3 bg-[#CD4631] text-[#F7EDE8] outline-none font-medium"
            />
          </form>
          <div className="w-full pt-12 flex items-center justify-center flex-col">
            <p className="text-[#4D4D4D]">Have not account yet?</p>
            <Link to={"/sign-up"}>
              <p className="text-lg font-medium text-black hover:text-[#CD4631] cursor-pointer pt-2">
                SignUp
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
