import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="w-[1440px] h-[800px">
      <div className="w-[1030px] h-[308px] absolute top-[246px] left-[231px] flex flex-row">
        <div className="w-[521px] h-[305px]">
          <h1 className="font-heebo font-black text-[48px] leading-[61px] tracking-wide-[2px] text-customBlue">
            Hi, I am John, <br />
            Creative Technologist
          </h1>

          <p className="w-[497px] h-[66px] font-heebo font-normal text-[16px] leading-[23.5px] mt-2">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <button
            className="w-[205px] h-[50px] rounded-sm bg-customPink font-heebo font-medium text-[18px] leading-[26.44px] hover:bg-customBlue transition-all duration-300 ease-in-out mt-6 text-white"
            style={{ boxShadow: "0px 4px 4px 0px #4141418A" }}
          >
            Download Resume
          </button>
        </div>

        <div className=" relative left-[230px] ">
          <Image
            src="/hero-image.svg"
            alt="hero image"
            width={298}
            height={308}
            className="w-[298px] h-[308px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
