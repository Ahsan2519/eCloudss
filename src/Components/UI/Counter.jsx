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

  const animateCounters = () => {
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
          <li className="basis-[22%] mobile:basis-[25%] text-center">
            <span className="block">{customerCount}</span>
            <span className="block counter relative mt-[5px]">
              Satisfied Customers
            </span>
          </li>
          <li className="mobile:basis-[35%] text-center">
            <span className="block">{`${experienceCount} Years +`}</span>
            <span className="block counter relative mt-[5px]">Experience</span>
          </li>
          <li className="mobile:basis-[30%] text-center">
            <span className="block">{`${projectsCount} Years +`}</span>
            <span className="block counter relative mt-[5px]">
              Projects Done
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Counter;
