import React from 'react';
import { Link } from 'react-router-dom';

const AddBuddy = () => {
    return (
        <div>
            <h1>Fitness is always more fun with friends!</h1>
            <p>Invite a friend of a loved one to complete the program with you.  We'll show them
            your available times and find a time that works for both of you.
            </p>
            <hr></hr>
            <form>
            <input type='text' placeholder={"Buddy's Name"}></input>
            <input type='email' placeholder={"Buddy's Email"}></input>
            <input type='number' placeholder={"Buddy's Phone Number"}></input>
            </form>
            <h1>Mobility Level (choose one)</h1>
            <button>Low</button>
            <button>Medium</button>
            <button>High</button>
            <button>
                <Link to='/thanks'>Next</Link>
            </button>
        </div>
    );
}

export default AddBuddy;