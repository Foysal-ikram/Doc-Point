import React, { useContext } from 'react';
import { format } from 'date-fns';
import Swal from 'sweetalert2'
import { AuthContext } from '../../Loader/UserContext';



const BookingModal = ({ selectedtreatment, setSelectedtreatment, selectedDate, refetch }) => {
    console.log(selectedtreatment, setSelectedtreatment, selectedDate)
    const date = format(selectedDate, 'PP');
    const {user } = useContext(AuthContext)
    console.log(user)




    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const patient = form.patient.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const booking = {
            appointmentDate: date,
            treatment: selectedtreatment.name,
            patient,
            slot,
            email,
            phone,
        }

        // TODO: send data to the server
        // and once data is saved then close the modal 
        // and display success toast

        console.log(booking);
        fetch('http://localhost:5000/slots', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    // alert('ok')
                    Swal.fire(
                        'Thank You!',
                        'Your Appointment is Placed',
                        'success'
                    )
                    setSelectedtreatment(null)
                    refetch() ;

                }
            })

    }

    


    return (
        <>
            
            <input type="checkbox" id="booking-modal" className="modal-toggle " />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold text-center">{selectedtreatment.name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10' >
                        <input type="text" disabled value={date} className="input w-full input-bordered" ></input>

                        <select name="slot" className="select select-bordered w-full">
                            {
                                selectedtreatment.slots.map((slot, i) => <option
                                    value={slot}
                                    key={i}
                                >{slot}
                                </option>)
                            }
                        </select>

                        <input name="patient" type="text" placeholder="Your Name" required className="input w-full input-bordered" />
                        <input name="email" type="email" placeholder="Email Address" defaultValue={user.email} disabled className="input w-full input-bordered" />
                        <input name="phone" type="text" placeholder="Phone Number" required className="input w-full input-bordered" />
                        <br />
                        <input className='btn btn-accent w-full' type="submit" value="Submit" />
                    </form>

                </div>
            </div>

        </>
    );
};

export default BookingModal;