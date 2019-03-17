import React from 'react';
import { Link } from 'react-router-dom';

class BuddyTimePicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // initial state of buddy's available times
            availabilityTimes: [
                {
                    day: '',
                    time: ''
                }
            ]
        }
    }
    render() {
        let selTimes = JSON.parse(localStorage.getItem('selectedTimes'));
        let availabilityDisplay = null;
        if (selTimes === null) {
    
            console.log('No times were selected.');
        } else {
            let selectedTimes = selTimes.filter(times => times.times.length > 0);
            availabilityDisplay = selectedTimes.map(selected => {
                const timeBlocks = selected.times.map(time => 
                    <button key={time}>
                        {time}
                    </button>    
                );
                return (
                    <div key={selected.day}>
                        <label>{selected.day}</label>
                        {timeBlocks}
                    </div>    
                )
            })
        }

        return (
            <div>
                <h3>Here are some good times for [User 1], do any of
                    these work for you?
                </h3>
                <p>
                    To complete the beta, we are asking that people commit to one
                    30-minute time block once per week.  Please choose a time that works well for you.
                </p>
                <div className="selectedTimesWrapper">
                   {availabilityDisplay}
                </div>
                
                {/* Button needs to be 'Next' until user chooses times, then it will change to 'Submit' */}
                <button>
                    <Link to='/thanks'>Next</Link>
                </button>
                    <Link to='/noMatchTime'>None of these times work for me</Link>
            </div>
        );
    }
}

export default BuddyTimePicker;