import React from 'react';
import aa from '../../assets/aa.jpg'
import Transitions from '../../Hooks/Transition';
import './Home.css'

const Hero = () => {
    return (
        <>
            <Transitions>
                <div className='lg:flex grid lg:grid-cols-2 '>
                    <div className='p-4 flex justify-items-center items-center  lg:w-1/2  '>


                        <div className='mx-auto lg:ml-48 text-center lg:text-start'>
                            {/* ---------------------------------------------------------------------------------------- */}
                            <h1 className='text-3xl'>Hi  </h1>

                            <div className='main'>
                                <div><h1 className=''>I'm</h1></div>

                                <ul className='option'>
                                    <li><span>Dr. Most. Samiah Sultana</span></li>
                                    <li><span>an intern doctor at SMMAMC </span></li>
                                </ul>


                            </div>


                        </div>
                    </div>
                    <div className='grid justify-items-center'>
                        <div className='hidden lg:block'><img src={aa} alt="" width={390} className=" " /></div>
                        <div className='block lg:hidden'><img src={aa} alt="" width={390} className=" " /></div>

                    </div>
                </div>
            </Transitions>
        </>
    );
};

export default Hero;