import React from 'react';
import { Link } from 'react-router-dom';

import TimeButtons from './timeDisplay/timeButtons';

class BuddyTimePicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // initial state of buddy's available times
            availabilityTimes: [
                {
                    day: "Sunday",
                    times: []
                },
                {
                    day: "Monday",
                    times: []
                },
                {
                    day: "Tuesday",
                    times: []
                },
                {
                    day: "Wednesday",
                    times: []
                },
                {
                    day: "Thursday",
                    times: []
                },
                {
                    day: "Friday",
                    times: []
                },
                {
                    day: "Saturday",
                    times: []
                }
            ]
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleNext = this.handleNext.bind(this);
    }


    handleClick = (time, day) => {
        let selTimes = this.state.availabilityTimes.slice();
        let chosenDay = selTimes.filter(selTime => selTime.day === day)[0];
        let chosenTime = chosenDay.times.filter(selTime => selTime === time);
        if (chosenTime.length > 0) {
            // Remove the time from the array
            chosenDay.times = chosenDay.times.filter(selTime => selTime !== time);
        } else {
            chosenDay.times.push(time);            
        }

        // Sort the times so they ascend
        if (chosenDay.times.length > 1) {
            chosenDay.times.sort((a, b) => {
                return new Date("1970/01/01 " + a) - new Date("1970/01/01 " + b);
            });
        }

        this.setState({ availabilityTimes: selTimes });
        localStorage.setItem('availabilityTimes', JSON.stringify(selTimes));
    };

    handleNext = () => {
        this.props.history.push("/timeAssignment");
    };

    render() {
        let selTimes = JSON.parse(localStorage.getItem('selectedTimes'));
        let availabilityDisplay = null;
        if (selTimes === null) {
            // Display message that no times were selected
            availabilityDisplay = 
                <div>
                    <label>No times were selected</label>
                </div>;
        } else {
            let selectedTimes = selTimes.filter(times => times.times.length > 0);
            availabilityDisplay = selectedTimes.map(selected => {
                const timeBlocks = selected.times.map(time => 
                    <TimeButtons time={time} day={selected.day} 
                        clickHandler={this.handleClick}
                    />
                // <button 
                //     className='timeBlock' 
                //     onClick={this.handleClick}
                //     style={{backgroundColor: this.state.bgColor, color: this.state.textColor}}
                //     key={selected.day+time}
                //     day={selected.day}
                //     time={time}>
                //     {time}
                // </button>
                );
                
                return (<div className='buddyTimeChoices' key={selected.day}>
                    <label>{selected.day}</label>
                    <br></br>
                    {timeBlocks}
                </div>);
            });
        }

        let userName = localStorage.getItem('name');

        return (
            <div className='bigText'>
                <h3>Here are some good times for {userName}, do any of
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
                <button className='nextBtn' onClick={this.handleNext}>
                    Next
                </button>
                <br></br>
                    <Link to='/noMatchTime'>None of these times work for me</Link>
            </div>
        );
    }
}

export default BuddyTimePicker;