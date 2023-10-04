import React from "react";
import { useSelector } from "react-redux";

const UnorderList = ({ heading, subTitle }) => {
  const isDesktops = useSelector((state) => state.window.isDesktop);
  return (
    <section className="pt-[75px] pb-[85px]">
      <div className="wrapper">
        <h2 className="font-[700] text-[30px] leading-[34px] text-center text-[#27307D] mb-4 md:text-[52px] md:leading-[64px]">
          {heading}
        </h2>
        <p className="font-[400] text-[14px] leading-[21px] text-center text-[#696969] mb-[55px] md:text-[16px] md:leading-[20px">
          {subTitle}
        </p>
        <ul className="flex justify-between flex-wrap">
          <li
            className={`basis-[48%] md:basis-[21%] mb-4 icon1 list-befor icon1 transition-all ease-in-out duration-[.5s] group `}
          >
            <span className="block font-[600] text-[16px] leading-[26px] text-[#191919] text-center mt-5 list-after lg:after:group-hover:bg-[#F6C648]">
              {!isDesktops ? "Cost efficient" : "Cost-Effective Expertise"}
            </span>
            <p className="font-[400] text-[12px] leading-[18px] text-[#8C8C8C] text-center px-[9%] mt-3 md:text-left md:px-0 md:pr-[8%] md:text-[16px] md:leading-[20px]">
              {!isDesktops
                ? "Engage audience segments and finally create actionable insights."
                : "Affordable, skilled and back-office extended staffing with niche knowledge. "}
            </p>
          </li>
          <li className="basis-[48%] md:basis-[21%] mb-4 icon2 list-befor transition-all ease-in-out duration-[.5s] group">
            <span className="block font-[600] text-[16px] leading-[26px] text-[#191919] text-center mt-5 list-after lg:after:group-hover:bg-[#F6C648]">
              {!isDesktops ? "Integrity" : "Global Operations"}
            </span>
            <p className="font-[400] text-[12px] leading-[18px] text-[#8C8C8C] text-center px-[9%] mt-3 md:text-left md:px-0 md:pr-[8%] md:text-[16px] md:leading-[20px]">
              {!isDesktops
                ? "Engage audience segments and finally create actionable insights."
                : " Uninterrupted assistance across time zones for clients worldwide. "}
            </p>
          </li>
          <li className="basis-[48%] md:basis-[21%] mb-4 icon3 list-befor transition-all ease-in-out duration-[.5s] group">
            <span className="block font-[600] text-[16px] leading-[26px] text-[#191919] text-center mt-5 list-after lg:after:group-hover:bg-[#F6C648]">
              {!isDesktops ? "Professionalism" : "Top Talent"}
            </span>
            <p className="font-[400] text-[12px] leading-[18px] text-[#8C8C8C] text-center px-[9%] mt-3 md:text-left md:px-0 md:pr-[8%] md:text-[16px] md:leading-[20px]">
              {!isDesktops
                ? "Engage audience segments and finally create actionable insights."
                : "Harnessing insights from distinguished Big 4 professionals."}
            </p>
          </li>
          <li className="basis-[48%] md:basis-[21%] mb-4 icon3 list-befor transition-all ease-in-out duration-[.5s] group">
            <span className="block font-[600] text-[16px] leading-[26px] text-[#191919] text-center mt-5 list-after lg:after:group-hover:bg-[#F6C648]">
              {!isDesktops ? "Transparency" : "Technology Driven"}
            </span>
            <p className="font-[400] text-[12px] leading-[18px] text-[#8C8C8C] text-center px-[9%] mt-3 md:text-left md:px-0 md:pr-[8%] md:text-[16px] md:leading-[20px]">
              {!isDesktops
                ? "Engage audience segments and finally create actionable insights."
                : "Leveraging technology for efficiency and growth."}
            </p>
          </li>
          <li className="basis-[48%] md:basis-[21%] mb-4 icon5 list-befor transition-all ease-in-out duration-[.5s] group">
            <span className="block font-[600] text-[16px] leading-[26px] text-[#191919] text-center mt-5 list-after lg:after:group-hover:bg-[#F6C648]">
              {!isDesktops ? "Accuracy and quality" : "Quality Focus"}
            </span>
            <p className="font-[400] text-[12px] leading-[18px] text-[#8C8C8C] text-center px-[9%] mt-3 md:text-left md:px-0 md:pr-[8%] md:text-[16px] md:leading-[20px]">
              {!isDesktops
                ? "Engage audience segments and finally create actionable insights."
                : "A multi-layer review system ensures top-tier deliverables, minimizing revisions. "}
            </p>
          </li>
          <li className="basis-[48%] md:basis-[21%] mb-4 icon6 list-befor transition-all ease-in-out duration-[.5s] group">
            <span className="block font-[600] text-[16px] leading-[26px] text-[#191919] text-center mt-5 list-after lg:after:group-hover:bg-[#F6C648]">
              {!isDesktops ? "Accountability" : "Transparency"}
            </span>
            <p className="font-[400] text-[12px] leading-[18px] text-[#8C8C8C] text-center px-[9%] mt-3 md:text-left md:px-0 md:pr-[8%] md:text-[16px] md:leading-[20px]">
              {!isDesktops
                ? "Engage audience segments and finally create actionable insights."
                : "Transparent communication with clients through live progress updates."}
            </p>
          </li>
          <li className="basis-[48%] md:basis-[21%] mb-4 icon7 list-befor transition-all ease-in-out duration-[.5s] group">
            <span className="block font-[600] text-[16px] leading-[26px] text-[#191919] text-center mt-5 list-after lg:after:group-hover:bg-[#F6C648]">
              Confidentiality
            </span>
            <p className="font-[400] text-[12px] leading-[18px] text-[#8C8C8C] text-center px-[9%] mt-3 md:text-left md:px-0 md:pr-[8%] md:text-[16px] md:leading-[20px]">
              {!isDesktops
                ? "Engage audience segments and finally create actionable insights."
                : "Practicing strict confidentiality standards to safeguard your information."}
            </p>
          </li>
          <li className="basis-[48%] md:basis-[21%] mb-4 icon8 list-befor transition-all ease-in-out duration-[.5s] group">
            <span className="block font-[600] text-[16px] leading-[26px] text-[#191919] text-center mt-5 list-after lg:after:group-hover:bg-[#F6C648]">
              {!isDesktops ? "Client Focus" : "All-Inclusive Solutions"}
            </span>
            <p className="font-[400] text-[12px] leading-[18px] text-[#8C8C8C] text-center px-[9%] mt-3 md:text-left md:px-0 md:pr-[8%] md:text-[16px] md:leading-[20px]">
              {!isDesktops
                ? "Engage audience segments and finally create actionable insights."
                : "A single platform for diverse financial services, outperforms competitors."}
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default UnorderList;
