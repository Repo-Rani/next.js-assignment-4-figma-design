import React from "react";
import { FeaturedWorksProps } from "../../types/type";
import Image from "next/image";

const FeaturedWorksBox = ({ href, property }: FeaturedWorksProps) => {
  return (
    <div>
      <div className={`relative top-${property}px`}>
        <Image src={href} alt="dashboard image" width={246} height={180} />
      </div>
      <div className="h-[100px] relative top-[-210px] left-[256px] ">
        <div className="w-[623.46px] h-[272.1px] relative top-[20px] left-[20px]">
          <h2 className="w-[305px] h-[44px] font-heebo font-bold text-[30px] leading-[44.06px] text-[#000000]">
            Designing Dashboards
          </h2>
          <div className="w-[68px] h-[24px] absolute top-[56.1px] left-[1.46px] bg-customPink rounded-[50px]">
            <p className="w-[42px] h-[37px] relative  left-[14.46px] text-[#ffffff]">
              2020
            </p>
          </div>
          <p className="w-[97px] h-[29px] absolute top-[52.1px] left-[92.46px] font-heebo text-[20px] font-normal opacity-[62%] ">
            Dashboard
          </p>
          <p className="w-[622px] h-[170px] absolute top-[102.1px] left-[1.46px] font-heebo font-light text-[18px] leading-[26.44px] text-[#000000]">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedWorksBox;
