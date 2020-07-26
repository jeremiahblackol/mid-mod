import React, { Component } from 'react';
import './App.css';
import ReservationCard from '../ReservationCard/ReservationCard'

// to test push

class App extends Component {
    constructor() {
      super();
      this.state = {
        reservations: []
      }
    }

  componentDidMount = () => {
    fetch("http://localhost:3001/api/v1/reservations")
      .then(response => response.json())
      .then(data => this.setState( { reservations: data }))
      .catch(err => console.log(err.message))
  }

  displayReservations = () => {
    return this.state.reservations.map((reservation) => <ReservationCard props={reservation}/>)
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
            
            {this.state.reservations.map((reservation) => {
              return <section className="reservationCard"><ReservationCard reservation={reservation} />
            </section>
            })}
        </div>
      </div>
    )
  }
}
// {console.log("state", this.state.reservations)}
// {console.log('card', <ReservationCard />)}
// {this.state.reservations.map((reservation) => <ReservationCard info={reservation}/>)}

export default App;
