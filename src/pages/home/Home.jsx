import React from 'react';

import PopularCamps from '../../components/popularCamps/PopularCamps';
import FeedbackDisplay from './FeedbackDisplay';
import Banner from './Banner';


const Home = () => {
    return (
        <div className='lg:w-3/5 mx-auto'>
           <Banner></Banner>
            <PopularCamps></PopularCamps>
            <FeedbackDisplay></FeedbackDisplay>
        </div>
    );
};

export default Home;