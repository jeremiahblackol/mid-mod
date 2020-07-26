import React, { Component } from 'react';
import './App.css';

// to test push

class App extends Component {
    constructor() {
      super();
      this.state = {}
    }

  componentDidMount = () => {
    fetch("http://localhost:3001/api/v1/reservations")
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(err => console.log(err.message))
  }
  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          
        </div>
      </div>
    )
  }
}

export default App;
