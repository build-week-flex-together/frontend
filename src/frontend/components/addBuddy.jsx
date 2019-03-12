import React from 'react';
import { Link } from 'react-router-dom'; 

class AddBuddy extends React.Component {
    constructor() {
        super();
        // set initial state of buddy before input
        this.state = {
            buddyName: '',
            buddyEmail: '',
            buddyPhone: '',
            buddyLevel: ''
        }
    }
    // local storage after user updates for buddy state
    componentDidUpdate() {
        localStorage.setItem('addBuddy', JSON.stringify(this.state));
    }
    // handler for buddy input => sets state to user provided value
    handleBuddyInput = (e) => {
        this.setState({ level:  e.target.value })
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
                    <input type='text' placeholder={"Buddy's Name"}></input>
                    <input type='email' placeholder={"Buddy's Email"}></input>
                    <input type='number' placeholder={"Buddy's Phone Number"}></input>

                <h1>Mobility Level (choose one)</h1>
                    {/* buttons assigned value to enter in database */}
                    <button value='low'>Low</button>
                    <button value='medium'>Medium</button>
                    <button value='high'>High</button>

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