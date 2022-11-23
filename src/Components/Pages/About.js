import React from 'react';
import UseTitle from '../../Hooks/UseTitle';

const About = () => {
    UseTitle('About')
    return (
        <div className=''>
            <div className="card lg:card-side bg-base-100 shadow-xl w-full">
                <figure><img src="https://placeimg.com/400/400/arch" alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">New album is released!</h2>
                    <p>Some Story Behind Us
                        WE HAVE 20 YEARS OF EXPERINCE
                        We handpick the best coaches and health experts from across the country to make sure you get the mostpersonalized health care you deserve between those doctor visits.

                        Our Mission
                        Explain to you how all this mistaken idea of denouncing ut pleasure work praising pain was born and will give.

                        Our Vision
                        Pleasure work praising pain ut was born and will give you can complete design account sed the system.

                        .</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;