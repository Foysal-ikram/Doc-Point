import React from 'react';
import '../../../App.css'

const AppointmentCard = ({treatment,setSelectedtreatment, selectedDate , setSelectedDate}) => {
    const {name , slots} = treatment ;
    //console.log(slots)

    return (
        <div className='mx-auto border-2 w-full text-center  shadow-2xl p-12 rounded-lg 	'>
          <div>
            <h1 className='text-3xl mb-8 text-teal-400	font-bold '>{name}</h1>
            <p >{ 
                slots.length>0 ? slots[0]  : 'All slots full'
            }</p>
            <p>
                { slots.length} {slots.length>1 ? 'spaces' : 'space'} available 
            </p>
          </div>

          <label
                        disabled={slots.length === 0}
                        htmlFor="booking-modal"
                        className="btn btn-mine  mt-8 "
                        onClick={() => setSelectedtreatment(treatment)}
                    >Book Appointment</label>

        </div>
    );
};

export default AppointmentCard;