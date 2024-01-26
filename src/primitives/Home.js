import Link from "react-scroll/modules/components/Link";

import { TypeAnimation } from "react-type-animation";

import Stars from "./Stars";

import { HiArrowNarrowRight } from "react-icons/hi";

import ProfilePicture from "../assets/images/profilePic.JPG";

import content from "./content";
const homeSection = content.homeSection;
const Home = () => {
  const pictureStyle = {
    background: `url(${ProfilePicture})`,
  };

  return (
    <>
      <Stars />
      <section
        className="w-full flex justify-center align-center flex-col pt-16 md:pt-20 min-h-screen lg:pb-16 relative bg-transparent shadow-lg shadow-[#282A3A] text-theme-white"
        name="home"
      >
        <div className="w-full max-w-[900px] flex flex-col justify-center mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row-reverse align-center justify-center">
            {/* Profile Picture */}
            <div
              className="w-56 h-56 md:w-80 md:h-80 border-2 md:border-[3px] animate-morph border-theme-white flex justify-center items-center m-auto md:ml-auto md:my-auto transition-all duration-[1s] bg-center bg-no-repeat bg-cover border-3 border-solid relative ease-in-out"
              style={pictureStyle}
            ></div>
            <div>
              {/* Introduction */}
              <div className="flex flex-col md:flex-row items-start justify-between mb-6">
                <div className="mt-4 md:mt-0 mx-auto md:mx-0">
                  <h1 className="flex items-center gap-2 text-2xl sm:text-3xl 2xl:text-4xl font-bold after:content-[''] after:w-1.5 after:h-14 after:bg-theme-blue-100 after:animate-cursorBlink">
                    {homeSection.intro}
                  </h1>
                  <h2 className="text-base sm:text-lg mb-3">
                    {homeSection.welcome}
                  </h2>
                  <div className="text-base sm:text-xl 2xl:text-2xl flex items-center justify-start md:mt-5">
                    <p>{homeSection.smallDescription} </p>
                    <span className="text-3xl sm:text-4xl 2xl:text-5xl text-theme-blue-50 ml-1 md:ml-2 md:mr-1">
                      [
                    </span>
                    <div className="text-lg md:text-xl 2xl:text-2xl font-medium">
                      <TypeAnimation
                        cursor={false}
                        sequence={[
                          `${homeSection.animatedTexts.textOne}`,
                          3000,
                          `${homeSection.animatedTexts.textTwo}`,
                          3000,
                          `${homeSection.animatedTexts.textThree}`,
                          3000,
                          `${homeSection.animatedTexts.textFour}`,
                          3000,
                          `${homeSection.animatedTexts.textFive}`,
                          3000,
                          `${homeSection.animatedTexts.textSix}`,
                          3000,
                        ]}
                        wrapper="span"
                        speed="45"
                        repeat={Infinity}
                      />
                    </div>
                    <span className="text-3xl sm:text-4xl 2xl:text-5xl text-theme-blue-50 sm:ml-1">
                      ]
                    </span>
                  </div>
                </div>
              </div>
              {/* Description */}
              <p className="tracking-wide w-[274.63px] sm:w-[339.78px] md:w-[400px] max-w-[500px] text-base sm:text-lg 2xl:text-xl mx-auto">
                {homeSection.description}
              </p>

              {/* Buttons */}
              <div className="md:mx-0 w-full flex justify-center md:justify-start items-center mt-6 text-theme-white text-sm sm:text-base">
                <Link to="works" smooth={true} duration={600}>
                  <button className="w-28 sm:w-32 2xl:w-32 h-12 flex justify-center items-center rounded bg-transparent mr-4 md:mr-7 border-2 hover:text-white active:text-white hover:bg-theme-blue-50 active:bg-theme-blue-50 hover:border-theme-blue-50 active:border-theme-blue-50 duration-200 group font-medium">
                    {homeSection.buttons.work}
                    <span className="group-hover:rotate-90 group-active:rotate-90 duration-300">
                      <HiArrowNarrowRight className="ml-1" />
                    </span>
                  </button>
                </Link>
                <Link to="contact" smooth={true} duration={600}>
                  <button className="w-24 2xl:w-28 h-12 flex justify-center items-center rounded bg-theme-blue-50 hover:bg-theme-blue-100 active:bg-theme-blue-100 hover:text-white active:text-white duration-200 font-medium">
                    {homeSection.buttons.hire}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
