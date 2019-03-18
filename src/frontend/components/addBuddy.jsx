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
            mobility: '',
            bgColor: 'white',
            bgColor2: 'white',
            bgColor3: 'white',
            textColor: 'rgb(0,33,71)', 
            textColor2: 'rgb(0,33,71)',
            textColor3: 'rgb(0,33,71)'
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
        if (e.target.value === 'Low') {
            this.setState({ bgColor: 'rgb(0,33,71)' });
            this.setState({ textColor: 'white'})
        } else if (e.target.value === 'Medium') {
            this.setState({ bgColor2: 'rgb(0,33,71)' });
            this.setState({ textColor2: 'white' })
         } else {
             this.setState({ bgColor2: 'rgb(0,33,71)' });
             this.setState({ textColor2: 'white' })
         }
        this.setState({ mobility: e.target.value })
        localStorage.setItem('buddyMobility', e.target.value);
    }

    handleNext = (e) => {
        e.preventDefault();

        let allTimes = JSON.parse(localStorage.getItem('selectedTimes'));
        let selectedTimes = allTimes.filter(time => time.times.length > 0);
        let formattedTimes = selectedTimes.map(time => { 
           return ({ day: time.day, timeslots: time.times });
        });

        let request = {
            is_companion: localStorage.getItem('is_companion') === '1' ? true : false,
            name: localStorage.getItem('name'),
            email: localStorage.getItem('email'),
            phone_number: localStorage.getItem('phone'),
            notification_preference: localStorage.getItem('notifications'),
            mobility_level: localStorage.getItem('mobility'),
            timezone: localStorage.getItem('timeZone'),
            availability: formattedTimes,
            recipient_name: localStorage.getItem('buddyName'),
            recipient_email: localStorage.getItem('buddyEmail'),
            recipient_phone_number: localStorage.getItem('buddyPhone'),
            recipient_mobility_level: localStorage.getItem('buddyMobility'),
        };

        axios.post("https://flextogether.herokuapp.com/api/invite", request)
            .then((result) => {
                // Post to verify so the buddy gets an email
                axios.post(`https://flextogether.herokuapp.com/api/invite/${result.data.token}/verify`);
            })
            .catch((error) => {
                console.log(error)
            });

        this.props.history.push('/thanks')
    }

    render() {
        return (
            <div className = 'addBuddyText'>
                <h1>Fitness is always more fun with friends!</h1>
                <p>Invite a friend of a loved one to complete the program with you.  We'll show them
                   your available times and find a time that works for both of you.
                </p>

                <hr></hr>
                    <input className='inputBoxes' type='text' placeholder={"Buddy's Name"} onChange={this.handleNameChange}></input>
                    <input className='inputBoxes' type='email' placeholder={"Buddy's Email"} onChange={this.handleEmailChange}></input>
                    <input className='inputBoxes' type='tel' placeholder={"Buddy's Phone Number"} onChange={this.handlePhoneChange}></input>

                <h1>Mobility Level (choose one)</h1>
                <button className='mobilityBtns' value='Low' onClick={this.handleMobility} style={{backgroundColor: this.state.bgColor, color: this.state.textColor}}>Low</button>
                <button className='mobilityBtns' value='Medium' onClick={this.handleMobility} style={{backgroundColor: this.state.bgColor2, color: this.state.textColor2}}>Medium</button>
                <button className='mobilityBtns' value='High' onClick={this.handleMobility} style={{backgroundColor: this.state.bgColor3, color: this.state.textColor3}}>High</button>
                <br></br>
                <button className='nextBtn' onClick={this.handleNext}>
                    Next
                </button>
            </div>
        );
    }
}

export default AddBuddy;