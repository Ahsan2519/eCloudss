import React from "react";
import NavList from "./UI/NavList";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Footer = () => {
  const isDesktops = useSelector((state) => state.window.isDesktop);
  return (
    <footer>
      <div
        className="bg-cover bg-no-repeat bg-gradient-to-r from-blue-100 via-blue-200 to-transparent"
        style={{ backgroundImage: `url('Images/Footer.svg')` }}
      >
        <div className={`wrapper py-[85px] ${isDesktops ? 'py-[60px]' : ''}`}>
          <h3 className={`flex justify-center mb-[65px] ${isDesktops ? 'mb-[75px]' : ''}`}>
            <Link to={"/"}>
              <img src={!isDesktops ? 'Images/FooterLogo.svg' : 'Images/FooterDesktop.svg'} alt="eCloudacc" />
            </Link>
          </h3>
          <NavList isFooter={true} />
        </div>
      </div>
      <div className={`bg-white py-10 ${isDesktops ? 'py-3' : ''}`}>
        <div className={`wrapper w-[80%] ${isDesktops ? 'flex justify-between flex-row-reverse items-center' : ''}`}>
          <ul className={`flex justify-between mb-5 ${isDesktops ? 'basis-[20%] mb-0' : ''}`}>
            <li className="basis-[28%]">
              <a href="#FIXME" title="FaceBook" target="_blank" className="icon-common before:content-['\f39e'] text-[24px]">
                Facebook
              </a>
            </li>
            <li className="basis-[28%]">
              <a href="#FIXME" title="LinkedIn" target="_blank" className="icon-common before:content-['\f08c'] text-[24px]">
                LinkedIn
              </a>
            </li>
            <li className="basis-[28%]">
              <a href="#FIXME" title="Twitter" target="_blank" className="icon-common before:content-['\e61b'] text-[24px]">
                Twitter
              </a>
            </li>
            <li className="basis-[28%]">
              <a href="#FIXME" title="Instagram" target="_blank" className="icon-common before:content-['\f16d'] text-[24px]">
                Instagram
              </a>
            </li>
            <li className="basis-[28%]">
              <a href="#FIXME" title="Youtube" target="_blank" className="icon-common before:content-['\f167'] text-[24px]">
                Youtube
              </a>
            </li>
          </ul>
          <p className="font-[400] text-[12px] leading-[18px] text-[#767676] text-center">
            © Copyright 2023 eCloudacc. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
