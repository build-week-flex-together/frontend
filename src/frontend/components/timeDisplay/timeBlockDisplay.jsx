import React from 'react';
import TimeButtons from './timeButtons';
import './timeDisplay.css';

const times = [
    '12:00am', '12:30am', '1:00am', '1:30am', '2:00am', '2:30am', '3:00am', '3:30am', '4:00am', '4:30am',
    '5:00am', '5:30am', '6:00am', '6:30am', '7:00am', '7:30am', '8:00am', '8:30am', '9:00am', '9:30am',
    '10:00am', '10:30am', '11:00am', '11:30am',

    '12:00pm', '12:30pm', '1:00pm', '1:30pm', '2:00pm', '2:30pm', '3:00pm', '3:30pm', '4:00pm', '4:30pm',
    '5:00pm', '5:30pm', '6:00pm', '6:30pm', '7:00pm', '7:30pm', '8:00pm', '8:30pm', '9:00pm', '9:30pm',
    '10:00pm', '10:30pm', '11:00pm', '11:30pm'
]

const days = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
]

class TimeBlockDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTimes:[]
        }

        this.handleChosenTime = this.handleChosenTime.bind(this);
    }

    handleChosenTime = (time, day) => {
        let times = this.state.selectedTimes.slice();
        let filteredTimes = times.filter(x => x.day === day && x.time === time);
        if(filteredTimes.length > 0) {
            times=times.filter(x => x.day !== day || x.time !== time);
        } else {
            let timeObj = {day: day, time: time};
            times.push(timeObj);
        }
        this.setState({selectedTimes: times});
        localStorage.setItem('selectedTimes', JSON.stringify(times));
    }

    render() {

        const dayBlocks = days.map(day => {
            let timeBlocks = times.map(time => <TimeButtons time={time} key={time+day} day={day} clickHandler ={this.handleChosenTime} />);
            return (
                <div className='dayWrapper' key={day}>
                    <label>{day}</label>
                    {timeBlocks}
                </div>
            );
        });

        return (
            <div className='timePickerContainer'>
                {dayBlocks}
            </div>
        )
    };
};

export default TimeBlockDisplay;