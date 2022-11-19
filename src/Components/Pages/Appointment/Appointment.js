import React, { useContext, useEffect, useState } from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import img from '../../../assets/doc.jpg'
import { AuthContext } from '../../Loader/UserContext';
import AppointmentCard from './AppointmentCard';
import BookingModal from './BookingModal';
import { useQuery } from '@tanstack/react-query';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [treatment, setTreatment] = useState([])
    const [selectedtreatment, setSelectedtreatment] = useState(null)
    const { user } = useContext(AuthContext)
    
    const date = format(selectedDate , 'PP') ;
    console.log(date)

   // console.log(user)
    let footer = <p>Please pick a day.</p>;
    if (selectedDate) {
        footer = <p> {format(selectedDate, 'PP')}.</p>;
    }

    // ------------------------------------2nd part----------------------------------------------
    const { data: options=[]  } = useQuery({
        queryKey : ['options' , date ] ,
        queryFn : () =>  fetch(`http://localhost:5000/slots?date=${date}`)
        .then(res => res.json())
    })







    // useEffect(() => {
    //     fetch('http://localhost:5000/slots')
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             setTreatment(data)
    //         })
    // }, [])
    // ------------------------------------2nd part Ends----------------------------------------------


    return (
        <section className='mt-8'>
           
            <h1 className='text-center text-4xl pb-8 font-bold'>Select Date for Appointment</h1>

            <div className='grid lg:grid-cols-2'>

                <div className='mx-auto'>
                    <DayPicker
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}


                    />

                </div>
                <div className='mx-auto my-auto hidden md:block'>
                    <div> <img src={img} alt="" className='lg:w-4/5' /></div>
                </div>
            </div>
            <div className=''> <p className='text-center text-xl pt-6 text-cyan-500'>You have selected your appointment date : {format(selectedDate, 'PP')} </p></div>

{/* -------------------------------------2nd Part start--------------------------------------------------------------------- */}

            <div className='grid grid-cols-1 lg:grid-cols-3 lg:mx-20 gap-16 mt-20'>
                {
                    options.map(treatment =>
                        <AppointmentCard
                            key={treatment._id}
                            treatment={treatment}
                            selectedDate={selectedDate}
                            setSelectedDate={setSelectedDate}
                            setSelectedtreatment={setSelectedtreatment}

                        ></AppointmentCard>
                    )
                }

            </div>
            { selectedtreatment &&
            <BookingModal
                selectedDate={selectedDate}
                setSelectedtreatment={setSelectedtreatment}
                selectedtreatment = {selectedtreatment}

            ></BookingModal>}
            
        </section>
    );
};

export default Appointment;