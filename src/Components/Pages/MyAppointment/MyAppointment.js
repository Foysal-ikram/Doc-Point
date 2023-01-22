import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import UseTitle from '../../../Hooks/UseTitle';
import Loading from '../../Loader/Loading';
import { AuthContext } from '../../Loader/UserContext';
import Card from './Card';

const MyAppointment = () => {
  UseTitle('My-Appointment')
  const { user } = useContext(AuthContext)
  const url = `https://doctors-portal-server-ochre.vercel.app/bookings?email=${user?.email}`

  const { data: bookings = [], isLoading } = useQuery({
    queryKey: ['bookings', user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data)
      return data
    }
  })

  if (isLoading) {
    return <Loading></Loading>
  }

  if (!user?.emailVerified) {
    return (<h1 className='text-center mt-20 text-4xl'>Please verify your email</h1>)
  }

  if (!bookings.length) {
    return (<div className='flex'>
      <div className='lg:flex items-center mx-auto'>
        <p className='text-2xl text-center mt-20 '>You dont have any appointment yet !!!</p>
        <img src="https://st.depositphotos.com/1431107/2320/v/950/depositphotos_23201462-stock-illustration-sorry-smiley.jpg" alt="" width={600} />
      </div>
    </div>)
  }

  return (
    <div className='mx-20 z-0'>
      {
        <div className="overflow-x-auto z-0">
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
              bookings.map((booking, i) => <Card
                i={i + 1}
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