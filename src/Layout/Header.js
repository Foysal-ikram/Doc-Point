import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Layout.css';
import tw from '../assets/twitter.png';
import li from '../assets/linkedin.png';
import fb from '../assets/facebook.png';
import { AuthContext } from '../Components/Loader/UserContext';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    console.log(user)

    const logOut2 = () => {
        logOut()
            .then(result => { })
            .catch(error => console.error(error))
    }

    const menue = <React.Fragment>
        <li><Link to={'/'} className='font-font-medium nav2 mx-1 rounded-md text-xl'>Home</Link></li>
        <li><Link to={'/about'} className='font-font-medium nav2 mx-1 rounded-md text-xl'>About</Link></li>
        <li><Link to={'/contact'} className='font-font-medium nav2 mx-1 rounded-md text-xl'>Contact</Link></li>






        {user?.uid ?
                       
                <>
                <li><button onClick={logOut2} className='font-font-medium nav2 mx-1 rounded-md text-xl'>Sign out</button></li> 
                <li><Link to={'/myappointment'} className='font-font-medium nav2 mx-1 rounded-md text-xl'>My Appointment</Link></li>


                </>
                :

                    <>
                    <li><Link to={'/login'} className='font-font-medium nav2 mx-1 rounded-md text-xl'>Login</Link></li>
                    <li><Link to={'/register'} className='font-font-medium nav2 mx-1 rounded-md text-xl'>Signup</Link></li>
                    </>
        }




    </React.Fragment >



    return (
        <div className="navbar border-b-2 border-sky-500 bg-base-100 lg:pl-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="min-h-screen	 menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                        {menue}

                    </ul>
                </div>
                <a href='/' className="text-2xl"> <span className='font-medium text-black-400	'>Doc</span><span className='text-fuchsia-600	'>Point</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">

                    {menue}
                </ul>
            </div>
            <div className="navbar-end lg:mr-40">
                <a href='https://www.facebook.com/foysal.ikram' target="_blank" rel="noopener noreferrer"><img src={fb} alt="" className=' icon' width={30} /></a>
                <a href='https://twitter.com/foysal_ikram' target="_blank" rel="noopener noreferrer"><img src={tw} alt="" className='mx-4 rounded icon' width={30} /></a>
                <a href='https://www.linkedin.com/in/md-foysal-ikram-610b1b152/' target="_blank" rel="noopener noreferrer"><img src={li} alt="" className='icon' width={30} /></a>
            </div>
        </div>
    );
};

export default Header;


