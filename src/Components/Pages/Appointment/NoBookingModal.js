import React from 'react';

const NoBookingModal = () => {
    return (
        <>
            <input type="checkbox" id="nouser" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="nouser" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-4xl font-bold">You have not register yet !!</h3>
                    <p className="py-4 text-red-400 text-3xl">Please login/register first to get an appointment</p>
                </div>
            </div>
        </>
    );
};

export default NoBookingModal;