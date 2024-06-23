import React, { useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingForm from './BookingForm';
import './App.css'; // Import the CSS file for styling

const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
};

const fetchAPI = function(date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};

const submitAPI = function(formData) {
    return true;
};

const initializeTimes = () => {
    const today = new Date();
    return fetchAPI(today);
};

const updateTimes = (state, action) => {
    return fetchAPI(action);
};

const BookingPage = () => {
    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
    const [bookingData, setBookingData] = useState([]);
    const navigate = useNavigate();

    const submitForm = (formData) => {
        if (submitAPI(formData)) {
            setBookingData([...bookingData, formData]);
            navigate('/confirmed');
            return true;
        }
        return false;
    };

    return (
        <div className='bookadate'>
            <h1>Book a Date</h1>
            <BookingForm 
                availableTimes={availableTimes} 
                dispatch={dispatch} 
                submitForm={submitForm} 
                bookingData={bookingData} 
            />
            <h2>Booking Data</h2>
            <table className="booking-table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Guests</th>
                        <th>Occasion</th>
                    </tr>
                </thead>
                <tbody>
                    {bookingData.map((data, index) => (
                        <tr key={index}>
                            <td>{data.date.toDateString()}</td>
                            <td>{data.time}</td>
                            <td>{data.guests}</td>
                            <td>{data.occasion}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BookingPage;