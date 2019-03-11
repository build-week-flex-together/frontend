import React from 'react';
import { Link } from 'react-router-dom';

const TimePicker = () => {
    return (
        <div>
            <h3>What's a good time to complete the program?</h3>
            <p>To complete the beta we are asking that people commit to one
            30-minute time block once per week. Please choose which times work well for you.</p>
            <h4>Time Zone: </h4>
            <select>
                <option value='Pacific Time'>Pacific Time (Los Angeles)</option>
                <option value='Mountain Time'>Mountain Time (Denver)</option>
                <option value='Central Time'>Central Time (Chicago)</option>
                <option value='Eastern Time'>Eastern Time (New York)</option>
            </select>
            <button>
                <Link to='/addBuddy'>Next</Link>
            </button>
        </div>
    );
}

export default TimePicker;