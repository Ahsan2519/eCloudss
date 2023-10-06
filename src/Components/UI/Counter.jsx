import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementCustomerCount,
  incrementExperienceCount,
  incrementProjectsCount,
} from "../../Actions/CounterAction";

const Counter = () => {
  const { customerCount, experienceCount, projectsCount } = useSelector(
    (state) => state.counters
  );
  const isDesktops = useSelector((state) => state.window.isDesktop);

  const dispatch = useDispatch();

  // function for animate counters
  const animateCounters = () => {
    // setting counter value as per desktop and mobile
    let customerPayload = isDesktops ? 40000 : 136664;
    let experiencePayload = isDesktops ? 50 : 3;
    let projectsPayload = isDesktops ? 25 : 136664;

    dispatch(incrementCustomerCount(customerPayload));
    dispatch(incrementExperienceCount(experiencePayload));
    dispatch(incrementProjectsCount(projectsPayload));
  };

  useEffect(() => {
    const CounterInterval = setInterval(animateCounters, 20);

    return () => {
      clearInterval(CounterInterval);
    };
  }, [isDesktops]);

  return (
    <section className="bg-[#27307D] pt-5 pb-[14px]">
      <div className="wrapper">
        <ul className="text-white flex justify-between">
          <li
            className={`basis-[22%] large:basis-[25%] text-center ${
              !isDesktops
                ? "block"
                : "flex justify-center items-center xl:text-[42px] lg:text-[35px] leading-[64px] md:basis-[28%]"
            }`}
          >
            <span className={`block md:basis-[34%]`}>{`${
              !isDesktops ? customerCount : `${customerCount}+`
            }`}</span>
            <span className="block counter relative mt-[5px] uppercase md:mt-0 md:text-[17px] tab:text-[20px] leading-[24px] md:before:rotate-[90deg] md:before:h-[2px] md:basis-[41%] md:before:left-[2%] md:before:top-[47%] md:before:w-[43px] md:px-[5%] md:text-left">
              {!isDesktops ? "Satisfied Customers" : `Offshore service hours`}
            </span>
          </li>
          <li
            className={`mobile:basis-[35%] text-center ${
              !isDesktops
                ? "block"
                : "flex justify-center items-center xl:text-[42px] lg:text-[35px] leading-[64px] md:basis-[32%] lg:basis-[35%] medium:basis-[28%] "
            }`}
          >
            <span className="block large:basis-[52%] xl:basis-[56%]">{`${experienceCount} Years+`}</span>
            <span className="block counter relative mt-[5px] uppercase md:text-[17px] tab:text-[20px] leading-[24px] md:before:rotate-[90deg] md:before:h-[2px] md:basis-[41%] md:before:left-[2%] md:before:top-[47%] md:before:w-[43px] md:px-[5%] md:text-left">
              Experience
            </span>
          </li>
          <li
            className={`mobile:basis-[30%] text-center ${
              !isDesktops
                ? "block"
                : "flex justify-center items-center xl:text-[42px] lg:text-[35px] leading-[64px] md:basis-[28%] lg:basis-[35%]"
            }`}
          >
            <span className="block large::basis-[19%]">
              {!isDesktops ? `${projectsCount}` : `${projectsCount}+`}
            </span>
            <span className="block counter relative mt-[5px] uppercase md:text-[17px] tab:text-[20px] leading-[24px] md:before:rotate-[90deg] md:before:h-[2px] md:basis-[41%] md:before:left-[2%] medium:before:left-[9%] md:before:top-[47%] md:before:w-[43px] md:px-[5%] medium:pl-[6%] md:text-left">
              {!isDesktops
                ? "Projects Done"
                : `Offering services in countries`}
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Counter;
