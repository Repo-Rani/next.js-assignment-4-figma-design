import React from "react";
import { RecentPostCard } from "./RecentPostCard";

const RecentPost = () => {
  return (
    <section className="w-[1440px] h-[502px] absolute top-[665px] bg-recentBackground">
      <h1 className="w-[120px] h-[32px] relative top-[26px] left-[237px] font-heebo font-medium size-[22px] leading-[32.31px] text-[#000000] mb-[1rem]">
        Recent Post
      </h1>

      <h1 className="w-[77px] h-[32px] relative top-[-22px] left-[1180px] font-heebo font-medium size-[22px] leading-[32.31px] text-customPink">
        View all
      </h1>
      <div className="w-[483px] h-[356px] absolute left-[238px] bg-white">
        <RecentPostCard />
      </div>
      <div className="w-[483px] h-[356px] absolute top-[78px] left-[763px] bg-white">
        <RecentPostCard />
      </div>
    </section>
  );
};

export default RecentPost;
