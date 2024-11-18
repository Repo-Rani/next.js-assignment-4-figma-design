import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-[1440px] h-[243px] absolute top-[2239px]">
      <div className="w-[279px] h-[30px] absolute  left-[578px] mt-[4rem] flex flex-row gap-x-10">
        <Image src="/fb.svg" alt="fb-image" width={30} height={30} />
        <Image src="/instagram.svg" alt="insta-image" width={30} height={30} />
        <Image src="/twitter.svg" alt="twitter-image" width={30} height={30} />
        <Image src="/Linkedin.svg" alt="linkedin-image" width={30} height={30} />
      </div>

      <div className="w-[354px] h-[32px] relative  top-[130px] left-[543px]">
        <p
          className="font-heebo font-medium text-[22px] leading-[32.31px] text-black;
"
        >
          Copyright ©2020 All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
