import React from 'react';
import axios from 'axios';

class TimeAssignment extends React.Component 
{
    constructor() {
        super();
        this.state = {
        }
    }

    render() {
        let availableTimes = JSON.parse(localStorage.getItem('availabilityTimes'));
        let selectedTimes = JSON.parse(localStorage.getItem('selectedTimes'));
        let availability = <div></div>;

        let matchedTimes = selectedTimes.filter(selected => {
            let availableDay = availableTimes.filter(avail => avail.day === selected.day && avail.times.length > 0);
            if (availableDay.length > 0) {
                return true;
            } else {
                return false;
            }
        });

        if (matchedTimes.length > 0) {
            availability = 
                <div>
                    {matchedTimes[0].day} @ {matchedTimes[0].times[0]}
                </div>;
        }
        
        return (
            <div className='bigText'>
                <p>Thank you! For the Next 4 weeks you and {localStorage.getItem('name')}
                    will be working out at
                </p>
                {/* <h1>DAY AND TIME WILL GO HERE</h1> */}
                {availability}
                <p>Don't worry we'll send you a reminder email
                and text.
                </p>
            </div>
        );
    }
}

export default TimeAssignment;
