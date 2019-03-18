import React from 'react';
import TimeBlockDisplay from './timeDisplay/timeBlockDisplay';


class TimePicker extends React.Component {
    constructor() {
        super();
        this.state = { 
            timeZone: 'America/Los_Angeles'
        };

        this.handleTimeZone = this.handleTimeZone.bind(this);
        this.handleNext = this.handleNext.bind(this);
    }

    // e handler for dropdown menu of time zones
    handleTimeZone = (e) => {
        this.setState({ 
            timeZone: e.target.value 
        });
    }

    handleNext = () => {
        localStorage.setItem('timeZone', this.state.timeZone);
        this.props.history.push('/addBuddy');
    }

    render() {
        return (
            <div>
                <form>
                    <h3>What's a good time to complete the program?</h3>
                    <p>To complete the beta we are asking that people commit to one
                    30-minute time block once per week. Please choose which times work well for you.</p>
                    <h4>Time Zone: </h4>
                    {/* dropdown for time zones */}
                    <select onChange={this.handleTimeZone} value={this.state.timeZone}>  
                        <option value='America/Los_Angeles'>Pacific Time (Los Angeles)</option>
                        <option value='America/Denver'>Mountain Time (Denver)</option>
                        <option value='America/Chicago'>Central Time (Chicago)</option>
                        <option value='America/New_York'>Eastern Time (New York)</option>
                    </select>
                    
                    {/* Time Range Picker to go here */}
                    <div>
                        <TimeBlockDisplay />
                    </div>

                    <button onClick={this.handleNext}>Next</button>
                </form>
            </div>
        );
    }
}

export default TimePicker;