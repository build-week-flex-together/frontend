import React from 'react';
import TimeButtons from './timeButtons';
import './timeDisplay.css';

 const times = [
    '12:00', '12:30', '1:00', '1:30', '2:00', '2:30', '3:00', '3:30', '4:00', '4:30',
    '5:00', '5:30', '6:00', '6:30', '7:00', '7:30', '8:00', '8:30', '9:00', '9:30',
    '10:00', '10:30', '11:00', '11:30'
]

const days = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
]

class TimeBlockDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            day: '',
            time: ''
        }

        this.handleChosenTime = this.handleChosenTime.bind(this);
    }

    // handler for chosen time button(s)
    handleChosenTime = (time, day) => {
        this.setState({
            day: day, 
            time: time
        });
        console.log(`You clicked ${time} and ${day}`);
    }

    // PLEASE FEEL FREE TO LAUGH AT THIS.
    // this should all be updated to two nested arrays, but I got in too deep trying to figure something out
    render() {

    const timeBlocksAM = times.map(x => <TimeButtons time={`${x} am`} />);
    const timeBlocksPM = times.map(x => <TimeButtons time={`${x} pm`} />);
    const dayBlock = days.map(x => value={days});

    return (
        <div className="timePickerContainer">
            <div className='dayWrapper'>
                <label>Sunday</label>

                {timeBlocksAM}
                {timeBlocksPM}

                {/* <TimeButtons time={'12:00am'} day={'Sunday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'12:30am'} day={'Sunday'} clickHandler={this.handleChosenTime} />
                <TimeButtons time={'1:00am'} day={'Sunday'} clickHandler={this.handleChosenTime} />
                <TimeButtons time={'1:30am'} day={'Sunday'} clickHandler={this.handleChosenTime} />
                <TimeButtons time={'2:00am'} day={'Sunday'} clickHandler={this.handleChosenTime} />
                <TimeButtons time={'2:30am'} day={'Sunday'} clickHandler={this.handleChosenTime} />
                <TimeButtons time={'3:00am'} day={'Sunday'} clickHandler={this.handleChosenTime} />
                <TimeButtons time={'3:30am'} day={'Sunday'} clickHandler={this.handleChosenTime} />
                <TimeButtons time={'4:00am'} day={'Sunday'} clickHandler={this.handleChosenTime} />
                <TimeButtons time={'4:30am'} day={'Sunday'} clickHandler={this.handleChosenTime} />
                <TimeButtons time={'5:00am'} day={'Sunday'} clickHandler={this.handleChosenTime} />
                <TimeButtons time={'5:30am'} day={'Sunday'} clickHandler={this.handleChosenTime} />
                <TimeButtons time={'6:00am'} day={'Sunday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'6:30am'} day={'Sunday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'7:00am'} day={'Sunday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'7:30am'} day={'Sunday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'8:00am'} day={'Sunday'}clickHandler={this.handleChosenTime} />
                <TimeButtons time={'8:30am'} day={'Sunday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'9:00am'} day={'Sunday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'9:30am'} day={'Sunday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'10:00am'} day={'Sunday'}clickHandler={this.handleChosenTime} />
                <TimeButtons time={'10:30am'} day={'Sunday'}clickHandler={this.handleChosenTime} />
                <TimeButtons time={'11:00am'} day={'Sunday'}clickHandler={this.handleChosenTime} />
                <TimeButtons time={'11:30am'} day={'Sunday'}clickHandler={this.handleChosenTime} />
                <TimeButtons time={'12:00pm'} day={'Sunday'}clickHandler={this.handleChosenTime} />
                <TimeButtons time={'12:30pm'} day={'Sunday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'1:00pm'} day={'Sunday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'1:30pm'} day={'Sunday'}clickHandler={this.handleChosenTime} />
                <TimeButtons time={'2:00pm'} day={'Sunday'}clickHandler={this.handleChosenTime} />
                <TimeButtons time={'2:30pm'} day={'Sunday'}clickHandler={this.handleChosenTime} />
                <TimeButtons time={'3:00pm'} day={'Sunday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'3:30pm'} day={'Sunday'}clickHandler={this.handleChosenTime} />
                <TimeButtons time={'4:00pm'} day={'Sunday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'4:30pm'} day={'Sunday'}clickHandler={this.handleChosenTime} />
                <TimeButtons time={'5:00pm'} day={'Sunday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'5:30pm'} day={'Sunday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'6:00pm'} day={'Sunday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'6:30pm'} day={'Sunday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'7:00pm'} day={'Sunday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'7:30pm'} day={'Sunday'}clickHandler={this.handleChosenTime} />
                <TimeButtons time={'8:00pm'} day={'Sunday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'8:30pm'} day={'Sunday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'9:00pm'} day={'Sunday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'9:30pm'} day={'Sunday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'10:00pm'} day={'Sunday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'10:30pm'} day={'Sunday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'11:00pm'} day={'Sunday'}clickHandler={this.handleChosenTime} />
                <TimeButtons time={'11:30pm'} day={'Sunday'} clickHandler={this.handleChosenTime}/> */}
            </div>
            

            <div className='dayWrapper'>
                <label>Monday</label>
                <TimeButtons time={'12:00am'} day={'Monday'} clickHandler={this.handleChosenTime} />
                <TimeButtons time={'12:30am'} day={'Monday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'1:00am'} day={'Monday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'1:30am'} day={'Monday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'2:00am'} day={'Monday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'2:30am'} day={'Monday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'3:00am'} day={'Monday'}clickHandler={this.handleChosenTime} />
                <TimeButtons time={'3:30am'} day={'Monday'}clickHandler={this.handleChosenTime} />
                <TimeButtons time={'4:00am'} day={'Monday'}clickHandler={this.handleChosenTime} />
                <TimeButtons time={'4:30am'} day={'Monday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'5:00am'} day={'Monday'}clickHandler={this.handleChosenTime} />
                <TimeButtons time={'5:30am'} day={'Monday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'6:00am'} day={'Monday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'6:30am'} day={'Monday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'7:00am'} day={'Monday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'7:30am'} day={'Monday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'8:00am'} day={'Monday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'8:30am'} day={'Monday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'9:00am'} day={'Monday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'9:30am'} day={'Monday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'10:00am'} day={'Monday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'10:30am'} day={'Monday'}clickHandler={this.handleChosenTime} />
                <TimeButtons time={'11:00am'} day={'Monday'}clickHandler={this.handleChosenTime} />
                <TimeButtons time={'11:30am'} day={'Monday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'12:00pm'} day={'Monday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'12:30pm'} day={'Monday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'1:00pm'} day={'Monday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'1:30pm'} day={'Monday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'2:00pm'} day={'Monday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'2:30pm'} day={'Monday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'3:00pm'} day={'Monday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'3:30pm'} day={'Monday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'4:00pm'} day={'Monday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'4:30pm'} day={'Monday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'5:00pm'} day={'Monday'}clickHandler={this.handleChosenTime} />
                <TimeButtons time={'5:30pm'} day={'Monday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'6:00pm'} day={'Monday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'6:30pm'} day={'Monday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'7:00pm'} day={'Monday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'7:30pm'} day={'Monday'}clickHandler={this.handleChosenTime} />
                <TimeButtons time={'8:00pm'} day={'Monday'}clickHandler={this.handleChosenTime} />
                <TimeButtons time={'8:30pm'} day={'Monday'}clickHandler={this.handleChosenTime} />
                <TimeButtons time={'9:00pm'} day={'Monday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'9:30pm'} day={'Monday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'10:00pm'} day={'Monday'}clickHandler={this.handleChosenTime} />
                <TimeButtons time={'10:30pm'} day={'Monday'}clickHandler={this.handleChosenTime} />
                <TimeButtons time={'11:00pm'} day={'Monday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'11:30pm'} day={'Monday'}clickHandler={this.handleChosenTime} />
            </div>

            <div className='dayWrapper'>
                <label>Tuesday</label>
                <TimeButtons time={'12:00am'} day={'Tuesday'}clickHandler={this.handleChosenTime} />
                <TimeButtons time={'12:30am'} day={'Tuesday'}clickHandler={this.handleChosenTime} />
                <TimeButtons time={'1:00am'} day={'Tuesday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'1:30am'} day={'Tuesday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'2:00am'} day={'Tuesday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'2:30am'} day={'Tuesday'}clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'3:00am'} day={'Tuesday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'3:30am'} day={'Tuesday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'4:00am'} day={'Tuesday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'4:30am'} day={'Tuesday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'5:00am'} day={'Tuesday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'5:30am'} day={'Tuesday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'6:00am'} day={'Tuesday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'6:30am'} day={'Tuesday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'7:00am'} day={'Tuesday'}clickHandler={this.handleChosenTime} />
                <TimeButtons time={'7:30am'} day={'Tuesday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'8:00am'} day={'Tuesday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'8:30am'} day={'Tuesday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'9:00am'} day={'Tuesday'} clickHandler={this.handleChosenTime} />
                <TimeButtons time={'9:30am'} day={'Tuesday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'10:00am'} day={'Tuesday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'10:30am'} day={'Tuesday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'11:00am'} day={'Tuesday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'11:30am'} day={'Tuesday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'12:00pm'} day={'Tuesday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'12:30pm'} day={'Tuesday'}clickHandler={this.handleChosenTime} />
                <TimeButtons time={'1:00pm'} day={'Tuesday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'1:30pm'} day={'Tuesday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'2:00pm'} day={'Tuesday'}clickHandler={this.handleChosenTime} />
                <TimeButtons time={'2:30pm'} day={'Tuesday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'3:00pm'} day={'Tuesday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'3:30pm'} day={'Tuesday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'4:00pm'} day={'Tuesday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'4:30pm'} day={'Tuesday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'5:00pm'} day={'Tuesday'}clickHandler={this.handleChosenTime} />
                <TimeButtons time={'5:30pm'} day={'Tuesday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'6:00pm'} day={'Tuesday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'6:30pm'} day={'Tuesday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'7:00pm'} day={'Tuesday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'7:30pm'} day={'Tuesday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'8:00pm'} day={'Tuesday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'8:30pm'} day={'Tuesday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'9:00pm'} day={'Tuesday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'9:30pm'} day={'Tuesday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'10:00pm'} day={'Tuesday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'10:30pm'} day={'Tuesday'}clickHandler={this.handleChosenTime} />
                <TimeButtons time={'11:00pm'} day={'Tuesday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'11:30pm'} day={'Tuesday'}clickHandler={this.handleChosenTime} />
            </div>

            <div className='dayWrapper'>
                <label>Wednesday</label>
                <TimeButtons time={'12:00am'} day={'Wednesday'}clickHandler={this.handleChosenTime} />
                <TimeButtons time={'12:30am'} day={'Wednesday'}clickHandler={this.handleChosenTime} />
                <TimeButtons time={'1:00am'} day={'Wednesday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'1:30am'} day={'Wednesday'}clickHandler={this.handleChosenTime} />
                <TimeButtons time={'2:00am'} day={'Wednesday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'2:30am'} day={'Wednesday'}clickHandler={this.handleChosenTime} />
                <TimeButtons time={'3:00am'} day={'Wednesday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'3:30am'} day={'Wednesday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'4:00am'} day={'Wednesday'}clickHandler={this.handleChosenTime} />
                <TimeButtons time={'4:30am'} day={'Wednesday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'5:00am'} day={'Wednesday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'5:30am'} day={'Wednesday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'6:00am'} day={'Wednesday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'6:30am'} day={'Wednesday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'7:00am'} day={'Wednesday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'7:30am'} day={'Wednesday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'8:00am'} day={'Wednesday'}clickHandler={this.handleChosenTime} />
                <TimeButtons time={'8:30am'} day={'Wednesday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'9:00am'} day={'Wednesday'}clickHandler={this.handleChosenTime} />
                <TimeButtons time={'9:30am'} day={'Wednesday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'10:00am'} day={'Wednesday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'10:30am'} day={'Wednesday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'11:00am'} day={'Wednesday'}clickHandler={this.handleChosenTime} />
                <TimeButtons time={'11:30am'} day={'Wednesday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'12:00pm'} day={'Wednesday'}clickHandler={this.handleChosenTime} />
                <TimeButtons time={'12:30pm'} day={'Wednesday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'1:00pm'} day={'Wednesday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'1:30pm'} day={'Wednesday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'2:00pm'} day={'Wednesday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'2:30pm'} day={'Wednesday'}clickHandler={this.handleChosenTime} />
                <TimeButtons time={'3:00pm'} day={'Wednesday'}clickHandler={this.handleChosenTime} />
                <TimeButtons time={'3:30pm'} day={'Wednesday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'4:00pm'} day={'Wednesday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'4:30pm'} day={'Wednesday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'5:00pm'} day={'Wednesday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'5:30pm'} day={'Wednesday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'6:00pm'} day={'Wednesday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'6:30pm'} day={'Wednesday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'7:00pm'} day={'Wednesday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'7:30pm'} day={'Wednesday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'8:00pm'} day={'Wednesday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'8:30pm'} day={'Wednesday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'9:00pm'} day={'Wednesday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'9:30pm'} day={'Wednesday'}clickHandler={this.handleChosenTime} />
                <TimeButtons time={'10:00pm'} day={'Wednesday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'10:30pm'} day={'Wednesday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'11:00pm'} day={'Wednesday'}clickHandler={this.handleChosenTime} />
                <TimeButtons time={'11:30pm'} day={'Wednesday'}clickHandler={this.handleChosenTime} />
            </div>

            <div className='dayWrapper'>
            <label>Thursday</label>
                <TimeButtons time={'12:00am'} day={'Thursday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'12:30am'} day={'Thursday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'1:00am'} day={'Thursday'}clickHandler={this.handleChosenTime} />
                <TimeButtons time={'1:30am'} day={'Thursday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'2:00am'} day={'Thursday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'2:30am'} day={'Thursday'}clickHandler={this.handleChosenTime} />
                <TimeButtons time={'3:00am'} day={'Thursday'}clickHandler={this.handleChosenTime} />
                <TimeButtons time={'3:30am'} day={'Thursday'}clickHandler={this.handleChosenTime} />
                <TimeButtons time={'4:00am'} day={'Thursday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'4:30am'} day={'Thursday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'5:00am'} day={'Thursday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'5:30am'} day={'Thursday'}clickHandler={this.handleChosenTime} />
                <TimeButtons time={'6:00am'} day={'Thursday'}clickHandler={this.handleChosenTime} />
                <TimeButtons time={'6:30am'} day={'Thursday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'7:00am'} day={'Thursday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'7:30am'} day={'Thursday'}clickHandler={this.handleChosenTime} />
                <TimeButtons time={'8:00am'} day={'Thursday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'8:30am'} day={'Thursday'}clickHandler={this.handleChosenTime} />
                <TimeButtons time={'9:00am'} day={'Thursday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'9:30am'} day={'Thursday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'10:00am'} day={'Thursday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'10:30am'} day={'Thursday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'11:00am'} day={'Thursday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'11:30am'} day={'Thursday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'12:00pm'} day={'Thursday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'12:30pm'} day={'Thursday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'1:00pm'} day={'Thursday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'1:30pm'} day={'Thursday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'2:00pm'} day={'Thursday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'2:30pm'} day={'Thursday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'3:00pm'} day={'Thursday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'3:30pm'} day={'Thursday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'4:00pm'} day={'Thursday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'4:30pm'} day={'Thursday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'5:00pm'} day={'Thursday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'5:30pm'} day={'Thursday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'6:00pm'} day={'Thursday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'6:30pm'} day={'Thursday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'7:00pm'} day={'Thursday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'7:30pm'} day={'Thursday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'8:00pm'} day={'Thursday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'8:30pm'} day={'Thursday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'9:00pm'} day={'Thursday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'9:30pm'} day={'Thursday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'10:00pm'} day={'Thursday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'10:30pm'} day={'Thursday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'11:00pm'} day={'Thursday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'11:30pm'} day={'Thursday'}clickHandler={this.handleChosenTime}/>
            </div>

            <div className='dayWrapper'>
                <label>Friday</label>
                <TimeButtons time={'12:00am'} day={'Friday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'12:30am'} day={'Friday'}clickHandler={this.handleChosenTime} />
                <TimeButtons time={'1:00am'} day={'Friday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'1:30am'} day={'Friday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'2:00am'} day={'Friday'}clickHandler={this.handleChosenTime} />
                <TimeButtons time={'2:30am'} day={'Friday'}clickHandler={this.handleChosenTime} />
                <TimeButtons time={'3:00am'} day={'Friday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'3:30am'} day={'Friday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'4:00am'} day={'Friday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'4:30am'} day={'Friday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'5:00am'} day={'Friday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'5:30am'} day={'Friday'}clickHandler={this.handleChosenTime} />
                <TimeButtons time={'6:00am'} day={'Friday'}clickHandler={this.handleChosenTime} />
                <TimeButtons time={'6:30am'} day={'Friday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'7:00am'} day={'Friday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'7:30am'} day={'Friday'}clickHandler={this.handleChosenTime} />
                <TimeButtons time={'8:00am'} day={'Friday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'8:30am'} day={'Friday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'9:00am'} day={'Friday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'9:30am'} day={'Friday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'10:00am'} day={'Friday'}clickHandler={this.handleChosenTime} />
                <TimeButtons time={'10:30am'} day={'Friday'}clickHandler={this.handleChosenTime} />
                <TimeButtons time={'11:00am'} day={'Friday'}clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'11:30am'} day={'Friday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'12:00pm'} day={'Friday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'12:30pm'} day={'Friday'}clickHandler={this.handleChosenTime} />
                <TimeButtons time={'1:00pm'} day={'Friday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'1:30pm'} day={'Friday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'2:00pm'} day={'Friday'}clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'2:30pm'} day={'Friday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'3:00pm'} day={'Friday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'3:30pm'} day={'Friday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'4:00pm'} day={'Friday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'4:30pm'} day={'Friday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'5:00pm'} day={'Friday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'5:30pm'} day={'Friday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'6:00pm'} day={'Friday'}clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'6:30pm'} day={'Friday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'7:00pm'} day={'Friday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'7:30pm'} day={'Friday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'8:00pm'} day={'Friday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'8:30pm'} day={'Friday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'9:00pm'} day={'Friday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'9:30pm'} day={'Friday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'10:00pm'} day={'Friday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'10:30pm'} day={'Friday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'11:00pm'} day={'Friday'}clickHandler={this.handleChosenTime} />
                <TimeButtons time={'11:30pm'} day={'Friday'} clickHandler={this.handleChosenTime}/>
            </div>

            <div className='dayWrapper'>
                <label>Saturday</label>
                <TimeButtons time={'12:00am'} day={'Saturday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'12:30am'} day={'Saturday'}clickHandler={this.handleChosenTime} />
                <TimeButtons time={'1:00am'} day={'Saturday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'1:30am'} day={'Saturday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'2:00am'} day={'Saturday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'2:30am'} day={'Saturday'}clickHandler={this.handleChosenTime} />
                <TimeButtons time={'3:00am'} day={'Saturday'}clickHandler={this.handleChosenTime} />
                <TimeButtons time={'3:30am'} day={'Saturday'}clickHandler={this.handleChosenTime} />
                <TimeButtons time={'4:00am'} day={'Saturday'}clickHandler={this.handleChosenTime} />
                <TimeButtons time={'4:30am'} day={'Saturday'}clickHandler={this.handleChosenTime} />
                <TimeButtons time={'5:00am'} day={'Saturday'}clickHandler={this.handleChosenTime} />
                <TimeButtons time={'5:30am'} day={'Saturday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'6:00am'} day={'Saturday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'6:30am'} day={'Saturday'}clickHandler={this.handleChosenTime} />
                <TimeButtons time={'7:00am'} day={'Saturday'}clickHandler={this.handleChosenTime} />
                <TimeButtons time={'7:30am'} day={'Saturday'}clickHandler={this.handleChosenTime} />
                <TimeButtons time={'8:00am'} day={'Saturday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'8:30am'} day={'Saturday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'9:00am'} day={'Saturday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'9:30am'} day={'Saturday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'10:00am'} day={'Saturday'}clickHandler={this.handleChosenTime} />
                <TimeButtons time={'10:30am'} day={'Saturday'}clickHandler={this.handleChosenTime} />
                <TimeButtons time={'11:00am'} day={'Saturday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'11:30am'} day={'Saturday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'12:00pm'} day={'Saturday'}clickHandler={this.handleChosenTime} />
                <TimeButtons time={'12:30pm'} day={'Saturday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'1:00pm'} day={'Saturday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'1:30pm'} day={'Saturday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'2:00pm'} day={'Saturday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'2:30pm'} day={'Saturday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'3:00pm'} day={'Saturday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'3:30pm'} day={'Saturday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'4:00pm'} day={'Saturday'}clickHandler={this.handleChosenTime} />
                <TimeButtons time={'4:30pm'} day={'Saturday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'5:00pm'} day={'Saturday'}clickHandler={this.handleChosenTime} />
                <TimeButtons time={'5:30pm'} day={'Saturday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'6:00pm'} day={'Saturday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'6:30pm'} day={'Saturday'}clickHandler={this.handleChosenTime} />
                <TimeButtons time={'7:00pm'} day={'Saturday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'7:30pm'} day={'Saturday'}clickHandler={this.handleChosenTime} />
                <TimeButtons time={'8:00pm'} day={'Saturday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'8:30pm'} day={'Saturday'}clickHandler={this.handleChosenTime} />
                <TimeButtons time={'9:00pm'} day={'Saturday'}clickHandler={this.handleChosenTime} />
                <TimeButtons time={'9:30pm'} day={'Saturday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'10:00pm'} day={'Saturday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'10:30pm'} day={'Saturday'} clickHandler={this.handleChosenTime}/>
                <TimeButtons time={'11:00pm'} day={'Saturday'}clickHandler={this.handleChosenTime} />
                <TimeButtons time={'11:30pm'} day={'Saturday'} clickHandler={this.handleChosenTime}/>
            </div>
        </div>
    )};
};
 
export default TimeBlockDisplay;