import React from 'react';

import PopularCamps from '../../components/popularCamps/PopularCamps';
import FeedbackDisplay from './FeedbackDisplay';
import Banner from './Banner';
import Methods from './Methods';
import AboutUs from './AboutUs';
import FAQ from './FAQ';
import WhyChooseUs from './WhyChooseUs';
import UpcomingEvents from './UpcomingEvents';



const Home = () => {
    return (
     
        
        <div >
        <Banner ></Banner>
        <PopularCamps></PopularCamps>
        <FeedbackDisplay></FeedbackDisplay>
        <Methods></Methods>
        <UpcomingEvents></UpcomingEvents>
        <AboutUs></AboutUs>
        <FAQ></FAQ>
        <WhyChooseUs></WhyChooseUs>

        </div>
        
    );
};

export default Home;