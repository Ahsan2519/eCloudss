import React, { useState } from "react";
import Counter from "./UI/Counter";
import ContentImage from "./UI/ContentImage";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../Actions/SliderAction";
import UnorderList from "./UI/UnorderList";
import TabFilter from "./UI/TabFilter";

const Home = () => {
  const dispatch = useDispatch();
  const index = useSelector(state=>state.slider.index);
  const sliderDetails = useSelector(state=>state.slider.sliderDetails);
  const isDesktops = useSelector((state) => state.window.isDesktop);

  return (
    <>
      <main>
        {/* banner section  */}
        {/* <section className="relative hero-image-one py-[40px]">
        <figure className='absolute top-0 hero-image-one'>
        <img src="Images/Bg.svg" alt="Hero Image" />
      </figure>
        <figure className='absolute top-0 hero-image-two'>
        <img src="Images/BgTwo.svg" alt="Hero Image" />
      </figure>
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
            <img
              src="Images/Banner.svg"
              alt="Banner Image"
              className="w-full"
            />
          </figure>
        </div>
      </section> */}
        <ContentImage
          heading={!isDesktops ? 'Focus on Your Business Let us do the' : 'Where accuracy meets trusted financial solutions! '}
          description={
            !isDesktops ? 'We are great with numbers, our team works for YOU Leave your back-office with the "Affordable-Experts"' : 'Unlock the Power of Offshore staffing and support with eCloudacc professionals. Partner with our expert team, specializing in offshore services for CPA, ACCA firms, and financial institutions. We provide essential backend solutions in all financial domains, including TAS, Audit, Bookkeeping, CFO Office, and Investment, to supercharge your operations. '
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
            <h2 className="font-[700] text-[30px] leading-[34px] text-[#27307D] pb-5">
              We offer a full range of accounting services for your business
            </h2>
            <p className="font-[400] text-[14px] leading-[21px] text-[#696969] pb-[50px]">
              Liquorice lemon drops powder chocolate liquorice candy dessert
              gummi bears. Caramels marzipan donut jujubes sweet roll. Powder
              croissant toffee shortbread chocolate sweet pie.{" "}
            </p>
          </div>
            <TabFilter/>
        </section>
        <ContentImage
          heading={"What we believe in..."}
          description={
            "Our aim is to use our unique experiences and expertise gained over a period of time with our own insights derived from the experience. We are passionate about supporting our clients in achieving their business goals and targets. Using these invaluable insights, we want to deliver quality solutions to increase our client’s productivity.."
          }
          path={"/About"}
          title={"KNOW MORE ABOUT US"}
          imagePath={"Images/Beleive.svg"}
          altMsg={"Know More"}
          isHero={false}
        >
          <div>
            <div>
              <h3 className="text-[#27307D] font-[600] text-[24px] leading-[34px] mt-10">Our Mission</h3>
              <p className="font-[400] text-[14px] leading-[21px] text-[#696969] pr-[8%] mt-[10px]">Our mission is simple enough. To unearth the magic behind the numbers of organizations big and small using ratio analysis and make meaningful decisions to boost up their performance. Our passion drives us forward.</p>
            </div>
            <div>
              <h3 className="text-[#27307D] font-[600] text-[24px] leading-[34px] mt-10">Our Vision</h3>
              <p className="font-[400] text-[14px] leading-[21px] text-[#696969] pr-[8%] mt-[10px]">Our vision is to utilize the resources with accurate workable plans that deliver results. We know resources are scarce and the only way we can maximize efficiency is to employ better methods of production and execution.</p>
            </div>
          </div>
        </ContentImage>
        <UnorderList heading={'Benefits'} subTitle={'Building relationships by delivering quality'}/>
        <ContentImage
          heading={"Read our latest case study"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod."
          }
          path={"/About"}
          title={"Know More"}
          imagePath={"Images/Finance.svg"}
          altMsg={"Know More"}
          isHero={false}
        />
        <section className="py-[85px]">
          <div className="wrapper relative">
            <h2 className="font-[700] text-[30px] leading-[64px] text-[#27307D] text-center mb-5">
              Testimonials
            </h2>
            <ul className={`flex ${isDesktops ? 'justify-between items-start w-[88%] mx-auto' : ''}`}>
              {sliderDetails.map((val, idx) => {
                return (
                  <li
                    key={idx}
                    className={`${
                      isDesktops ? 'flex px-[1%] basis-[23%]': idx === index ? "flex" : "hidden w-[85%] mx-auto"
                    } flex-col items-center  border-[1px] border-[#EFEFEF] px-[8%] pt-[30px] pb-[45px] rounded-[12px]`}
                  >
                    <p className={`Slider ${isDesktops ? 'text-[16px] leading-[20px] text-[#6E7378]' : ''}`}>{isDesktops ? val.desktopDescription : val.mobileDiscription}</p>
                    <figure className="pb-6">
                      <img src={val.url} alt={val.title} />
                    </figure>
                    {
                      !isDesktops && <h3 className="font-[700] text-[16px] leading-[22px] text-black">
                      {val.title}
                    </h3>
                    }
                    <p className="font-[400] text-[12px] leading-[24px] text-[#BABABA] pt-2">
                      {val.role}
                    </p>
                  </li>
                );
              })}
            </ul>
            {
              !isDesktops && <div className="absolute top-[60%] translate-y-[-50%] w-[85%] left-[7.2%] flex justify-between items-center">
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
            }
          </div>
        </section>
        <ContentImage
          heading={"Get the most out of Form"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod."
          }
          path={"/Contact"}
          title={"Contact Us"}
          imagePath={"Images/ContactGroup.svg"}
          altMsg={"Contact Us"}
          isHero={false}
        />
      </main>
      <Footer />
    </>
  );
};

export default Home;
