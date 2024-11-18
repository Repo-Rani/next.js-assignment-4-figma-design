import React from "react";
import FeaturedWorksBox from "./FeaturedWorksBox";

const FeaturedWork = () => {
  return (
    <section className="w-[919px] h-[934.2px] absolute xxl:left-[237px] left-[133px] xxl:top-[1246px] top-[1380px] xl:left-[242px] xl:top-[1246px]">
      <h1 className="w-[155px] h-[32px]  text-[22px] leading-[32.31px] text-[#000000] font-heebo font-medium mb-6">
        Featured Works
      </h1>
      <div>
        <div>
          <FeaturedWorksBox property={1310} href="/Rectangle 30.svg" />
        </div>
        <div>
          <FeaturedWorksBox property={1601} href="/Rectangle 32.svg" />
        </div>
        <div>
          <FeaturedWorksBox property={1892} href="/Rectangle 34.svg" />
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
