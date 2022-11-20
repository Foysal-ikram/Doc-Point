import React, { createContext, useEffect, useState } from 'react';
import { getAuth , createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup, sendEmailVerification, sendPasswordResetEmail } from "firebase/auth";
import app from '../../firebase.config';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2' ;



export const AuthContext = createContext();

const UserContext = ({ children }) => {
    const auth = getAuth( app );
    
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true); 
    

    const signin = (email, password) =>{
        setLoading(true)  //eta time nebe 
        return signInWithEmailAndPassword(auth , email , password);
    }

    const createUser = (email , password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth , email , password);

    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth) ;
    }
    
    const google =(provider) =>{
        setLoading(true)        
        return signInWithPopup(auth , provider) ;
    }
    const verifyEmail =()=>{
        sendEmailVerification(auth.currentUser)
        .then(()=> {
            Swal.fire(
                'The Internet?',
                'That thing is still around?',
                'question'
              )
        })
    }
    const forgetPass =(email)=>{
        sendPasswordResetEmail(auth,email)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged( auth , currentUser=>{

            setUser(currentUser) ;
            setLoading(false) ;
          

        })
        return ()=>{
            unsubscribe()
        }

    },[])

    const authInfo = {user , createUser , signin , loading , logOut , google, verifyEmail, forgetPass };
  
   

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;