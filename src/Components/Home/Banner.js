import React from 'react';
import chair from '../../assets/chair.png'
import './Home.css';
import { AiOutlineClockCircle } from "react-icons/ai";
import { FiMapPin } from "react-icons/fi";
import { BiPhoneCall } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';



const Banner = () => {
    const navigate = useNavigate() ;



    return (
        <div className='bg2 lg:py-2  border-t-2	border-cyan-500	'>


            <div className=' flex flex-col-reverse lg:grid  grid-col lg:grid-cols-2  lg:pr-8 lg:my-8 '>
                <div className='flex text-start items-center '>
                    <div className='lg:ml-20 m-4'>
                        <h1 className='text-3xl mt-4 lg:text-5xl font-bold'> Your New Smile Starts Here</h1>
                        <p className='my-4 text-lg font-sans'>Welcome to our site. You can get any help from us. We will be glad to help you. You can get any help from us. We will be glad to help you.You can get any help from us. We will be glad to help you</p>
                        <button  className='btn btn-accent' onClick={()=>navigate('/appointment')}  >Get an appointment</button>
                    </div>
                </div>
                <div className='grid justify-items-center lg:mr-10'>
                    <div><img src={chair} alt="" className='p-4 ml-auto rounded-md' /></div>
                </div>
            </div>
{/* ------------------------------------------------------------------------------------------------------ */}

<div className=' grid grid-cols-1 lg:grid-cols-3  mx-4 lg:mx-20 gap-4 mt-24'>

    <div className=' rounded-lg flex flex-row bg-gradient-to-r from-teal-400 to-cyan-400 py-8 px-4'>
        <div className="basis-1/4 text-8xl my-auto text-white font-bolder" ><AiOutlineClockCircle/></div>
        <div className='my-auto text-white'>
            <h1 className='text-2xl font-bold p-2 '>Opening Hours</h1>
            <p className='p-2'>Lorem ipsum dolor sit amet as consectetur adipisicing elit</p>
        </div>
    </div>
    <div className=' rounded-lg flex flex-row bg-slate-600 py-8 px-4'>
    <div className="basis-1/4 text-8xl my-auto text-white font-bolder" ><FiMapPin/></div>
        <div className='my-auto text-white'>
            <h1 className='text-2xl font-bold p-2 '>Our Location</h1>
            <p className='p-2'>24 panthapath road <br /> Banani , Dhaka   </p>
        </div>
    </div>
    <div className=' rounded-lg flex flex-row bg-gradient-to-r from-teal-400 to-cyan-400 py-8 px-4'>
        <div className="basis-1/4 text-8xl my-auto text-white font-bolder" ><BiPhoneCall/></div>
        <div className='my-auto text-white'>
            <h1 className='text-2xl font-bold p-2 '>Contact us now</h1>
            <p className='p-2 font-sans'>+880 1859055605</p>
        </div>
    </div>

   
</div>


        </div>
    );
};

export default Banner;