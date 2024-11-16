import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MyForm from './MyForm';
import BookingForm from '../../src/components/Common/Booking/BookingForm';

test('calls onSubmit with correct data when form is valid', async () => {
    const handleSubmit = jest.fn();

    render(<BookingForm onSubmit={handleSubmit} />);

    userEvent.type(screen.getByLabelText(/time:/i), '17:00');
    userEvent.type(screen.getByLabelText(/guest:/i), '10');
    userEvent.type(screen.getByLabelText(/guest:/i), 'Birthday');

    userEvent.click(screen.getByRole('button', { name: /submit/i }));

    await screen.findByRole('button', { name: /submit/i });

    expect(handleSubmit).toHaveBeenCalledWith(
        {
            time: '17:00',
            guests: '10',
            occasion: 'Birthday',
        },
        expect.anything(),
    );

    expect(handleSubmit).toHaveBeenCalledTimes(1);
});
