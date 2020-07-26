import React, { Component } from 'react';
import './App.css';

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

  displayReservations = async () => {
    let stateReservations = await this.state.reservations
    return stateReservations.map((reservation) => <li>${reservation.name}</li>)
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          {console.log("state", this.state.reservations)}
          <ul>
          {this.state.reservations.map((reservation) => <li>{reservation.name}</li>)}
          </ul>
        </div>
      </div>
    )
  }
}

export default App;
