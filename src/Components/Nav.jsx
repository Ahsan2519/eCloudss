import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
const Nav = () => {
  const [active, setActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const isDesktops = useSelector((state) => state.window.isDesktop);
  const toggleHandler = (actionName) => {
    if (actionName === "menue") {
      setActive(!active);
    } else if (actionName === "dropdown") {
      setIsOpen(!isOpen);
    }
  };
  return (
    <header>
      <div className="bg-white relative pt-[12px] pb-[15px]">
        {!isDesktops ? (
          <MobileNav active={active} toggleHandler={toggleHandler} />
        ) : (
          <div className="wrapper w-[80%] max-w-none">
            <h1 className="flex justify-center ">
              <Link to="/">
                <img src="Images/DesktopLogo.svg" alt="eCloudacc" />
              </Link>
            </h1>
            <div className="flex justify-between">
              <ul className="flex justify-between lg:basis-[30%] xl:basis-[22%] md:basis-[35%] 2xl:basis-[19%]">
                <li>
                  <a
                    href="mailto:info@mail.com"
                    title="info@mail.com"
                    className="uppercase font-[400] text-[12px] leading-[18px] text-[#646467] relative anchor-with-icon"
                  >
                    info@mail.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:964-622-3903"
                    title="964-622-3903"
                    className="font-[400] text-[12px] leading-[18px] text-[#646467] anchor-with-icon call relative"
                  >
                    964-622-3903
                  </a>
                </li>
              </ul>
              <ul className="flex 2xl:basis-[12%] xl:basis-[15%] lg:basis-[18%] md:basis-[22%] ">
                <li className="basis-[28%]">
                  <a
                    href="#FIXME"
                    title="Twiter"
                    target="_blank"
                    className="icon-common before:content-['\f099'] "
                  >
                    Twitter
                  </a>
                </li>
                <li className="basis-[28%]">
                  <a
                    href="#FIXME"
                    title="Facebook"
                    target="_blank"
                    className="icon-common before:content-['\f39e']"
                  >
                    Facebook
                  </a>
                </li>
                <li className="basis-[28%]">
                  <a
                    href="#FIXME"
                    title="Instagram"
                    target="_blank"
                    className="icon-common instagram before:content-['']"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
      <nav
        className={`shadow-[2px_1px_7px_2px_rgba(0,0,0,0.1)] py-6 bg-white ${
          active ? "left-0" : "left-[-100%]"
        } md:py-[9px] ${
          !isDesktops
            ? "absolute w-full top-[69px] z-10 overflow-hidden transition-all duration-[.3s]"
            : ""
        }`}
      >
        <div className="wrapper lg:w-[70%] md:w-[90%] 2xl:w-[40%]">
          <ul
            className={`flex items-center gap-2 md:gap-0 ${
              !isDesktops ? "flex-col" : ""
            }`}
          >
            <li className="nav-list">
              <Link to={"/"} title="Home">
                Home
              </Link>
            </li>
            <li
              className="nav-list transition-all duration-[.3s] relative"
              onClick={() => toggleHandler("dropdown")}
            >
              <a
                href="#FIXME"
                title="Service"
                className={`common nav-list relative`}
              >
                Service
              </a>
              <ul
                className={`justify-center mx-auto rounded-[10px] bg-white shadow-[0_10px_25px_rgba(0,0,0,0.1)] flex-col flex overflow-hidden transition-all mt-1 duration-[.3s] ${
                  isOpen ? "h-auto" : "h-0"
                } ${
                  isDesktops
                    ? "absolute top-[70%] z-[5] w-full left-[19%]"
                    : "w-[30%]"
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
            </li>
            <li className="nav-list">
              <Link to={"/CaseStudy"} title="Case Study">
                Case Study
              </Link>
            </li>
            <li className="nav-list">
              <Link to={"/About"} title="About Us">
                About Us
              </Link>
            </li>
            <li className="nav-list">
              <Link to={"/Blog"} title="Blog">
                Blog
              </Link>
            </li>
            <li className="nav-list">
              <Link to={"/Contact"} title="Contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
