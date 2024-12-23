import React from "react";
import BannerImg from "../../assets/banner.png";
import arrow from "../../assets/icons arrow-right.png";
import appleIcon from "../../assets/apple-logo.png";
import circleGray from '../../assets/circle gray.png'
import circleRed from '../../assets/circle red.png'
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div className="bg-black">
      <div className=" flex justify-between items-center text-white ml-16">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-6">
            <img src={appleIcon} alt="" />
            <p>iPhone 14 Series</p>
          </div>
          <div>
            <h2 className="font-semibold text-5xl leading-[60px]">
              Up to 10%  <br />off Voucher
            </h2>
            <div className="flex items-center mt-4 gap-2">
              <Link>Shop Now</Link>
              <img src={arrow} alt="" />
            </div>
          </div>
        </div>
        <div>
          <img src={BannerImg} alt="" />
        </div>
      </div>
      <div className="flex justify-center gap-3 pb-2">
        <img src={circleGray} alt="" />
        <img src={circleGray} alt="" />
        <img src={circleRed} alt="" />
        <img src={circleGray} alt="" />
        <img src={circleGray} alt="" />
      </div>
    </div>
  );
};

export default Banner;
