import React from "react";

const UnorderList = ({ heading, subTitle }) => {
  return (
    <section className="pt-[75px] pb-[85px]">
      <div className="wrapper">
        <h2 className="font-[700] text-[30px] leading-[34px] text-center text-[#27307D] mb-4">{heading}</h2>
        <p className="font-[400] text-[14px] leading-[21px] text-center text-[#696969] mb-[55px]">{subTitle}</p>
        <ul className="flex justify-between flex-wrap">
          <li className="basis-[48%] mb-4 icon1 list-befor">
            <span className="block font-[600] text-[16px] leading-[26px] text-[#191919] text-center mt-5 list-after">Cost efficient</span>
            <p className="font-[400] text-[12px] leading-[18px] text-[#8C8C8C] text-center px-[9%] mt-3">
              Engage audience segments and finally create actionable insights.
            </p>
          </li>
          <li className="basis-[48%] mb-4 icon2 list-befor">
            <span className="block font-[600] text-[16px] leading-[26px] text-[#191919] text-center mt-5 list-after">Integrity</span>
            <p className="font-[400] text-[12px] leading-[18px] text-[#8C8C8C] text-center px-[9%] mt-3">
              Engage audience segments and finally create actionable insights.
            </p>
          </li>
          <li className="basis-[48%] mb-4 icon3 list-befor">
            <span className="block font-[600] text-[16px] leading-[26px] text-[#191919] text-center mt-5 list-after">Professionalism</span>
            <p className="font-[400] text-[12px] leading-[18px] text-[#8C8C8C] text-center px-[9%] mt-3">
              Engage audience segments and finally create actionable insights.
            </p>
          </li>
          <li className="basis-[48%] mb-4 icon3 list-befor">
            <span className="block font-[600] text-[16px] leading-[26px] text-[#191919] text-center mt-5 list-after">Transparency</span>
            <p className="font-[400] text-[12px] leading-[18px] text-[#8C8C8C] text-center px-[9%] mt-3">
              Engage audience segments and finally create actionable insights.
            </p>
          </li>
          <li className="basis-[48%] mb-4 icon5 list-befor">
            <span className="block font-[600] text-[16px] leading-[26px] text-[#191919] text-center mt-5 list-after">Accuracy and quality</span>
            <p className="font-[400] text-[12px] leading-[18px] text-[#8C8C8C] text-center px-[9%] mt-3">
              Engage audience segments and finally create actionable insights.
            </p>
          </li>
          <li className="basis-[48%] mb-4 icon6 list-befor">
            <span className="block font-[600] text-[16px] leading-[26px] text-[#191919] text-center mt-5 list-after">Accountability</span>
            <p className="font-[400] text-[12px] leading-[18px] text-[#8C8C8C] text-center px-[9%] mt-3">
              Engage audience segments and finally create actionable insights.
            </p>
          </li>
          <li className="basis-[48%] mb-4 icon7 list-befor">
            <span className="block font-[600] text-[16px] leading-[26px] text-[#191919] text-center mt-5 list-after">Confidentiality</span>
            <p className="font-[400] text-[12px] leading-[18px] text-[#8C8C8C] text-center px-[9%] mt-3">
              Engage audience segments and finally create actionable insights.
            </p>
          </li>
          <li className="basis-[48%] mb-4 icon8 list-befor">
            <span className="block font-[600] text-[16px] leading-[26px] text-[#191919] text-center mt-5">Client Focus</span>
            <p className="font-[400] text-[12px] leading-[18px] text-[#8C8C8C] text-center px-[9%] mt-3">
              Engage audience segments and finally create actionable insights.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default UnorderList;
