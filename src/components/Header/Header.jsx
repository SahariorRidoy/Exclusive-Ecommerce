import React from "react";
import dropdown from "../../assets/DropDown.png";
const Header = () => {
  return (
    <div className="bg-black h-12 flex justify-evenly items-center">
      <div></div>
      <div>
        <p className="text-white text-sm leading-5">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
          <span className="underline font-semibold leading-6 ml-1">
            ShopNow
          </span>
        </p>{" "}
      </div>
      <div className="flex justify-between items-center">
        <p className="text-white text-sm leading-5">English </p>
        <img src={dropdown} alt="" />
      </div>
    </div>
  );
};

export default Header;
