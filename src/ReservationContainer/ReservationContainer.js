import React from 'react'
import ReservationCard from '../ReservationCard/ReservationCard'


const ReservationContainer = (props) => {
    const sortedReservations = props.reservations.map((reservation) => 
         <ReservationCard reservation={reservation} />
      )
    return (
    <section className="reservation-container">
        {sortedReservations}
    </section >
    )
}

export default ReservationContainer;

