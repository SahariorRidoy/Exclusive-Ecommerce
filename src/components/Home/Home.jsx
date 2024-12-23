import React from 'react';
import BannerContainer from './BannerPart/BannerContainer';
import AllProducts from './AllProducts/AllProducts';
import Categories from './Categories/Categories';

const Home = () => {
    return (
        <div>
            <BannerContainer></BannerContainer>
            <AllProducts></AllProducts>
            <Categories></Categories>
        </div>
    );
};

export default Home;