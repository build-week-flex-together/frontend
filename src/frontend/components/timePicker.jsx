import React from 'react';
import { Link } from 'react-router-dom';

class TimePicker extends React.Component {
    constructor() {
        super();
        this.state = { 
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

    // local storage - when user updates state
    componentDidUpdate() {
        localStorage.setItem('timePicker', JSON.stringify(this.state));
    }

    // e handler for dropdown menu of time zones
    handleTimeZone = (e) => {
        this.setState({ timeZones: e.target.value })
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
                    <select>  
                        <option value='America/Los_Angeles'>Pacific Time (Los Angeles)</option>
                        <option value='Mountain/Denver'>Mountain Time (Denver)</option>
                        <option value='Central/Chicago'>Central Time (Chicago)</option>
                        <option value='Eastern/NYC'>Eastern Time (New York)</option>
                    </select>
                    {/* Time Range Picker to go here */}
                    <button>
                        <Link to='/addBuddy'>Next</Link>
                    </button>
                </form>
            </div>
        );
    }
}

export default TimePicker;