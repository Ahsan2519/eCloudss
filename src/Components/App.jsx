import "../Assets/Style/App.css";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "./Contact";
import About from "./About";
import Home from "./Home";
import CaseStudy from "./CaseStudy";
import Service from "./Service";
import Blog from "./Blog";
import { useDispatch, useSelector } from "react-redux";
import Nav from "./Nav";
import { desktopWidth, setWindowWidth } from "../Actions/ResponsiveAction";
import Footer from "./Footer";

const App = () => {
  const dispatch = useDispatch();
  const isMobile = useSelector((state) => state.window.windowWidth);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsDesktop(isMobile >= 768 ? true : false);
    dispatch(desktopWidth(isDesktop));
  }, [isMobile, isDesktop]);

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      dispatch(setWindowWidth(newWidth));
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dispatch]);
  return (
    <div>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Service" element={<Service />} />
        <Route exact path="/CaseStudy" element={<CaseStudy />} />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/Blog" element={<Blog />} />
        <Route exact path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
