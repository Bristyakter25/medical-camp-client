import React from 'react';

import PopularCamps from '../../components/popularCamps/PopularCamps';
import FeedbackDisplay from './FeedbackDisplay';
import Banner from './Banner';
import Methods from './Methods';



const Home = () => {
    return (
      <div>
        

        
       
        <div className='lg:w-3/5 mx-auto'>
        <Banner ></Banner>
            <PopularCamps></PopularCamps>
            <FeedbackDisplay></FeedbackDisplay>
          <Methods></Methods>
        </div>
        </div>
    );
};

export default Home;