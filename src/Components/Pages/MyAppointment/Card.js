import React from 'react';

const Card = ({ booking , i}) => {
    const { appointmentDate, patient, phone, slot, treatment } = booking;
    return (
        <tbody>
            {/* <!-- row 1 --> */}
            <tr>
                <th>{i}</th>
                <td>{patient}</td>
                <td>{treatment}</td>
                <td>{slot}</td>
            </tr>


        </tbody>
    );
};

export default Card;