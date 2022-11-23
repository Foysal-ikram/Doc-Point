import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const SideNav = () => {
    return (
        <div className=''>
            <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open </label>

            <div className="drawer drawer-mobile  sticky ">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                {/* <div className="drawer-content flex flex-col items-center justify-center"> */}

                <div className="drawer-side min-h-screen ">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className=" p-4  bg-sky-400	text-base-content  list2">


                        <li>
                            <Link to="/dashboard/users" >
                                <button className=' rounded-md text-start text-xl w-full py-2 '>All Users</button>
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/appointment" >
                                <button className=' rounded-md text-start text-xl w-full py-2 '>All Appointment</button>
                            </Link>
                        </li>
                        <li>
                            <Link to='/dashboard/doctors'>
                                <button className='text-xl text-start rounded-md w-full py-2 '>All Users</button>
                            </Link>
                        </li>
                        <li>
                            <Link to='/dashboard/admin'><button className='text-xl text-start  rounded-md w-full py-2 '>Sorry</button>
                            </Link>
                        </li>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default SideNav; <Link>All Appointments</Link>