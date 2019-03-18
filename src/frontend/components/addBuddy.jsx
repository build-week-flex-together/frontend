import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class AddBuddy extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            phone: '',
            mobility: ''
        }

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleMobility = this.handleMobility.bind(this);
        this.handleNext = this.handleNext.bind(this);
    }

    handleNameChange = (e) => {
        e.preventDefault();
        this.setState({ name: e.target.value });
        localStorage.setItem('buddyName', e.target.value);
    }
    handleEmailChange = (e) => {
        e.preventDefault();
        this.setState({ email: e.target.value });
        localStorage.setItem('buddyEmail', e.target.value);
    }
    handlePhoneChange = (e) => {
        e.preventDefault();
        this.setState({ phone: e.target.value });
        localStorage.setItem('buddyPhone', e.target.value);
    }
    handleMobility = (e) => {
        e.preventDefault();
        this.setState({ mobility: e.target.value })
        localStorage.setItem('buddyMobility', e.target.value);
    }

    handleNext = (e) => {
        e.preventDefault();

        let request = {
            is_companion = localStorage.getItem(''),
            name: '',
            email: '',
            phone_number: '',
            notification_preference: '',
            mobility_level: '',
            timezone: '',
            availability: [],
            recipient_name: localStorage.getItem('buddyName'),
            recipient_email: localStorage.getItem('buddyEmail'),
            recipient_phone_number: localStorage.getItem('buddyPhone'),
            recipient_mobility_level: localStorage.getItem('buddyMobility'),
        };

        let result = axios.post("https://flextogether.herokuapp.com/api/invite", request);

        this.props.history.push('/thanks')
    }

    render() {
        return (
            <div>
                <h1>Fitness is always more fun with friends!</h1>
                <p>Invite a friend of a loved one to complete the program with you.  We'll show them
                   your available times and find a time that works for both of you.
                </p>

                <hr></hr>
            

                <form>
                    <input type='text' placeholder={"Buddy's Name"} onChange={this.handleBuddyInput}></input>
                    <input type='email' placeholder={"Buddy's Email"} onChange={this.handleBuddyInput}></input>
                    <input type='tel' placeholder={"Buddy's Phone Number"} onChange={this.handleBuddyInput}></input>

                    <h1>Mobility Level (choose one)</h1>
                    <button value='Low'>Low</button>
                    <button value='Medium'>Medium</button>
                    <button value='High'>High</button>

                    <button onClick={this.handleNext}>
                        Next
                    </button>
                </form>

            </div>
        );
    }
}

export default AddBuddy;