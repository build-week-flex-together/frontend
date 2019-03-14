import React from 'react';
import './timeDisplay.css';


// creates a clickable button that will display a time block
const TimeButtons = (props) => {
    const handleClick = (e) => {
        e.preventDefault();
        props.clickHandler(props.time, props.day);
    };

    return (
        <div>
            <button value={props.time} onClick={handleClick}>{props.time}</button>
        </div>
    );
};

export default TimeButtons; 