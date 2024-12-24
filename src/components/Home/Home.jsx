import React from 'react';
import BannerContainer from './BannerPart/BannerContainer';
import AllProducts from './AllProducts/AllProducts';
import Categories from './Categories/Categories';
import BestSelling from './BestSelling/BestSelling';
import OurProducts from './OurProducts/OurProducts';
import SpeakerBanner from './SpeakerBanner/SpeakerBanner';
import NewArrival from './NewArrival/NewArrival';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <BannerContainer></BannerContainer>
            <AllProducts></AllProducts>
            <Categories></Categories>
            <BestSelling></BestSelling>
            <SpeakerBanner></SpeakerBanner>
            <OurProducts></OurProducts>
            <NewArrival></NewArrival>
            <Services></Services>
        </div>
    );
};

export default Home;