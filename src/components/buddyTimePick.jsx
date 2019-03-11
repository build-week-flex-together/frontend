import React from 'react';

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
            <button>Next</button>
            {/* <button>Submit</button> shown after time is selected */}
            <a href='#'>None of these times work for me.</a>
        </div>
    );
}

export default BuddyTimePick;