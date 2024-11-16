import { useEffect, useState } from 'react';
import './BookingForm.scss';

function BookingForm() {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('');
    const [availableTimes, setAvailableTimes] = useState([
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
    ]);
    const url = 'https://66b1a43a1ca8ad33d4f4a4fd.mockapi.io/LitteLemon';

    useEffect(() => {
        const fetchAPI = async () => {
            const response = await fetch(url);
            const data = await response.json();
            setTime(data[data.length - 1].time);
            setDate(data[data.length - 1].date);
            setGuests(data[data.length - 1].guests);
            setOccasion(data[data.length - 1].occasion);
            console.log('data:: ', data);
        };
        fetchAPI();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log({ date, time, guests, occasion });
        const response = await fetch(url, {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                date: date,
                time: time,
                guests: guests,
                occasion: occasion,
            }),
        });
    };
    return (
        <div className="booking-wrapper">
            <p
                style={{
                    marginBottom: '40px',
                    fontSize: '40px',
                    fontWeight: '600',
                    textAlign: 'center',
                }}
            >
                Booking Page
            </p>
            <form onSubmit={handleSubmit}>
                <label for="res-date" className="res-date-label">
                    Choose date
                </label>
                <input
                    type="date"
                    id="res-date"
                    onChange={(e) => setDate(e.target.value)}
                />
                <label for="res-time" className="res-time-label">
                    Choose time
                </label>
                <select
                    id="res-time "
                    className="time-options"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                >
                    {availableTimes?.map((item, index) => (
                        <option key={index}>{item}</option>
                    ))}
                </select>
                <label for="guests" className="guests-label">
                    Number of guests
                </label>
                <input
                    type="number"
                    placeholder="1"
                    min="1"
                    max="10"
                    id="guests"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                />
                <label for="occasion" className="occasion-label">
                    Occasion
                </label>
                <select
                    id="occasion"
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}
                >
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <input
                    type="submit"
                    value="Make Your reservation"
                    className="order-btn"
                />
            </form>
        </div>
    );
}

export default BookingForm;
