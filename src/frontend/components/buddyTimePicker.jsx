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
                    time: '',
                    bgColor: 'white',
                    textColor: 'black'
                }
            ]
        }
    }


    handleClick = (e) => {
        e.preventDefault();
        if (this.state.bgColor === 'white') {
            this.setState({
                bgColor: 'rgb(0,33,71)',
                textColor: 'white'
            });
        } else {
            this.setState({
                bgColor: 'white',
                textColor: 'black'
            });
        }
        
        // this.props.clickHandler(this.props.time, this.props.day);
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
                <button 
                    className='timeBlock' 
                    onClick={this.handleClick}
                    style={{backgroundColor: this.state.bgColor, color: this.state.textColor}}>{time}
                </button>
            );
                
                return (<div className='buddyTimeChoices' key={selected.day}>
                    <label>{selected.day}</label>
                    <br></br>
                    {timeBlocks}
                </div>);
            });
        }

        return (
            <div className='bigText'>
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
                <button className='nextBtn'>
                    <Link to='/thanks'>Next</Link>
                </button>
                <br></br>
                    <Link to='/noMatchTime'>None of these times work for me</Link>
            </div>
        );
    }
}

export default BuddyTimePicker;