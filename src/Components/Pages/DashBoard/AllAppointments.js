import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../Loader/Loading';
import Card2 from './Card2';

const AllAppointments = () => {
  const { data: appointments = [], refetch, isLoading } = useQuery({
    queryKey: ['appointments'],
    queryFn: () => fetch(`http://localhost:5000/admin/appointments`)
      .then(res => res.json())
  })
  console.log(appointments)
  if (isLoading) {
    return <Loading></Loading>
  }
  if (!appointments.length) {
    return (<div className='flex'>
      <div className='lg:flex items-center mx-auto'>
        <p className='text-2xl text-center mt-20 '>You dont have any appointment yet !!!</p>
        <img src="https://st.depositphotos.com/1431107/2320/v/950/depositphotos_23201462-stock-illustration-sorry-smiley.jpg" alt="" width={600} />
      </div>
    </div>)
  }

  return (
    <div className="overflow-x-auto">
    <table className="table table-zebra w-full">
    
      <thead>
        <tr>
          <th  className='text-center'>Index</th>
          <th  >Name</th>
          <th  >Email</th>
          <th >Phone</th>
          <th >Treatment</th>
          <th  className='text-center'>Date</th>
          <th  className='text-center'>Time</th>
        </tr>
      </thead>
      <tbody>

      {
        appointments.map((booking,i)=>
        <tr>
                <th  className='text-center'>{i+1}</th>
                <td  >{booking.patient}</td>
                <td  >{booking.email}</td>
                <td  >{booking.phone}</td>
                <td  >{booking.treatment}</td>
                <td  className='text-center'>{booking.appointmentDate}</td>
                
                <td className='text-center'>{booking.slot}</td>
            </tr>
        )
      }
      </tbody>
    </table>
  </div>
  );
};

export default AllAppointments;