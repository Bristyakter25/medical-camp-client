import React from 'react';

import PopularCamps from '../../components/popularCamps/PopularCamps';
import FeedbackDisplay from './FeedbackDisplay';


const Home = () => {
    return (
        <div className='lg:w-3/5 mx-auto'>
           
            <PopularCamps></PopularCamps>
            <FeedbackDisplay></FeedbackDisplay>
        </div>
    );
};

export default Home;