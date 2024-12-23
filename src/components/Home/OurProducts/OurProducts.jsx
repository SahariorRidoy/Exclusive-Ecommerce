import React from "react";
import leftArrow from "../../../assets/Fill With Left Arrow.png";
import rightArrow from "../../../assets/Fill with Right Arrow.png";

import shirt from "../../../assets/shirt.png";
import bag from "../../../assets/bag 1.png";
import cooler from "../../../assets/cooler.png";
import table from "../../../assets/table.png";
import dogfood from "../../../assets/dog food.png";
import dslrcamera from "../../../assets/dslr camera.png";
import laptop from "../../../assets/laptop.png";
import curology from "../../../assets/curology.png";

import heart from "../../../assets/heart small.png";
import eye from "../../../assets/Quick View.png";
import { Link } from "react-router-dom";
const OurProducts = () => {
  return (
    <div className="max-w-[1170px] mx-auto mt-20 mb-14">
      {/* Top */}
      <div className="mb-14">
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-[#DB4444] w-5 h-10 rounded-md"></div>
          <p className="text-[#DB4444] font-semibold">Our Products</p>
        </div>
        {/* flash Sales */}
        <div className="flex justify-between">
          <p className="mt-5 text-4xl font-semibold">Explore Our Products</p>

          <div className="flex">
            <img src={leftArrow} alt="" />
            <img src={rightArrow} alt="" />
          </div>
        </div>
      </div>

      {/* Cards   */}
      <div className="grid grid-cols-4 gap-7 mt-10 mb-14">
        {/* 1 */}
        <div className="card bg-base-100 relative">
          <div className="absolute top-4 right-4 flex flex-col gap-4">
            <img src={heart} alt="" />
            <img src={eye} alt="" />
          </div>
          <figure className="mx-auto my-12 w-[172px] h-[152px]">
            <img src={dogfood} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body px-0">
            <h2 className="card-title">Breed Dry Dog Food</h2>
            <p>
              $260
              <span className="opacity-50 ml-">
                <s>$360</s>
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
                (65)
              </div>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className="card bg-base-100 relative">
          <div className="absolute top-4 right-4 flex flex-col gap-4">
            <img src={heart} alt="" />
            <img src={eye} alt="" />
          </div>
          <figure className="mx-auto my-12 w-[172px] h-[152px]">
            <img src={dslrcamera} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body px-0">
            <h2 className="card-title">CANON EOS DSLR Camera</h2>
            <p>
              $960
              <span className="opacity-50 ml-">
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
                (65)
              </div>
            </div>
          </div>
        </div>
        {/* 3 */}
        <div className="card bg-base-100 relative">
          <div className="absolute top-4 right-4 flex flex-col gap-4">
            <img src={heart} alt="" />
            <img src={eye} alt="" />
          </div>
          <figure className="mx-auto my-12 w-[172px] h-[152px]">
            <img src={laptop} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body px-0">
            <h2 className="card-title">ASUS FHD Gaming Laptop</h2>
            <p>
              $160
              <span className="opacity-50 ml-">
                <s>$170</s>
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
                (65)
              </div>
            </div>
          </div>
        </div>
        {/* 4 */}
        <div className="card bg-base-100 relative">
          <div className="absolute top-4 right-4 flex flex-col gap-4">
            <img src={heart} alt="" />
            <img src={eye} alt="" />
          </div>
          <figure className="mx-auto my-12 w-[172px] h-[152px]">
            <img src={curology} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body px-0">
            <h2 className="card-title">Curology Product Set </h2>
            <p>$360</p>
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
                (65)
              </div>
            </div>
          </div>
        </div>
   
        {/* 5 */}
        <div className="card bg-base-100 relative">
          <div className="absolute top-4 right-4 flex flex-col gap-4">
            <img src={heart} alt="" />
            <img src={eye} alt="" />
          </div>
          <figure className="mx-auto my-12 w-[172px] h-[152px]">
            <img src={dogfood} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body px-0">
            <h2 className="card-title">Breed Dry Dog Food</h2>
            <p>
              $260
              <span className="opacity-50 ml-">
                <s>$360</s>
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
                (65)
              </div>
            </div>
          </div>
        </div>
        {/* 6 */}
        <div className="card bg-base-100 relative">
          <div className="absolute top-4 right-4 flex flex-col gap-4">
            <img src={heart} alt="" />
            <img src={eye} alt="" />
          </div>
          <figure className="mx-auto my-12 w-[172px] h-[152px]">
            <img src={dslrcamera} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body px-0">
            <h2 className="card-title">CANON EOS DSLR Camera</h2>
            <p>
              $960
              <span className="opacity-50 ml-">
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
                (65)
              </div>
            </div>
          </div>
        </div>
        {/* 7 */}
        <div className="card bg-base-100 relative">
          <div className="absolute top-4 right-4 flex flex-col gap-4">
            <img src={heart} alt="" />
            <img src={eye} alt="" />
          </div>
          <figure className="mx-auto my-12 w-[172px] h-[152px]">
            <img src={laptop} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body px-0">
            <h2 className="card-title">ASUS FHD Gaming Laptop</h2>
            <p>
              $160
              <span className="opacity-50 ml-">
                <s>$170</s>
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
                (65)
              </div>
            </div>
          </div>
        </div>
        {/* 8 */}
        <div className="card bg-base-100 relative">
          <div className="absolute top-4 right-4 flex flex-col gap-4">
            <img src={heart} alt="" />
            <img src={eye} alt="" />
          </div>
          <figure className="mx-auto my-12 w-[172px] h-[152px]">
            <img src={curology} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body px-0">
            <h2 className="card-title">Curology Product Set </h2>
            <p>$360</p>
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
                (65)
              </div>
            </div>
          </div>
        </div>
   
      </div>
      <div className="flex justify-center mb-14">
        <Link className="text-[#FAFAFA] bg-[#DB4444] py-4 px-12 rounded">View All Products</Link>
      </div>
    </div>
  );
};

export default OurProducts;
