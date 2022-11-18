import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Loader/UserContext';
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider } from 'firebase/auth';

const Register = () => {
    const provider = new GoogleAuthProvider() ;
    const navigate = useNavigate() ;
    const {user , createUser, google} = useContext(AuthContext) ;

    const handleSubmit=event=>{
        event.preventDefault() ;
        const form = event.target ;
        const email= form.email.value ;
        
        const password = form.password.value ;
        
        console.log(email,password)

        createUser(email,password)
        .then(res => console.log(res))


    }
    const google2=()=>{
        google(provider)
        .then(res=>{
            navigate('/')
        })
        .catch(err=>console.log(err))

    }
    return (
        <div className='mt-16'>
            <div className="card  mx-auto max-w-sm shadow-2xl bg-base-100 mt-6">
                <h1 className="text-5xl text-center font-bold">Signup </h1>

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
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>

                        </label>

                    </div>
                    <div className="form-control mt-2">
                        <input type="submit" className='btn btn-info' value="Signup" />
                    </div>
                    <div className='block mt-2'>
                        <button onClick={google2} className='btn btn-outline w-full btn-dark text-3xl my-1'><FcGoogle/></button>

                    </div>
                    <Link to='/login' className="text-center  link-hover">Already have account? Log in</Link>

                   
                </form>
            </div>
        </div>
    );
};

export default Register;