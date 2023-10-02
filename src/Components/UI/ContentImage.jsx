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
          ? "relative hero-image-one py-[40px]"
          : children ? 'bg-[#2929670D] py-[85px]' : `bg-cover bg-no-repeat opacity-[55%]  ${
              title === "Know More" ? "py-8" : "pt-[32px]"
            }  background`
      } `}
    >
      {/* {isDesktops && isHero &&  (
        <>
          <figure className="absolute top-0 hero-image-one">
            <img src="Images/Bg.svg" alt="Hero Image" />
          </figure>
          <figure className="absolute top-0 hero-image-two">
            <img src="Images/BgTwo.svg" alt="Hero Image" />
          </figure>
        </>
      )} */}

      <div className={`wrapper ${isDesktops && isHero ? 'flex justify-between items-center' : ''}`}>
        <div className={`${isDesktops && isHero ? 'basis-[44%]': ''}`}>
          <h2
            className={`${
              isHero || children
                ? "text-[#27307D] font-[700] text-[30px] md:text-[52px] md:leading-[64px] leading-[34px]"
                : `font-[700] text-[30px] text-center text-white  px-[20%] mb-5 ${
                    title === "Know More" ? "leading-[34px]" : "leading-[42px]"
                  }`
            }`}
          >
            {heading} {isHero && !isDesktops && <span>Accounting</span>}
          </h2>
          <p
            className={`${
              isHero || children
                ? `font-[400] text-[14px] leading-[21px] text-[#696969] pr-[10%] mt-[15px] ${isDesktops ? 'text-[20px] leading-[28px]': ''}`
                : "font-[400] text-[14px] leading-[21px] text-center text-white px-[20%]"
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
                ? "bg-[#27307D] text-white text-center py-[18px] px-[10%] font-[600] text-[14px] leading-[17px] mt-[30px] inline-block rounded-[4px] uppercase mb-[60px]"
                : children ? 'font-[600] text-[14px] leading-[17px] text-center text-[#27307D] border-[1px] rounded-[4px] border-[#27307D] py-4 px-[5%] inline-block mt-5 mb-11' : `font-[600] text-[14px] leading-[17px] text-center w-[65%] mobile:w-[50%] mx-auto block rounded-[4px] border-2 border-[#F6C648] py-[18px] mobile:py-[22px] mt-6 mb-[95px] ${
                    title === "Know More"
                      ? "text-[#F6C648] bg-transparent"
                      : "bg-[#F6C648] text-[#27307D] shadow-[0px_4px_4px_0px_rgba(0,121,191,0.16)]"
                  }`
            }`}
          >
            {title}
          </Link>
        </div>
        <figure className={`${isDesktops && isHero ? 'basis-[48%] max-h-[578px] h-full': ''}`}>
          <img src={imagePath} alt={altMsg} className="w-full h-full" />
        </figure>
      </div>
    </section>
  );
};

export default ContentImage;
