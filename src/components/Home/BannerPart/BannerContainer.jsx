import React from "react";
import Category from "./Category";
import Banner from "./Banner";

const BannerContainer = () => {
  return (
    <div className="max-w-[1170px] mx-auto grid grid-cols-4 mt-10">
      <div className="col-span-1 border-r  border-r-slate-300 mr-11">
        <Category></Category> 
        
      </div>

      <div className="col-span-3">
        {" "}
        <Banner></Banner>
      </div>
    </div>
  );
};

export default BannerContainer;
