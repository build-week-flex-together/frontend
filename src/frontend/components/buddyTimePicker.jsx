import React from 'react';
import { Link } from 'react-router-dom';

class BuddyTimePicker extends React.Component {
    constructor() {
        super();
        this.state = {
            // initial state of buddy's available times
            availabilityTimes: [
                {
                    timezone: '',
                    day: '',
                    hour: '',
                    minute: ''
                }
            ]
        }
    }
    render() {
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
                    {/* go here if user and buddy times match up */}
                    <Link to='/thanks'>Next</Link>
                </button>
                    {/* go here if there's none of these times for for ze buddy */}
                    <Link to='/noMatchTime'>None of these times work for me</Link>
            </div>
        );
    }
}

export default BuddyTimePicker;