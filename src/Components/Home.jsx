import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main>
      {/* banner section  */}
      <section className="relative hero-image-one py-[40px]">
        {/* <figure className='absolute top-0 hero-image-one'>
        <img src="Images/Bg.svg" alt="Hero Image" />
      </figure> */}
        {/* <figure className='absolute top-0 hero-image-two'>
        <img src="Images/BgTwo.svg" alt="Hero Image" />
      </figure> */}
        <div className="wrapper">
          <div>
            <h2 className="text-[#27307D] font-[700] text-[30px] leading-[34px]">
              Focus on Your Business Let us do the <span>Accounting</span>
            </h2>
            <p className="font-[400] text-[14px] leading-[21px] text-[#696969] pr-[10%] mt-[15px]">
              We are great with numbers, our team works for YOU Leave your
              back-office with the "Affordable-Experts"
            </p>
            <Link
              to={"/Contact"}
              title="Contact Us"
              className="bg-[#27307D] text-white text-center py-[18px] px-[10%] font-[600] text-[14px] leading-[17px] mt-[30px] inline-block rounded-[4px] uppercase mb-[60px]"
            >
              Contact Us
            </Link>
          </div>
          <figure className="mb-[30px]">
            <img src="Images/Banner.svg" alt="" />
          </figure>
        </div>
      </section>
      <section className="bg-[#27307D] pt-5 pb-[14px]">
        <div className="wrapper">
          <ul className="text-white flex justify-between">
            <li className="basis-[25%] text-center">
              <span className="block">136,664</span>
              <span className="block counter relative mt-[5px]">
                Satisfied Customers
              </span>
            </li>
            <li className="basis-[35%] text-center">
              <span className="block">3 Years +</span>
              <span className="block counter relative mt-[5px]">
                Experience
              </span>
            </li>
            <li className="basis-[30%] text-center">
              <span className="block">136,664</span>
              <span className="block counter relative mt-[5px]">
                Project Done
              </span>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Home;
