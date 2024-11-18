import FeaturedWorks from "@/components/FeaturedWorks";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import RecentPost from "@/components/RecentPost";
import React from "react";

const Home = () => {
  return (
    <div className="w-[1440px] h-[2453px] overflow-x-hidden ">
      <Navbar />
      <Hero />
      <RecentPost />
      <FeaturedWorks />
      <Footer />
    </div>
  );
};

export default Home;
