import React from "react";
import "./ReservationCard.css"

const ReservationCard = ({reservation}) => {
    return (
        <section className="reservationCard">
            <p>Name: {reservation.name}</p>
            <p>Date: {reservation.date}</p>
            <p>Time: {reservation.time}</p>
            <p>Number of guests: {reservation.number}</p>
        </section>
    )
} 


export default ReservationCard;