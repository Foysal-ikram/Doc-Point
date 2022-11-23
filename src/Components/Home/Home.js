import React from 'react';
import Transitions from '../../Hooks/Transition';
import UseTitle from '../../Hooks/UseTitle';
import ReviewLayout from '../../Review/ReviewLayout';
import Banner from './Banner';
import Hero from './Hero';

const Home = () => {
    UseTitle('Home')
    return (
        <div className='page'>
            <Transitions>
                {/* <Hero></Hero> */}
                <Banner></Banner>
                <ReviewLayout></ReviewLayout>
            </Transitions>
        </div>
    );
};

export default Home;