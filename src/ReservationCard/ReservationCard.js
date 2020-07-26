import React from "react";

const ReservationCard = (props) => {
    console.log("name", props.reservation.name)
    return (
        <div>
            <p>Name: {props.reservation.name}</p>
            <p>Date: {props.reservation.date}</p>
            <p>Time: {props.reservation.time}</p>
            <p>Number of guests: {props.reservation.number}</p>

        </div>
    )
} 


export default ReservationCard;