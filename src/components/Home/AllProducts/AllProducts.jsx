import React from "react";
import leftArrow from "../../../assets/Fill With Left Arrow.png";
import rightArrow from "../../../assets/Fill with Right Arrow.png";
import gaming from "../../../assets/gaming console.png";
import keyboard from "../../../assets/keyboard.png";
import monitor from "../../../assets/monitor.png";
import chair from "../../../assets/chair.png";
import heart from "../../../assets/heart small.png";
import eye from "../../../assets/Quick View.png";
import { Link } from "react-router-dom";
const AllProducts = () => {
  return (
    <div className="max-w-[1170px] mx-auto mt-36">
      {/* Top */}
      <div>
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-[#DB4444] w-5 h-10 rounded-md"></div>
          <p className="text-[#DB4444] font-semibold">Today's</p>
        </div>
        {/* flash Sales */}
        <div className="flex justify-between">
          <p className="mt-5 text-4xl font-semibold">Flash Sales</p>
          <div className="flex space-x-9">
            <div>
              Days <br />
              <span className="font-bold text-3xl leading-8">03</span>
            </div>
            <div>
              Hours <br />
              <span className="font-bold text-3xl leading-8">23</span>
            </div>
            <div>
              Minutes <br />
              <span className="font-bold text-3xl leading-8">19</span>
            </div>
            <div>
              Seconds <br />
              <span className="font-bold text-3xl leading-8">56</span>
            </div>
          </div>
          <div className="flex">
            <img src={leftArrow} alt="" />
            <img src={rightArrow} alt="" />
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-4 gap-7 mt-10 mb-14">
        {/* 1 */}
        <div className="card bg-base-100 relative">
          <div className="absolute top-3 left-3 bg-[#DB4444] py-1 px-3 rounded-md text-[#FAFAFA]">
            <p>- 40%</p>
          </div>
          <div className="absolute top-4 right-4 flex flex-col gap-4">
            <img src={heart} alt="" />
            <img src={eye} alt="" />
          </div>
          <figure className="mx-auto my-12 w-[172px] h-[152px]">
            <img src={gaming} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body px-0">
            <h2 className="card-title">HAVIT HV-G92 Gamepad</h2>
            <p>
              $120{" "}
              <span className="opacity-50 ml-3">
                <s>$160</s>
              </span>
            </p>
            <div className="card-actions">
              <div className="rating">
                <input
                  type="radio"
                  name="rating-"
                  className="mask mask-star-2 bg-[#FFAD33]"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-[#FFAD33]"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-[#FFAD33]"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-[#FFAD33]"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-[#FFAD33]"
                  defaultChecked
                />
                (88)
              </div>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className="card bg-base-100 relative">
          <div className="absolute top-3 left-3 bg-[#DB4444] py-1 px-3 rounded-md text-[#FAFAFA]">
            <p>- 35%</p>
          </div>
          <div className="absolute top-4 right-4 flex flex-col gap-4">
            <img src={heart} alt="" />
            <img src={eye} alt="" />
          </div>
          <figure className="mx-auto my-12 w-[172px] h-[152px]">
            <img src={keyboard} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body px-0">
            <h2 className="card-title">AK-900 Wired Keyboard</h2>
            <p>
              $960{" "}
              <span className="opacity-50 ml-3">
                <s>$1166</s>
              </span>
            </p>
            <div className="card-actions">
              <div className="rating">
                <input
                  type="radio"
                  name="rating-"
                  className="mask mask-star-2 bg-[#FFAD33]"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-[#FFAD33]"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-[#FFAD33]"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-[#FFAD33]"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-[#FFAD33]"
                />
                (75)
              </div>
            </div>
          </div>
        </div>
        {/* 3 */}
        <div className="card bg-base-100 relative">
          <div className="absolute top-3 left-3 bg-[#DB4444] py-1 px-3 rounded-md text-[#FAFAFA]">
            <p>- 30%</p>
          </div>
          <div className="absolute top-4 right-4 flex flex-col gap-4">
            <img src={heart} alt="" />
            <img src={eye} alt="" />
          </div>
          <figure className="mx-auto my-12 w-[172px] h-[152px]">
            <img src={monitor} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body px-0">
            <h2 className="card-title">IPS LCD Gaming Monitor</h2>
            <p>
              $370{" "}
              <span className="opacity-50 ml-3">
                <s>$400</s>
              </span>
            </p>
            <div className="card-actions">
              <div className="rating">
                <input
                  type="radio"
                  name="rating-"
                  className="mask mask-star-2 bg-[#FFAD33]"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-[#FFAD33]"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-[#FFAD33]"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-[#FFAD33]"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-[#FFAD33]"
                  defaultChecked
                />
                (99)
              </div>
            </div>
          </div>
        </div>
        {/* 4 */}
        <div className="card bg-base-100 relative">
          <div className="absolute top-3 left-3 bg-[#DB4444] py-1 px-3 rounded-md text-[#FAFAFA]">
            <p>- 25%</p>
          </div>
          <div className="absolute top-4 right-4 flex flex-col gap-4">
            <img src={heart} alt="" />
            <img src={eye} alt="" />
          </div>
          <figure className="mx-auto my-12 w-[172px] h-[152px]">
            <img src={chair} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body px-0">
            <h2 className="card-title">S-Series Comfort Chair </h2>
            <p>
              $375
              <span className="opacity-50 ml-3">
                <s>$400</s>
              </span>
            </p>
            <div className="card-actions">
              <div className="rating">
                <input
                  type="radio"
                  name="rating-"
                  className="mask mask-star-2 bg-[#FFAD33]"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-[#FFAD33]"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-[#FFAD33]"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-[#FFAD33]"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-[#FFAD33]"
                  defaultChecked
                />
                (99)
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* View all Products */}
      <div className="flex justify-center mb-14">
        <Link className="text-[#FAFAFA] bg-[#DB4444] py-4 px-12 rounded">View All Products</Link>
      </div>
      <hr />
    </div>
  );
};

export default AllProducts;
