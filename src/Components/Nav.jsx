import { IconX } from "@tabler/icons-react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
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
      <div className="bg-white relative">
        <div className="flex justify-between wrapper py-[22px] items-center">
          <h1 className="basis-[64%]">
            <Link to="/">
              <img src="Images/Logo.svg" alt="eCloudacc" />
            </Link>
          </h1>
          <ul className="flex justify-between gap-4">
            <li>
              <a href="mailto:info@mail.com" title="info@mail.com">
                <img src="Images/Mail.svg" alt="Mail" />
              </a>
            </li>
            <li>
              <a href="tel:123456789" title="123456789">
                <img src="Images/Call.svg" alt="Call" />
              </a>
            </li>
          </ul>
          <div
            className="cursor-pointer"
            onClick={() => toggleHandler("menue")}
          >
            {!active ? (
              <img src="Images/Hamburger.svg" alt="Menu" />
            ) : (
              <IconX className="stroke-[#27307D]" size={24} stroke={1} />
            )}
          </div>
        </div>
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
        <div className="wrapper md:w-[70%] xl:w-[50%]">
          <ul className={`flex items-center gap-2 md:gap-0 ${!isDesktops ? 'flex-col' : ''}`}>
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
                  isOpen  ? "h-auto" : "h-0"
                } ${isDesktops ? 'absolute top-[70%] z-[5] w-full left-[19%]' : 'w-[30%]'}`}
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
