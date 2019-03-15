import React from 'react';
import { Link } from 'react-router-dom'; 
// import axios from 'axios';

class AddBuddy extends React.Component {
    constructor() {
        super();
        // set initial state of buddy before input
        this.state = {
            name: '',
            email: '',
            phone: '',
            mobility: ''
        }
    }
    // local storage after user updates for buddy state
    componentDidUpdate() {
        localStorage.setItem('addBuddy', JSON.stringify(this.state));
    }
    // handler for buddy input => sets state to user provided value
    handleBuddyInput = (e) => {
        e.preventDefault();
        this.setState({ level:  e.target.value })

    // handleMobility = (e) => {
    //     e.preventDefault();
    //     this.setState({ value: e.target.value })
    // }

        // const { name, email, phone, notifyEmail, notifyPhone, mobility, availabilityTimes:[timezone, day, hour, minute]} = this.state;
        // const url = ('https://test-ft-api.herokuapp.com/api/auth/onboard');


}
    render() {
        return (
            <div>
                <h1>Fitness is always more fun with friends!</h1>
                <p>Invite a friend of a loved one to complete the program with you.  We'll show them
                   your available times and find a time that works for both of you.
                </p>

                <hr></hr>

                {/* input form for adding a buddy */}
                <form>
                    <input type='text' placeholder={"Buddy's Name"} onChange={this.handleBuddyInput}></input>
                    <input type='email' placeholder={"Buddy's Email"} onChange={this.handleBuddyInput}></input>
                    <input type='tel' placeholder={"Buddy's Phone Number"} onChange={this.handleBuddyInput}></input>

                <h1>Mobility Level (choose one)</h1>
                    {/* buttons assigned value to enter in database */}
                    <button value='1'>Low</button>
                    <button value='2'>Medium</button>
                    <button value='3'>High</button>

                    {/* submit / next button */}
                    <button>
                        <Link to='/thanks'>Next</Link>
                    </button>
                </form>

            </div>
        );
    }
}

export default AddBuddy;