import React from 'react';
import BannerContainer from './BannerPart/BannerContainer';
import AllProducts from './AllProducts/AllProducts';
import Categories from './Categories/Categories';
import BestSelling from './BestSelling/BestSelling';
import OurProducts from './OurProducts/OurProducts';

const Home = () => {
    return (
        <div>
            <BannerContainer></BannerContainer>
            <AllProducts></AllProducts>
            <Categories></Categories>
            <BestSelling></BestSelling>
            <OurProducts></OurProducts>
        </div>
    );
};

export default Home;