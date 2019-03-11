import React from 'react';
import { Link } from 'react-router-dom';

const BuddyTimePick = () => {
    return (
        <div>
            <h3>Here are some good times for [User 1], do any of
                these work for you?
            </h3>
            <p>
                To complete the beta, we are asking that people commit to one
                30-minute time block once per week.  Please choose a time that works well for you.
            </p>
            <div>SELECTED CALENDAR TIMES WILL GO HERE</div>
            {/* Button needs to be 'Next' until user chooses times, then it will change to 'Submit' */}
            <button>
                <Link to='/thanks'>Next</Link>
            </button>
            <Link to='/noMatchTime'>None of these times work for me</Link>
        </div>
    );
}

export default BuddyTimePick;