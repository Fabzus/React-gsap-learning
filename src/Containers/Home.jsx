import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CustomCursor from "../CustomCursor";
import Header from "../components/Header";
import Featured from "../components/Featured";
import About from "../components/About";
import Gallery from "../components/Gallery";
import useLocoScroll from "../hooks/useLocoScroll";

import "../styles/home.scss";

const Home = () => {
  return (
    <>
      <CustomCursor />
      <div className="main-container" id="main-container">
        <Navbar />
        <Header />
        <Featured />
        <About />
        <Gallery />
        <Footer />
      </div>
    </>
  );
};
export default Home;
