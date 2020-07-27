import React from 'react';
import ReservationForm from './ReservationForm';

import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';


describe('Reservation Form', () => {

    it('should render', () => {
      const { getByText, getByPlaceholderText } = render( 
        <ReservationForm />
);
  
      const nameInput = getByPlaceholderText('name');
      const numberInput = getByPlaceholderText('guests');
      const reserveButton = getByText('reserve');
      
      expect(nameInput).toBeInTheDocument();
      expect(numberInput).toBeInTheDocument();
      expect(reserveButton).toBeInTheDocument();

    });

    it('should be able to make a reservation', () => {
        const mockReservation = jest.fn();
        const { getByRole } = render(
            <ReservationForm addReservation={mockReservation}/>
        );
    
        const reserveButton = getByRole('button');
        fireEvent.click(reserveButton);
    
        expect(mockReservation).toBeCalledTimes(1);
      });
});