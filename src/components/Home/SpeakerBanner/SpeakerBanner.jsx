import React from "react";
import jblspeaker from "../../../assets/jbl speaker.png";
import { Link } from "react-router-dom";
const SpeakerBanner = () => {
  return (
    <div className="bg-black max-w-[1170px] mx-auto mt-32 mb-14 flex justify-between py-20 px-14">
      <div className="">
        <p className="text-[#0F6] font-semibold">Categories</p>
        <h2 className="text-5xl text-white font-semibold leading-[60px] tracking-wide my-8">
          Enhance Your <br /> Music Experience
        </h2>
        <div className="flex gap-6">
          <div className="rounded-full w-16 h-16 bg-white text-center font-semibold py-[8px] ">
            23 
            <br />
            <span className="font-normal text-xs">Hours</span>
            
          </div>
          <div className="rounded-full w-16 h-16 bg-white text-center font-semibold py-[8px] ">
            05 <br />
            <span className="font-normal text-xs">Days</span>
          </div>
          <div className="rounded-full w-16 h-16 bg-white text-center font-semibold py-[8px] ">
            59 <br />
            <span className="font-normal text-xs">Minutes</span>
          </div>
          <div className="rounded-full w-16 h-16 bg-white text-center font-semibold py-[8px] ">
            35 <br />
            <span className="font-normal text-xs">Seconds</span>
          </div>
        </div>
        <button className="mt-10">
          <Link className="py-[14px] px-[15px] text-white font-medium rounded bg-[#0F6]">
            Buy Now!
          </Link>
        </button>
      </div>
      <div className="p-4 relative">
        <img src={jblspeaker} alt="" />
        <div className="absolute w-[504px] h-[504px] rounded-full bg-[#D9D9D9] top-0 left-8 opacity-30  blur-3xl"></div>
      </div>
    </div>
  );
};

export default SpeakerBanner;
