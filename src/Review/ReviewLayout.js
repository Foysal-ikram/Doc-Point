import React, { useContext } from 'react';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { AuthContext } from '../Components/Loader/UserContext';

const ReviewLayout = () => {
    
    const {user} = useContext(AuthContext)


    const handleSubmit=event=>{
        event.preventDefault()
        const form = event.target ;
        const quistion= form.message.value ;
     

        const post ={
          email : user.email ,
          quistion ,

        }

        fetch(`http://localhost:5000/post`, {
            method: 'POST' ,
            headers : {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(post)

        } )
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            form.reset()
            Swal.fire(
                'Done',
                'You Have Posted Your quistion succesfully',
                'success'
              )
        })


       
       
    }
    return (
        <div className='mb-60'>
            <div className=''>
                <h1 className='text-center text-xl md:text-4xl text-blue-900 font-bold font-sans mt-20 border-b-4 border-cyan-400 pb-4 lg:mx-60 md:mx-40' >Share your problems and get suggestion</h1>


                <div className='lg:mx-60 md:mx-40 mx-1 border border-2 p-6 mt-4 bg-gray-200 rounded-md'>
                    <form onSubmit={handleSubmit}>

                        <h1 className='p-4 bg-gray-200 my-4 rounded-md'>Ask your quistion here :</h1>
                        <textarea name="message" className="textarea textarea-bordered h-24 w-full" placeholder="I have......" required></textarea>
                        <div className='flex justify-center w-1/4 mx-auto'>
                            <input className='btn btn-accent mt-2 md:btn-block ' type="submit" value="Post" />
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default ReviewLayout;