import { useEffect, useState } from 'react';
import './BookingForm.scss';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object({
    date: yup.string().required('The field is requirement'),
    time: yup.string().required('The field is requirement'),
    guests: yup.number().required('The field is requirement'),
    occasion: yup.string().required('The field is requirement'),
});

function BookingForm() {
    const [availableTimes, setAvailableTimes] = useState([
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
    ]);
    const url = 'https://66b1a43a1ca8ad33d4f4a4fd.mockapi.io/LitteLemon';

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            time: '',
            date: '',
            guests: 0,
            occasion: '',
        },
    });

    useEffect(() => {
        const fetchAPI = async () => {
            const response = await fetch(url);
            const data = await response.json();

            console.log(data);
            const serverData = {
                time: data[data.length - 1].time,
                date: data[data.length - 1].date,
                guests: data[data.length - 1].guests,
                occasion: data[data.length - 1].occasion,
            };
            reset(serverData);
        };
        fetchAPI();
    }, []);

    const onSubmit = async (data) => {
        const response = await fetch(url, {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                date: data.date,
                time: data.time,
                guests: data.guests,
                occasion: data.occasion,
            }),
        });
        console.log(data);
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
            <form onSubmit={handleSubmit(onSubmit)}>
                <label for="res-date" className="res-date-label">
                    Choose date
                </label>
                <input type="date" id="res-date" {...register('date')} />
                <label for="res-time" className="res-time-label">
                    Choose time
                </label>
                <select
                    id="res-time "
                    className="time-options"
                    {...register('time')}
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
                    {...register('guests')}
                />
                <label for="occasion" className="occasion-label">
                    Occasion
                </label>
                <select id="occasion" {...register('occasion')}>
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
