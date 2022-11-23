import React from 'react';
import Others from './Others';
import SideNav2 from './SideNav2';

const DashBoard = () => {
    return (
        // <div className='flex md:grid md:grid-cols-5 '>
        <div className='flex '>
            <div className='mr-8 self-start sticky top-16 top-16'>
            {/* // <div className='md:col-span-1 self-start sticky top-16 md:col-span-1 z-0	'> */}
                <SideNav2></SideNav2>
            </div>
            <div className='w-full'>
            {/* <div className='md:col-span-4 z-0 relative self-start sticky lg:-ml-20 left-0'> */}
               <Others></Others>
            </div>
        </div>
    );
};

export default DashBoard;