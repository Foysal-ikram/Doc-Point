import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import Loading from '../../Loader/Loading';
import { AuthContext } from '../../Loader/UserContext';
import Card from './Card';

const MyAppointment = () => {
    const {user } = useContext(AuthContext)
    const url = `http://localhost:5000/bookings?email=${user?.email}`

    const { data: bookings=[] , isLoading } = useQuery({
        queryKey : ['bookings', user?.email] ,
        queryFn : async () =>{
            const res = await fetch(url)  ;
            const data = await res.json() ;
            console.log(data)
            return data
        }
    })

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div className=''>
            { 
               <div className="overflow-x-auto ">
               <table className="table w-full">
                 
                 <thead>
                   <tr>
                     <th>index</th>
                     <th>Patient Name</th>
                     <th>Treatment </th>
                     <th>Visit Time</th>
                   </tr>
                 </thead>
               {
                bookings.map((booking , i)=><Card
                i={i}
                key={booking._id}
                booking={booking}
                ></Card>)
               }
               </table>
             </div>
            }            
        </div>
    );
};

export default MyAppointment;