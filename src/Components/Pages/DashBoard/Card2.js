import React from 'react';

const Card2 = ({ booking , i}) => {
    const { appointmentDate, patient, phone, slot, treatment , email , _id} = booking;
    return (
        <tbody>
           
            <tr>
                <th>{i}</th>
                <td>{patient}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td>{treatment}</td>
                <td>{appointmentDate}</td>
                
                <td>{slot}</td>
            </tr>


        </tbody>
    );
};

export default Card2;