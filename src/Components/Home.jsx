import React, { useState } from "react";
import Counter from "./UI/Counter";
import ContentImage from "./UI/ContentImage";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../Actions/SliderAction";
import UnorderList from "./UI/UnorderList";
import TabFilter from "./UI/TabFilter";

const Home = () => {
  const dispatch = useDispatch();
  const index = useSelector((state) => state.slider.index);
  const sliderDetails = useSelector((state) => state.slider.sliderDetails);
  const isDesktops = useSelector((state) => state.window.isDesktop);

  return (
    <>
      <main>
        <ContentImage
          heading={
            !isDesktops
              ? "Focus on Your Business Let us do the"
              : "Where accuracy meets trusted financial solutions! "
          }
          description={
            !isDesktops
              ? 'We are great with numbers, our team works for YOU Leave your back-office with the "Affordable-Experts"'
              : "Unlock the Power of Offshore staffing and support with eCloudacc professionals. Partner with our expert team, specializing in offshore services for CPA, ACCA firms, and financial institutions. We provide essential backend solutions in all financial domains, including TAS, Audit, Bookkeeping, CFO Office, and Investment, to supercharge your operations. "
          }
          path={"/Contact"}
          title={"Contact Us"}
          imagePath={"Images/Banner.svg"}
          altMsg={"Hero Image"}
          isHero={true}
        />
        <Counter />
        <section className="bg-[#DADAE5]">
          <div className="wrapper pt-[70px]">
            <h2 className="font-[700] text-[30px] leading-[34px] text-[#27307D] pb-5 md:pr-[53%]">
              {!isDesktops
                ? " We offer a full range of accounting services for your business"
                : "Experience a complete spectrum of  offshore financial services with us "}
            </h2>
            <p className="font-[400] text-[14px] leading-[21px] text-[#696969] pb-[50px] md:pr-[54%]">
              {!isDesktops
                ? `Liquorice lemon drops powder chocolate liquorice candy dessert
              gummi bears. Caramels marzipan donut jujubes sweet roll. Powder
              croissant toffee shortbread chocolate sweet pie.`
                : "Our comprehensive financial and accounting solutions provide essential resources, experienced professionals, and extended back-office support for transaction advisory, audits, bookkeeping, and more. All of this is delivered in a timely and cost-effective manner, empowering your business for success. "}
            </p>
          </div>
          <TabFilter />
        </section>
        <ContentImage
          heading={
            !isDesktops
              ? "What we believe in..."
              : "Serving beyond boundaries..."
          }
          description={
            !isDesktops
              ? "Our aim is to use our unique experiences and expertise gained over a period of time with our own insights derived from the experience. We are passionate about supporting our clients in achieving their business goals and targets. Using these invaluable insights, we want to deliver quality solutions to increase our client’s productivity.."
              : "In the vast landscape of financial requirements, eCloudacc distinguishes itself as a unified, cost-effective platform. Seamlessly integrating services across niches, offering global assurance, TAS, Bookkeeping, and CFO outsourcing. With a skilled team boasting Big 4, CPA and ACCA experienced, we offer comprehensive solutions and robust back-office support. We have a track record of 40,000+ dedicated hours to clients in numerous countries, including the USA, UK, and Canada. "
          }
          path={"/About"}
          title={"KNOW MORE ABOUT US"}
          imagePath={"Images/Beleive.svg"}
          altMsg={"Know More"}
          isHero={false}
        >
          <div className="md:flex justify-between items-center">
            <div className="basis-[45%]">
              <h3 className="text-[#27307D] font-[600] text-[24px] leading-[34px] mt-10">
                Our Mission
              </h3>
              <p className="font-[400] text-[14px] leading-[21px] text-[#696969] pr-[8%] mt-[10px] md:pr-[35%]">
                {!isDesktops
                  ? `Our mission is simple enough. To unearth the magic behind the
                numbers of organizations big and small using ratio analysis and
                make meaningful decisions to boost up their performance. Our
                passion drives us forward.`
                  : `Our company's mission is to unify services on a single platform, offering specialized financial support in a specific niche. Backed by Big4 talent and industry leaders, we strive to provide exceptional services to global accounting firms, CPA firms, ACCA firms, investment banks, and financial companies. `}
              </p>
            </div>
            <div className="basis-[45%]">
              <h3 className="text-[#27307D] font-[600] text-[24px] leading-[34px] mt-10">
                Our Vision
              </h3>
              <p className="font-[400] text-[14px] leading-[21px] text-[#696969] pr-[8%] mt-[10px] md:pr-[35%]">
                {!isDesktops
                  ? `Our vision is to utilize the resources with accurate workable
                plans that deliver results. We know resources are scarce and the
                only way we can maximize efficiency is to employ better methods
                of production and execution.`
                  : `We aim to be the foremost and most reliable choice for global accounting firms, CPA firms, ACCA firms, investment banks, and financial companies, prioritizing client satisfaction. Our dedication lies in achieving exceptional outcomes for our clients and building enduring connections with stakeholders worldwide. `}
              </p>
            </div>
          </div>
        </ContentImage>
        <UnorderList
          heading={"Benefits"}
          subTitle={"Building relationships by delivering quality"}
        />
        <ContentImage
          heading={"Read our latest case study"}
          description={
            !isDesktops
              ? "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod."
              : "Learn how we empower businesses to conquer challenges, achieve goals, and navigate complexities."
          }
          path={"/About"}
          title={"Know More"}
          imagePath={"Images/Finance.svg"}
          altMsg={"Know More"}
          isHero={false}
        />
        <section className="py-[85px]">
          <div className="wrapper relative">
            <h2 className="font-[700] text-[30px] leading-[64px] text-[#27307D] text-center mb-4">
              Testimonials
            </h2>
            <ul
              className={`flex ${
                isDesktops
                  ? "justify-between items-stretch w-[88%] gap-[20px] md:flex-wrap tab:flex-nowrap mx-auto [&>*:nth-child(2)]:pt-1  [&>*:nth-child(2)]:pl[2%] [&>*:nth-child(3)]:pt-10"
                  : ""
              }`}
            >
              {sliderDetails.map((val, idx) => {
                return (
                  <li
                    key={idx}
                    className={`${
                      isDesktops
                        ? `relative flex px-[1.4%] pt-3 md:basis-[48%] md:mb-3 tab:md:mb-0 tab:basis-[24%] text-left md:pr-[5px] md:pb-[60px] ${
                            idx === 1
                              ? "md:[&>*:nth-child(2)]:md:top-[59%] air:[&>*:nth-child(2)]:md:top-[51%] md:[&>*:nth-child(3)]:md:pt-[8px] tab:[&>*:nth-child(2)]:md:top-[58%] tab:[&>*:nth-child(3)]:md:pt-[10px] tab:[&>*:nth-child(3)]:md:ml-[15%]"
                              : idx === 0 ? 'tab:[&>*:nth-child(2)]:md:top-[52.5%]' : ''
                          }`
                        : idx === index
                        ? "flex w-[85%] mx-auto px-[8%] pt-[30px] pb-[45px]"
                        : "hidden "
                    } flex-col items-center  border-[1px] border-[#EFEFEF]  rounded-[12px]`}
                  >
                    <p
                      className={`Slider ${
                        isDesktops
                          ? "text-[16px] leading-[20px] text-[#6E7378] md:text-left md:pr-[7%]"
                          : ""
                      }`}
                    >
                      {isDesktops
                        ? val.desktopDescription
                        : val.mobileDiscription}
                    </p>
                    <figure
                      className={`pb-6 md:pb-0 md:absolute md:top-[45%] lg:top-[40%] tab:top-[45.5%] md:left-[50%] md:translate-x-[-50%] 2xl:top-[43.5%] md:mr-[2%]`}
                    >
                      <img src={val.url} alt={val.title} />
                    </figure>
                    {!isDesktops && (
                      <h3 className="font-[700] text-[16px] leading-[22px] text-black">
                        {val.title}
                      </h3>
                    )}
                    <p className="font-[400] text-[12px] leading-[24px] text-[#BABABA] pt-2 md:text-[16px] md:leading-[20px] md:pt-[68px]">
                      {val.role}{" "}
                      {idx === 2 ? (
                        <span className="md:block">
                          (Top 65 Accounting Firms)
                        </span>
                      ) : null}
                    </p>
                  </li>
                );
              })}
            </ul>
            {!isDesktops && (
              <div className="absolute top-[60%] translate-y-[-50%] w-[85%] left-[7.2%] flex justify-between items-center">
                <span
                  title="Prev"
                  className="icon-common before:content-['\f104'] before:w-[32px] before:h-[32px] before:border-[1px] before:border-[#F6C648] before:rounded-[50%] before:flex before:justify-center before:items-center cursor-pointer"
                  onClick={() => dispatch(increment())}
                >
                  prev
                </span>
                <span
                  title="Next"
                  className="icon-common before:content-['\f105'] before:w-[32px] before:h-[32px] before:border-[1px] before:border-[#F6C648] before:rounded-[50%] before:flex before:justify-center before:items-center cursor-pointer"
                  onClick={() => dispatch(decrement())}
                >
                  next
                </span>
              </div>
            )}
          </div>
        </section>
        <ContentImage
          heading={!isDesktops ? "Get the most out of Form" : "Let’s Talk"}
          description={
            !isDesktops
              ? "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod."
              : "Looking for a dedicated team to handle your finances? Secure our top-tier Backend support today!"
          }
          path={"/Contact"}
          title={"Contact Us"}
          imagePath={"Images/ContactGroup.svg"}
          altMsg={"Contact Us"}
          isHero={false}
        />
      </main>
    </>
  );
};

export default Home;
