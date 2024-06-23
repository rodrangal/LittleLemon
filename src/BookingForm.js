import React, { useState, useEffect } from 'react';
import './App.css'; // Import the CSS file for styling

const BookingForm = ({ availableTimes, dispatch, submitForm, bookingData }) => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState("");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("Birthday");
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        dispatch(selectedDate);
    }, [selectedDate, dispatch]);

    useEffect(() => {
        validateForm();
    }, [selectedDate, selectedTime, guests, occasion]);

    const handleDateChange = (event) => {
        setSelectedDate(new Date(event.target.value));
    };

    const handleTimeChange = (event) => {
        setSelectedTime(event.target.value);
    };

    const handleGuestsChange = (event) => {
        setGuests(event.target.value);
    };

    const handleOccasionChange = (event) => {
        setOccasion(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = {
            date: selectedDate,
            time: selectedTime,
            guests: guests,
            occasion: occasion
        };
        submitForm(formData);
    };

    const isTimeSlotBooked = (time) => {
        return bookingData.some(data => 
            data.date.toDateString() === selectedDate.toDateString() && data.time === time
        );
    };

    const validateForm = () => {
        const today = new Date().setHours(0, 0, 0, 0);
        const selected = selectedDate.setHours(0, 0, 0, 0);
        const isValidDate = selected >= today;
        const isValidTime = selectedTime !== "";
        const isValidGuests = guests > 0 && guests <= 10;
        const isValidOccasion = occasion !== "";
        
        setIsFormValid(isValidDate && isValidTime && isValidGuests && isValidOccasion);
    };

    const today = new Date().toISOString().split('T')[0];

    return (
        <form onSubmit={handleSubmit} className="booking-form">
            <label>
                Select Date:
                <input type="date" value={selectedDate.toISOString().substr(0, 10)} onChange={handleDateChange} min={today} />
            </label>
            <label>
                Select Time:
                <select value={selectedTime} onChange={handleTimeChange}>
                    <option value="" disabled>Select a time</option>
                    {availableTimes.map(time => (
                        <option key={time} value={time} disabled={isTimeSlotBooked(time)}>
                            {time} {isTimeSlotBooked(time) ? "(Booked)" : ""}
                        </option>
                    ))}
                </select>
            </label>
            <label>
                Number of Guests:
                <input type="number" value={guests} onChange={handleGuestsChange} min="1" max="10" />
            </label>
            <label>
                Occasion:
                <select value={occasion} onChange={handleOccasionChange}>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                    <option value="Business">Business</option>
                    <option value="Other">Other</option>
                </select>
            </label>
            <button type="submit" disabled={!isFormValid}>Book Now</button>
        </form>
    );
};

export default BookingForm;