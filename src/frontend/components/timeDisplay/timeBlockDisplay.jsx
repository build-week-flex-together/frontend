import React from 'react';
import TimeButtons from './timeButtons';
import './timeDisplay.css';

const times = [
    '12:00 am', '12:30 am', '1:00 am', '1:30 am', '2:00 am', '2:30 am', '3:00 am', '3:30 am', '4:00 am', '4:30 am',
    '5:00 am', '5:30 am', '6:00 am', '6:30 am', '7:00 am', '7:30 am', '8:00 am', '8:30 am', '9:00 am', '9:30 am',
    '10:00 am', '10:30 am', '11:00 am', '11:30 am',

    '12:00 pm', '12:30 pm', '1:00 pm', '1:30 pm', '2:00 pm', '2:30 pm', '3:00 pm', '3:30 pm', '4:00 pm', '4:30 pm',
    '5:00 pm', '5:30 pm', '6:00 pm', '6:30 pm', '7:00 pm', '7:30 pm', '8:00 pm', '8:30 pm', '9:00 pm', '9:30 pm',
    '10:00 pm', '10:30 pm', '11:00 pm', '11:30 pm'
]

const days = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
]

class TimeBlockDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTimes:[
                {
                    day: 'Sunday',
                    times: []
                },
                {
                    day: 'Monday',
                    times: []
                },
                {
                    day: 'Tuesday',
                    times: []
                },
                {
                    day: 'Wednesday',
                    times: []
                },
                {
                    day: 'Thursday',
                    times: []
                },
                {
                    day: 'Friday',
                    times: []
                },
                {
                    day: 'Saturday',
                    times: []
                },
            ]
        }

        this.handleChosenTime = this.handleChosenTime.bind(this);
    }

    handleChosenTime = (time, day) => {
        let selTimes = this.state.selectedTimes.slice();
        let chosenDay = selTimes.filter(selTime => selTime.day === day)[0];
        let chosenTime = chosenDay.times.filter(selTime => selTime === time);
        if (chosenTime.length > 0) {
            chosenDay.times = chosenDay.times.filter(selTime => selTime !== time);
        } else {
            chosenDay.times.push(time);
        }

        if (chosenDay.times.length > 1){
            chosenDay.times.sort((a, b) => {
                return new Date('1970/01/01 ' + a) - new Date('1970/01/01' + b);
            });
        }
        localStorage.setItem('selectedTimes', JSON.stringify(selTimes));
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