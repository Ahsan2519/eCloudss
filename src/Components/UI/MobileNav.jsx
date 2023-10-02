import React from 'react';
import { Link } from "react-router-dom";
import { IconX } from "@tabler/icons-react";

const MobileNav = ({active,toggleHandler}) => {
  return (
     <div className="flex justify-between wrapper py-[8px] items-center">
          <h1 className="basis-[64%]">
            <Link to="/">
              <img src="Images/Logo.svg" alt="eCloudacc" />
            </Link>
          </h1>
          <ul className="flex justify-between gap-4 sm:ml-[80px]">
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
            className="cursor-pointer transition-all ease-in-out duration-[.8s]"
            onClick={() => toggleHandler("menue")}
          >
            {!active ? (
              <img src="Images/Hamburger.svg" alt="Menu" />
            ) : (
              <IconX className="stroke-[#27307D]" size={24} stroke={1} />
            )}
          </div>
        </div>
  )
}

export default MobileNav
