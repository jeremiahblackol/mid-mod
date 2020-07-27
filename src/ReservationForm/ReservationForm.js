import React from 'react'

class ReservationForm extends React.Component {
    constructor() {
        super();
        this.state = {
            id: '',
            name: '',
            date: '',
            time: '',
            number: ''
        }
    }

    handleChange = (event) => {
        const { name } = event.target
        this.setState({
            [name]: event.target.value
        })
    }

    submitForm = (event) => {
        event.preventDefault()
        console.log("res objects", this.state)
        this.props.addReservation(this.state)
    }

    addId = () => {
        this.setState({ id: Date.now()})
    }

    render() {
        return (
            <form onSubmit={(event) => this.submitForm(event)}>
                <input onChange={(event) => this.handleChange(event)}value={this.state.name} type="text" name="name" placeholder="name"></input>
                <input onChange={(event) => this.handleChange(event)}value={this.state.date} type="date" name="date" placeholder="date"></input>
                <input onChange={(event) => this.handleChange(event)}value={this.state.time} type="time" name="time" placeholder="time"></input>
                <input onChange={(event) => this.handleChange(event)}value={this.state.number} type="text" name="number" placeholder="guests"></input>
                <button type="submit" onClick={this.addId}></button>
            </form>
        )
    }
}

export default ReservationForm;