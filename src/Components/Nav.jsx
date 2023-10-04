import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import MobileNav from "./UI/MobileNav";
import NavList from "./UI/NavList";
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
                    className="uppercase font-[400] text-[12px] leading-[18px] text-[#646467] relative anchor-with-icon lg:hover:text-[#00008B] transition-all ease-in-out duration-[.5s]"
                  >
                    info@mail.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:964-622-3903"
                    title="964-622-3903"
                    className="font-[400] text-[12px] leading-[18px] text-[#646467] anchor-with-icon call relative lg:hover:text-[#00008B] transition-all ease-in-out duration-[.5s]  "
                  >
                    964-622-3903
                  </a>
                </li>
              </ul>
              <ul className="flex 2xl:basis-[12%] xl:basis-[15%] lg:basis-[18%] md:basis-[22%]">
                <li className="basis-[28%]">
                  <a
                    href="#FIXME"
                    title="Twiter"
                    target="_blank"
                    className="icon-common before:content-['\f099'] lg:hover:before:text-[#696969] transition-all ease-in-out duration-[.5s] "
                  >
                    Twitter
                  </a>
                </li>
                <li className="basis-[28%]">
                  <a
                    href="#FIXME"
                    title="Facebook"
                    target="_blank"
                    className="icon-common before:content-['\f39e'] lg:hover:before:text-[#696969] transition-all ease-in-out duration-[.5s]"
                  >
                    Facebook
                  </a>
                </li>
                <li className="basis-[28%]">
                  <a
                    href="#FIXME"
                    title="Instagram"
                    target="_blank"
                    className="icon-common instagram before:content-[''] lg:hover:before:text-[#696969] transition-all ease-in-out duration-[.5s]"
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
        className={`md:shadow-[2px_1px_7px_2px_rgba(0,0,0,0.1)] py-6 bg-white ${
          active ? "top-[67px]" : "top-[-100%]"
        } md:py-[9px] ${
          !isDesktops
            ? "absolute w-full left-0 z-10 overflow-hidden transition-all ease-in-out duration-[.8s]"
            : ""
        }`}
      >
        <div className="wrapper tab:w-[70%] lg:w-[80%] md:w-[90%] 2xl:w-[45%]">
          <NavList
            isFooter={false}
            toggleHandler={toggleHandler}
            isOpen={isOpen}
          />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
