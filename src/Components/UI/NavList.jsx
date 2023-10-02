import React from "react";
import { Link, useLocation } from "react-router-dom";
import Footer from "../Footer";
import { useSelector } from "react-redux";

const NavList = ({ isFooter, toggleHandler, isOpen }) => {
  const isDesktops = useSelector((state) => state.window.isDesktop);
  return (
    <ul
      className={`${
        isFooter
          ? "flex justify-center w-[80%] mx-auto flex-wrap gap-4"
          : "flex items-center gap-2 md:gap-0 flex-col md:flex-row"
      }`}
    >
      <li className={`${!isFooter ? "nav-list" : `footer-nav-list ${isDesktops ? 'basis-[13%] font-[500] text-[24px] leading-[24px] text-[#27307D]' : ''}`}`}>
        {!isFooter ? (
          <Link to={"/"} title="Home">
            Home
          </Link>
        ) : (
          <Link to={"/About"} title="About Us">
            About Us
          </Link>
        )}
      </li>
      <li
        className={`${
          !isFooter
            ? "nav-list transition-all ease-in-out duration-[.3s] relative"
            : `footer-nav-list ${isDesktops ? 'basis-[13%] font-[500] text-[24px] leading-[24px] text-[#27307D]' : ''}`
        }`}
        onClick={!isFooter ? () => toggleHandler("dropdown") : undefined}
      >
        {!isFooter ? (
          <>
            <a
              href="#FIXME"
              title="Service"
              className={`common nav-list relative`}
            >
              Service
            </a>
            <ul
              className={`justify-center mx-auto rounded-[10px] bg-white shadow-[0_10px_25px_rgba(0,0,0,0.1)] flex-col flex overflow-hidden transition-all mt-1 duration-[.3s] w-[30%] md:absolute md:top-[70%] md:z-[5] md:w-full md:left-[19%] ${
                isOpen ? "h-auto" : "h-0"
              }`}
            >
              <li className={`py-2`}>
                <Link to={"/Service"} title="Service" className="nav-list">
                  Services
                </Link>
              </li>
              <li className={`py-2`}>
                <Link to={"/Service"} title="Service" className="nav-list">
                  Services
                </Link>
              </li>
              <li className={`py-2`}>
                <Link to={"/Service"} title="Service" className="nav-list">
                  Services
                </Link>
              </li>
            </ul>
          </>
        ) : (
          <Link to={"/Service"} title="Service">
            Service
          </Link>
        )}
      </li>
      {!isFooter ? (
        <li className={`${!isFooter ? "nav-list" : ''}`}>
          <Link to={"/CaseStudy"} title="Case Study">
            Case Study
          </Link>
        </li>
      ) : (
        <li className={`${!isFooter ? "nav-list" : `footer-nav-list ${isDesktops ? 'basis-[13%] font-[500] text-[24px] leading-[24px] text-[#27307D]' : ''}`}`}>
          <Link to={"/Contact"} title="Contact">
            Contact Us
          </Link>
        </li>
      )}
      {!Footer && (
        <li className={`${!isFooter ? "nav-list" : ''}`}>
          <Link to={"/About"} title="About Us">
            About Us
          </Link>
        </li>
      )}
      <li className={`${!isFooter ? "nav-list" : `footer-nav-list ${isDesktops ? 'basis-[13%] font-[500] text-[24px] leading-[24px] text-[#27307D]' : ''}`}`}>
        <Link to={"/Blog"} title="Blog">
          Blog
        </Link>
      </li>
      {!isFooter ? (
        <li className={`${!isFooter ? "nav-list" : ''}`}>
          <Link to={"/Contact"} title="Contact">
            Contact
          </Link>
        </li>
      ) : (
        <Link to={"/CaseStudy"} title="Case Study" className={`footer-nav-list ${isDesktops ? 'basis-[13%] font-[500] text-[24px] leading-[24px] text-[#27307D]' : ''}`}>
          Case Study
        </Link>
      )}
    </ul>
  );
};

export default NavList;
