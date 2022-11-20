import React from 'react';

const NoBookingModal = () => {
    return (
        <>
            <input type="checkbox" id="sorry" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box font-sans relative bg-cyan-200 py-24">
                    <label htmlFor="sorry" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-4xl  font-bold">You have not register yet !!</h3>
                    <p className="py-4 text-red-600 text-xl">Please login/register and verify your email first to get an appointment</p>
                </div>
            </div>
        </>
    );
};

export default NoBookingModal;