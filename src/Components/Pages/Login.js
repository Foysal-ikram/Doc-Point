import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import UseTitle from '../UseTitle/UseTitle';
import { FcGoogle } from "react-icons/fc";
import  { AuthContext } from '../Loader/UserContext';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    UseTitle('Login')

    // precaution: 1. check index.js [wrap app with userContext]
    //             2. first make email login, then google login 


    
    const {user ,google,signin } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const provider = new GoogleAuthProvider();

    const handleSubmit = event=> {
        event.preventDefault() ;
        const form = event.target ;
        const email= form.email.value ;
        
        const password = form.password.value ;
        
        console.log(email,password)

        signin(email,password)
        .then(res => {
           
            const user = res.user ;
            console.log(user)
            navigate('/')
        })


    }
    const google2 = () => {
        google(provider)
        .then(result => {
            console.log(result)
            const user = result.user ;
            navigate('/')
            
        })
        .catch(err=>console.log(err))


    }
    return (
        <div className=''>
            <div className="card  mx-auto max-w-sm shadow-2xl bg-base-100 mt-6">
                <h1 className="text-5xl text-center font-bold">Login </h1>

                <form onSubmit={handleSubmit} className="card-body">


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name='email' placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="text" name='password' placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <a href="#" className= "label-text-alt link link-hover">Forgot password?</a>

                        </label>

                    </div>
                    <div className="form-control mt-2">
                        <input type="submit" className='btn btn-info' value="Login" />
                    </div>
                    <div className='block mt-6'>
                        <button onClick={google2} className='btn btn-outline w-full btn-dark text-3xl my-1'><FcGoogle /></button>

                    </div>
                    <Link to='/register' className="text-center  link-hover">New here? Sign up</Link>

                </form>
            </div>
        </div>

    );
};

export default Login;