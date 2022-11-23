import React from 'react';
import './Layout.css';
import { BiPhoneCall } from "react-icons/bi";
import { HiOutlineMailOpen } from "react-icons/hi";

const SkewNav = () => {
    return (
        <div className=' flex justify-center font-sans  max-w-4xl   mx-auto '>
            <div className='grid grid-cols-2'>
                <div className='flex bg-blue-900 nav3 '>
                </div>
                <div className='flex bg-blue-900 nav4 '>
                </div>
            </div>
            <div className='absolute bg-blue-900 text-sm	 text-white top-0 flex'>
                <p className='px-8 text-center flex items-center'><BiPhoneCall/> <span className='mx-2'>+880 1823616258</span></p>
                <p className='flex items-center '> <HiOutlineMailOpen/><span className='px-2'> foysalikram7@gmail.com</span></p>
            </div>


        </div>
    );
};

export default SkewNav;