import React, { useEffect, lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./utility/Slice/auth";
import Loader from "./Component/Loader/Loader";

const Header = lazy(() => import("./Component/Navbar/Header"));
const Home = lazy(() => import("./Pages/Home"));
const Categories = lazy(() => import("./Pages/Categories"));
const AllPodcasts = lazy(() => import("./Pages/AllPodcasts"));
const SignIn = lazy(() => import("./Pages/SignIn"));
const SignUp = lazy(() => import("./Pages/SignUp"));
const Profile = lazy(() => import("./Pages/Profile"));
const AddPodcast = lazy(() => import("./Pages/AddPodcast"));
const SingleCategory = lazy(() => import("./Pages/SingleCategory"));
const Details = lazy(() => import("./Pages/Details"));
const Footer = lazy(() => import("./Pages/Footer"));

function App() {
  let dispatch = useDispatch();
  let isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  let checkingCookies = async () => {
    try {
      let response = await axios.get("http://localhost:1000/check-cookie", {
        withCredentials: true,
      });
      let cookies = response?.data?.message;
      if (cookies === true) {
        dispatch(authActions.login());
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkingCookies();
  }, []);
  return (
    <>
      <Header />
      <Suspense
        fallback={
          <div className="w-full h-[80vh] bg-[#F7EDE8] flex items-center justify-center">
            <Loader />;
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/category/:name" element={<SingleCategory />} />
          <Route path="/all-podcasts" element={<AllPodcasts />} />
          <Route path="/details/:id" element={<Details />} />

          <Route
            path="/sign-in"
            element={!isLoggedIn ? <SignIn /> : <Navigate to={"/profile"} />}
          />

          <Route
            path="/sign-up"
            element={!isLoggedIn ? <SignUp /> : <Navigate to={"/profile"} />}
          />

          <Route
            path="/profile"
            element={isLoggedIn ? <Profile /> : <Navigate to={"/sign-in"} />}
          />

          <Route
            path="/profile/add-podcast"
            element={isLoggedIn ? <AddPodcast /> : <Navigate to={"/sign-in"} />}
          />
        </Routes>
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
