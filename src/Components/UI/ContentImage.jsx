import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ContentImage = ({
  heading,
  description,
  path,
  title,
  imagePath,
  altMsg,
  isHero,
  children,
}) => {
  const isDesktops = useSelector((state) => state.window.isDesktop);
  return (
    <section
      className={`${
        isHero
          ? "relative hero-image-one py-[40px] md:pt-[50px] tab:pt-[65px] md:pb-[100px] md:overflow-hidden"
          : children
          ? "bg-[#2929670D] py-[100px] md:pt-[100px] md:pb-[70px] relative"
          : `bg-cover bg-no-repeat ${
              isDesktops ? "background desktop-bg" : "background"
            } ${title === "Know More" ? "py-8" : "pt-[32px] md:pb-0"}`
      } `}
    >
      {isDesktops && isHero && (
        <figure className="absolute top-0 hero-image-two z-[-1] w-full">
          <img src="Images/BgTwo.svg" alt="Hero Image" className="w-full" />
        </figure>
      )}

      <div
        className={`wrapper relative z-40 lg:flex md:justify-between ${
          isDesktops && isHero
            ? "flex flex-col lg:flex-row justify-between items-center md:relative md:z-50 md:items-stretch"
            : `${
                children
                  ? "md:items-start md:flex-col tab:flex-row"
                  : "md:items-center"
              }`
        }`}
      >
        <div
          className={`${
            isDesktops && isHero
              ? "basis-[51%] tab:mt-[95px]"
              : `${
                  children
                    ? "basis-[55%]"
                    : `md:basis-[65%] tab:basis-[50%] ${
                        title === "Know More" ? "mt-[25px]" : ""
                      }`
                }`
          }`}
        >
          <h2
            className={`${
              isHero || children
                ? `text-[#27307D] font-[700] text-[30px] md:text-[52px] md:leading-[64px] leading-[34px] ${
                    isDesktops && isHero
                      ? "banner-desktop-elips elips-commmon before:h-[21px] md:before:bottom-[7%] 2xl:before:bottom-[7%] 2xl:before:left-[72%] xl:before:bottom-[40%] xl:before:left-[42%] md:before:left-[20%] lg:before:left-[29%]"
                      : ""
                  } ${
                    isDesktops && children
                      ? "serving-desktop elips-commmon md:before:h-[17px] 2xl:bottom-[14%] 2xl:before:left-[50%] 2xl:before:translate-x-[-50%] xl:before:bottom-[20%] md:before:bottom-[10%] md:before:left-[25%] "
                      : ""
                  }`
                : `font-[700] text-[30px] text-center text-white  px-[20%] mb-5 md:text-left md:font-[600] md:text-[32px] md:pl-0 ${
                    title === "Know More" ? "leading-[34px]" : "leading-[42px]"
                  }`
            }`}
          >
            {heading}{" "}
            {isHero && !isDesktops && (
              <span
                className={`${
                  !isDesktops
                    ? "banner-mobile-elips elips-commmon before:h-[14px] before:bottom-[16%] small:block inline-block small:before:left-[-26%] small:before:transform-none"
                    : ""
                }`}
              >
                Accounting
              </span>
            )}
            {children && !isDesktops ? (
              <span
                className={`${
                  !isDesktops
                    ? "elips-common serving-desktop serving-mobile before:h-[14px] before:bottom-[10%]"
                    : ""
                }`}
              >
                we believe in...
              </span>
            ) : null}
          </h2>
          <p
            className={`${
              isHero || children
                ? `font-[400] text-[14px] leading-[21px] text-[#696969] pr-[10%] md:pr-[14%] ${
                    children ? "md:pr-[12%]" : ""
                  }'} mt-[15px]  ${
                    isDesktops ? "text-[20px] leading-[28px]" : ""
                  }`
                : `font-[400] text-[14px] leading-[21px] text-center text-white px-[20%] md:text-left md:text-[16px] md:leading-[20px] md:pl-0 ${
                    title === "Know More" ? "pr-[27%]" : "pr-[17%]"
                  }`
            }`}
          >
            {description}
          </p>
          {children}
          <Link
            to={path}
            title={title}
            className={` ${
              isHero
                ? "bg-[#27307D] text-white text-center py-[18px] px-[10%] font-[600] text-[14px] leading-[17px] mt-[30px] inline-block rounded-[4px] uppercase mb-[60px] md:mb-0 lg:hover:bg-transparent border-[2px] border-[transparent] transition-all ease-in-out duration-[.5s] lg:border-[#27307D] lg:hover:text-[#27307D]"
                : children
                ? "font-[600] text-[14px] leading-[17px] text-center text-[#27307D] border-[1px] rounded-[4px] border-[#27307D] py-4 px-[5%] inline-block mt-5 mb-11 md:text-[16px] md:leading-[19px] md:px-[3%] lg:hover:text-white lg:hover:bg-[#27307D] transition-all ease-in-out duration-[.5s]  md:pt-[10px] md:mt-[15px] tab:mt-0 xl:w-[24%] medium::w-[21%] md:py-2"
                : `font-[600] text-[14px] leading-[17px] text-center w-[65%] mobile:w-[50%] mx-auto block rounded-[4px] border-2 border-[#F6C648] py-[18px] mobile:py-[22px] mt-6 mb-[95px]  ${
                    title === "Know More"
                      ? "text-[#F6C648] bg-transparent md:py-[6px] md:w-[25%] tab:w-[21%] md:mx-0 lg:hover:text-[#27307D] lg:hover:bg-[#F6C648] transition-all ease-in-out duration-[.5s] md:mb-0"
                      : "bg-[#F6C648] text-[#27307D] shadow-[0px_4px_4px_0px_rgba(0,121,191,0.16)] md:w-[25%] lg:w-[22%] md:mx-0 md:mb-8 tab:mb-0 md:py-[13px] lg:hover:text-[#F6C648] lg:hover:bg-[#27307D] transition-all ease-in-out duration-[.5s]"
                  }`
            }`}
          >
            {title}
          </Link>
        </div>
        <figure
          className={`${
            isDesktops && isHero
              ? "basis-[48%] md:mt-20 tab:mt-0"
              : `${
                  children
                    ? "tab:absolute tab:top-[50%] tab:translate-y-[-50%] tab:right-[5%] tab:w-[47%]"
                    : "basis-[40%]"
                }`
          }`}
        >
          <img src={imagePath} alt={altMsg} className="w-full" />
        </figure>
      </div>
    </section>
  );
};

export default ContentImage;
