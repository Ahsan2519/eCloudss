import React from "react";
import { TabFilterData } from "../../Data/TabFilterData";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../../Actions/TabFilterAction";

const TabFilter = () => {
  const activeTab = useSelector((state) => state.tabFilter.activeTab);
  const dispatch = useDispatch();
  const handleTabClick = (index) => {
    dispatch(setActiveTab(index));
  };

  return (
    <>
      <ul className="wrapper flex justify-between">
        <ul className="wrapper flex justify-between">
          {TabFilterData.map((ele, idx) => (
            <li
              key={idx}
              className={`py-[17px] px-[5%]  cursor-pointer transition-all ease-in-out duration-[.5s] ${
                activeTab === idx
                  ? "bg-white border-[1px] border-[#C9C9D8] border-b-0"
                  : ""
              }`}
              onClick={() => handleTabClick(idx)}
            >
              <img src={ele.url} alt={ele.heading} />
            </li>
          ))}
        </ul>
      </ul>
      <div className={`bg-white ${activeTab != 0 ? "fed-in-left" : ""}`}>
        <div className={`wrapper pt-[45px] pb-[35px] `}>
          <h3 className="font-[600] text-[16px] leading-[26px] text-black mb-2">
            {TabFilterData[activeTab].heading}
          </h3>
          <p className="font-[400] text-[12px] leading-[18px] text-[#696969] mb-4">
            {TabFilterData[activeTab].description}
          </p>
          <ul className="flex flex-col">
            <li className="text-center bg-[#E9EAF2] mb-3 py-[34px] rounded-[16px] font-[500] text-[16px] leading-[21px] text-black tab-filter1 tab-list">
              <span className="absolute top-[50%%] left-[50%%] translate-x-[-50%] translate-y-[-50%]">
                Schedule Your<span className="block">Consultation</span>
              </span>
            </li>
            <li className="text-center bg-[#E9EAF2] mb-3 py-6 rounded-[16px] font-[500] text-[16px] leading-[21px] text-black tab-filter2 tab-list">
              Financial Analysis
            </li>
            <li className="text-center bg-[#E9EAF2] mb-3 py-6 rounded-[16px] font-[500] text-[16px] leading-[21px] text-black tab-filter3 tab-list">
              Customized Solutions
            </li>
          </ul>
          <a
            href="#FIXME"
            title="Know more"
            className="font-[600] text-[14px] leading-[21px] text-[#27307D] block text-center mt-2 relative after:absolute  after:content-['\f061'] after:font-['FontAwesome'] after:ml-3"
          >
            Know more
          </a>
        </div>
      </div>
    </>
  );
};

export default TabFilter;
