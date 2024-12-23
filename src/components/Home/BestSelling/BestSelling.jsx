import React from "react";
import shirt from "../../../assets/shirt.png";
import bag from "../../../assets/bag 1.png";
import cooler from "../../../assets/cooler.png";
import table from "../../../assets/table.png";
import heart from "../../../assets/heart small.png";
import eye from "../../../assets/Quick View.png";
import { Link } from "react-router-dom";
const BestSelling = () => {
  return (
    
    <div className="max-w-[1170px] mx-auto  mb-14">
        <hr />
      <div className="mt-20">
        {/* Top */}
      <div className="mb-14">
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-[#DB4444] w-5 h-10 rounded-md"></div>
          <p className="text-[#DB4444] font-semibold">This Month</p>
        </div>
        {/* flash Sales */}
        <div className="flex justify-between">
          <p className="mt-5 text-4xl font-semibold">Best Selling Products</p>

          <div className="flex justify-center mb-14">
        <Link className="text-[#FAFAFA] bg-[#DB4444] py-4 px-12 rounded">View All</Link>
      </div>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-4 gap-7 mt-10 mb-14">
        {/* 1 */}
        <div className="card bg-base-100 relative">
          
          <div className="absolute top-4 right-4 flex flex-col gap-4">
            <img src={heart} alt="" />
            <img src={eye} alt="" />
          </div>
          <figure className="mx-auto my-12 w-[172px] h-[152px]">
            <img src={shirt} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body px-0">
            <h2 className="card-title">The north coat</h2>
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
            <img src={bag} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body px-0">
            <h2 className="card-title">Gucci duffle bag</h2>
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
            <img src={cooler} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body px-0">
            <h2 className="card-title">RGB liquid CPU Cooler</h2>
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
            <img src={table} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body px-0">
            <h2 className="card-title">S-Series Comfort Chair </h2>
            <p>
              $360
             
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
      </div>
      </div>
    </div>
   
  );
};

export default BestSelling;
