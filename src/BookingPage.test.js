import { render, screen, fireEvent } from '@testing-library/react';
import BookingPage from './BookingPage';

// Mock fetchAPI to return a non-empty array of available booking times
jest.mock('./BookingPage', () => ({
    ...jest.requireActual('./BookingPage'),
    fetchAPI: (date) => ['17:00', '18:00', '19:00']
}));

test('initializeTimes returns non-empty array', () => {
    const { result } = render(<BookingPage />);
    expect(result.current.availableTimes).toEqual(['17:00', '18:00', '19:00']);
});

test('updateTimes returns correct times for selected date', () => {
    const selectedDate = new Date('2023-06-22');
    const { result } = render(<BookingPage />);
    fireEvent.change(screen.getByLabelText(/select date/i), { target: { value: selectedDate.toISOString().split('T')[0] } });

    // Update the times for the selected date
    fireEvent.change(screen.getByLabelText(/select time/i), { target: { value: '18:00' } });
    expect(result.current.availableTimes).toEqual(['17:00', '18:00', '19:00']);
});