import React from "react";
import playstation from "../../../assets/playstation.png";
import womanhat from "../../../assets/woman-hat.png";
import speaker from "../../../assets/speakers.png";
import gucci from "../../../assets/gucci perfume.png";
const NewArrival = () => {
  return (
    <div className="max-w-[1170px] mx-auto mt-32 mb-14">
      {/* Top */}
      <div className="mb-14">
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-[#DB4444] w-5 h-10 rounded-md"></div>
          <p className="text-[#DB4444] font-semibold">Featured</p>
        </div>
        {/* flash Sales */}
        <div className="flex justify-between">
          <p className="mt-5 text-4xl font-semibold">New Arrival</p>

          <div className="flex"></div>
        </div>
      </div>
      {/* Image and details */}
      <div className="flex justify-between gap-8">
        <div className="bg-black px-7 pt-24 rounded relative">
          <img src={playstation} alt="" />
          <div className="absolute bottom-8 left-8 text-[#FAFAFA]">
            <h3 className="text-2xl font-semibold">PlayStation 5</h3>
            <p className="text-sm my-4 leading-5">Black and White version of the PS5 <br /> coming out on sale.</p>
            <button className="underline font-medium">Shop Now </button>
          </div>
        </div>

        <div>
          <div className="bg-[#0D0D0D] pl-36 mb-8 rounded relative">
            <img src={womanhat} alt="" />
            <div className="absolute bottom-6 left-6 text-[#FAFAFA]">
            <h3 className="text-2xl font-semibold">Women’s Collections</h3>
            <p className="text-sm my-4 leading-5">Featured woman collections that give you another vibe.<br /> coming out on sale.</p>
            <button className="underline font-medium">Shop Now </button>
          </div>
          </div>
          <div className="flex justify-between gap-8">
            <div className="px-10 py-8 bg-[#0D0D0D] rounded relative">
              <img src={speaker} alt="" />
              <div className="absolute bottom-6 left-6 text-[#FAFAFA]">
            <h3 className="text-2xl font-semibold">Speakers</h3>
            <p className="text-sm my-4 leading-5">Amazon wireless speakers</p>
            <button className="underline font-medium">Shop Now </button>
          </div>
            </div>
            <div className="px-10 py-8 bg-[#0D0D0D] rounded relative">
              <img src={gucci} alt="" />
              <div className="absolute bottom-6 left-6 text-[#FAFAFA]">
            <h3 className="text-2xl font-semibold">Perfume</h3>
            <p className="text-sm my-4 leading-5">GUCCI INTENSE OUD EDP</p>
            <button className="underline font-medium">Shop Now </button>
          </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
