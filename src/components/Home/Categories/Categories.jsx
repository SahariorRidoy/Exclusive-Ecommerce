import React from "react";
import leftArrow from "../../../assets/Fill With Left Arrow.png";
import rightArrow from "../../../assets/Fill with Right Arrow.png";
import phone from "../../../assets/Category-CellPhone.png";
import computer from "../../../assets/Category-Computer.png";
import smartwatch from "../../../assets/Category-SmartWatch.png";
import camera from "../../../assets/Category-Camera.png";
import headphones from "../../../assets/Category-Headphone.png";
import gaming from "../../../assets/Category-Gamepad.png";
const Categories = () => {
  return (
    <div className="max-w-[1170px] mx-auto mt-20 mb-14">
      {/* Top */}
      <div className="mb-14">
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-[#DB4444] w-5 h-10 rounded-md"></div>
          <p className="text-[#DB4444] font-semibold">Categories</p>
        </div>
        {/* flash Sales */}
        <div className="flex justify-between">
          <p className="mt-5 text-4xl font-semibold">Browse By Category</p>

          <div className="flex">
            <img src={leftArrow} alt="" />
            <img src={rightArrow} alt="" />
          </div>
        </div>
      </div>

      {/* Category image card */}
      <div className="flex justify-between gap-7">
        <div className="flex flex-col justify-center items-center py-6 px-14 border rounded border-gray-400">
          <img className="" src={phone} alt="" />
          <p>Phones</p>
        </div>
        <div className="flex flex-col justify-center items-center py-6 px-14 border rounded border-gray-400">
          <img className="" src={computer} alt="" />
          <p>Phones</p>
        </div>
        <div className="flex flex-col justify-center items-center py-6 px-14 border rounded border-gray-400">
          <img className="" src={smartwatch} alt="" />
          <p>Phones</p>
        </div>
        <div className="flex flex-col justify-center items-center py-6 px-14 border rounded border-gray-400 text-[#FAFAFA] bg-[#DB4444]">
          <img className="" src={camera} alt="" />
          <p>Phones</p>
        </div>
        <div className="flex flex-col justify-center items-center py-6 px-14 border rounded border-gray-400">
          <img className="" src={headphones} alt="" />
          <p>Phones</p>
        </div>
        <div className="flex flex-col justify-center items-center py-6 px-14 border rounded border-gray-400">
          <img className="" src={gaming} alt="" />
          <p>Phones</p>
        </div>
      </div>
      
    </div>
  );
};

export default Categories;
