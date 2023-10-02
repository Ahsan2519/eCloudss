import React, { useState } from "react";
import { TabFilterData } from "../../Data/TabFilterData";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../../Actions/TabFilterAction";

const TabFilter = () => {
  const activeTab = useSelector((state) => state.tabFilter.activeTab);
  const dispatch = useDispatch();
  const isDesktops = useSelector((state) => state.window.isDesktop);
  const [active, setActive] = useState(false);
  const handleTabClick = (index) => {
    dispatch(setActiveTab(index));
    setActive(true);
    setTimeout(() => {
      setActive(false);
    }, 1500);
  };

  return (
    <>
      <ul className="wrapper flex justify-between">
        {TabFilterData.map((ele, idx) => (
          <li
            key={idx}
            className={`py-[17px] px-[5%] md:px-[1%] md:flex md:justify-center md:items-center md:flex-col md:shadow-[0px_-35px_50px_0px_rgba(0, 0, 0, 0.08)]  cursor-pointer transition-all ease-in-out duration-[.5s] ${
              activeTab === idx
                ? "bg-white border-[1px] border-[#C9C9D8] border-b-0"
                : ""
            }`}
            onClick={() => handleTabClick(idx)}
          >
            <img src={ele.url} alt={ele.heading} />
            {isDesktops && (
              <span className="block px-[19%] text-center">{ele.heading}</span>
            )}
          </li>
        ))}
      </ul>
      <div className={`bg-white ${active ? "fed-in-left" : ""}`}>
        <div className={`wrapper pt-[45px] pb-[35px] `}>
          <h3 className="font-[600] text-[16px] leading-[26px] text-black mb-2 md:text-[32px] md:leading-[34px]">
            {TabFilterData[activeTab].heading}
          </h3>
          <p className="font-[400] text-[12px] leading-[18px] text-[#696969] mb-4 md:mb-14 md:text-[16px] md:leading-[20px] md:pr-[40%]">
            {!isDesktops
              ? TabFilterData[activeTab].description
              : "Ensuring compliance, identifying potential risks and providing invaluable insights to guide your strategic decisions and improve operational efficiency."}
          </p>
          <ul className="flex flex-col md:flex-row md:justify-between  md:mr-[40%] md:w-[55%]">
            <li className="text-center bg-[#E9EAF2] mb-3 py-[34px] rounded-[16px] font-[500] text-[16px] leading-[21px] text-black tab-filter1 tab-list md:basis-[30%] md:pt-[50px] md:pb-[18px]">
              Charting the Meeting
              {!isDesktops && (
                <span className="absolute top-[50%%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                  Schedule Your<span className="block">Consultation</span>
                </span>
              )}
            </li>
            <li className="text-center bg-[#E9EAF2] mb-3 py-6 rounded-[16px] font-[500] text-[16px] leading-[21px] text-black tab-filter2 tab-list md:basis-[30%] md:pt-[50px] md:pb-[18px]">
              {!isDesktops ? "Financial Analysis" : "Financial Analysis"}
            </li>
            <li className="text-center bg-[#E9EAF2] mb-3 py-6 rounded-[16px] font-[500] text-[16px] leading-[21px] text-black tab-filter3 tab-list md:basis-[30%] md:pt-[50px] md:pb-[18px]">
              Customized Solutions
            </li>
          </ul>
          <a
            href="#FIXME"
            title="Know more"
            className="font-[600] text-[14px] leading-[21px] text-[#27307D] block text-center mt-2 relative after:absolute  after:content-['\f061'] after:font-['FontAwesome'] after:ml-3 md:text-left md:text-[16px]"
          >
            Know more
          </a>
        </div>
      </div>
    </>
  );
};

export default TabFilter;