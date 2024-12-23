import React from 'react';
import BannerContainer from './BannerPart/BannerContainer';
import AllProducts from './AllProducts/AllProducts';

const Home = () => {
    return (
        <div>
            <BannerContainer></BannerContainer>
            <AllProducts></AllProducts>
        </div>
    );
};

export default Home;