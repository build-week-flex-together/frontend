import React from 'react';
import TimeButtons from './timeButtons';
import './timeDisplay.css';

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

    // this should all be updated to two nested arrays
    render() {
    return (
        <div className="timePickerContainer">
            <div className='dayWrapper'>
                <label>Sunday</label>
                <TimeButtons time={'12:00am'} day={'Sunday'} onclick={this.handleChosenTime}/>
                <TimeButtons time={'12:30am'} day={'Sunday'} />
                <TimeButtons time={'1:00am'} day={'Sunday'} />
                <TimeButtons time={'1:30am'} day={'Sunday'} />
                <TimeButtons time={'2:00am'} day={'Sunday'} />
                <TimeButtons time={'2:30am'} day={'Sunday'} />
                <TimeButtons time={'3:00am'} day={'Sunday'} />
                <TimeButtons time={'3:30am'} day={'Sunday'} />
                <TimeButtons time={'4:00am'} day={'Sunday'} />
                <TimeButtons time={'4:30am'} day={'Sunday'} />
                <TimeButtons time={'5:00am'} day={'Sunday'} />
                <TimeButtons time={'5:30am'} day={'Sunday'} />
                <TimeButtons time={'6:00am'} day={'Sunday'} />
                <TimeButtons time={'6:30am'} day={'Sunday'} />
                <TimeButtons time={'7:00am'} day={'Sunday'} />
                <TimeButtons time={'7:30am'} day={'Sunday'} />
                <TimeButtons time={'8:00am'} day={'Sunday'} />
                <TimeButtons time={'8:30am'} day={'Sunday'} />
                <TimeButtons time={'9:00am'} day={'Sunday'} />
                <TimeButtons time={'9:30am'} day={'Sunday'} />
                <TimeButtons time={'10:00am'} day={'Sunday'} />
                <TimeButtons time={'10:30am'} day={'Sunday'} />
                <TimeButtons time={'11:00am'} day={'Sunday'} />
                <TimeButtons time={'11:30am'} day={'Sunday'} />
                <TimeButtons time={'12:00pm'} day={'Sunday'} />
                <TimeButtons time={'12:30pm'} day={'Sunday'} />
                <TimeButtons time={'1:00pm'} day={'Sunday'} />
                <TimeButtons time={'1:30pm'} day={'Sunday'} />
                <TimeButtons time={'2:00pm'} day={'Sunday'} />
                <TimeButtons time={'2:30pm'} day={'Sunday'} />
                <TimeButtons time={'3:00pm'} day={'Sunday'} />
                <TimeButtons time={'3:30pm'} day={'Sunday'} />
                <TimeButtons time={'4:00pm'} day={'Sunday'} />
                <TimeButtons time={'4:30pm'} day={'Sunday'} />
                <TimeButtons time={'5:00pm'} day={'Sunday'} />
                <TimeButtons time={'5:30pm'} day={'Sunday'} />
                <TimeButtons time={'6:00pm'} day={'Sunday'} />
                <TimeButtons time={'6:30pm'} day={'Sunday'} />
                <TimeButtons time={'7:00pm'} day={'Sunday'} />
                <TimeButtons time={'7:30pm'} day={'Sunday'} />
                <TimeButtons time={'8:00pm'} day={'Sunday'} />
                <TimeButtons time={'8:30pm'} day={'Sunday'} />
                <TimeButtons time={'9:00pm'} day={'Sunday'} />
                <TimeButtons time={'9:30pm'} day={'Sunday'} />
                <TimeButtons time={'10:00pm'} day={'Sunday'} />
                <TimeButtons time={'10:30pm'} day={'Sunday'} />
                <TimeButtons time={'11:00pm'} day={'Sunday'} />
                <TimeButtons time={'11:30pm'} day={'Sunday'} />
            </div>
            

            <div className='dayWrapper'>
                <label>Monday</label>
                <TimeButtons time={'12:00am'} day={'Monday'} />
                <TimeButtons time={'12:30am'} day={'Monday'} />
                <TimeButtons time={'1:00am'} day={'Monday'} />
                <TimeButtons time={'1:30am'} day={'Monday'} />
                <TimeButtons time={'2:00am'} day={'Monday'} />
                <TimeButtons time={'2:30am'} day={'Monday'} />
                <TimeButtons time={'3:00am'} day={'Monday'} />
                <TimeButtons time={'3:30am'} day={'Monday'} />
                <TimeButtons time={'4:00am'} day={'Monday'} />
                <TimeButtons time={'4:30am'} day={'Monday'} />
                <TimeButtons time={'5:00am'} day={'Monday'} />
                <TimeButtons time={'5:30am'} day={'Monday'} />
                <TimeButtons time={'6:00am'} day={'Monday'} />
                <TimeButtons time={'6:30am'} day={'Monday'} />
                <TimeButtons time={'7:00am'} day={'Monday'} />
                <TimeButtons time={'7:30am'} day={'Monday'} />
                <TimeButtons time={'8:00am'} day={'Monday'} />
                <TimeButtons time={'8:30am'} day={'Monday'} />
                <TimeButtons time={'9:00am'} day={'Monday'} />
                <TimeButtons time={'9:30am'} day={'Monday'} />
                <TimeButtons time={'10:00am'} day={'Monday'} />
                <TimeButtons time={'10:30am'} day={'Monday'} />
                <TimeButtons time={'11:00am'} day={'Monday'} />
                <TimeButtons time={'11:30am'} day={'Monday'} />
                <TimeButtons time={'12:00pm'} day={'Monday'} />
                <TimeButtons time={'12:30pm'} day={'Monday'} />
                <TimeButtons time={'1:00pm'} day={'Monday'} />
                <TimeButtons time={'1:30pm'} day={'Monday'} />
                <TimeButtons time={'2:00pm'} day={'Monday'} />
                <TimeButtons time={'2:30pm'} day={'Monday'} />
                <TimeButtons time={'3:00pm'} day={'Monday'} />
                <TimeButtons time={'3:30pm'} day={'Monday'} />
                <TimeButtons time={'4:00pm'} day={'Monday'} />
                <TimeButtons time={'4:30pm'} day={'Monday'} />
                <TimeButtons time={'5:00pm'} day={'Monday'} />
                <TimeButtons time={'5:30pm'} day={'Monday'} />
                <TimeButtons time={'6:00pm'} day={'Monday'} />
                <TimeButtons time={'6:30pm'} day={'Monday'} />
                <TimeButtons time={'7:00pm'} day={'Monday'} />
                <TimeButtons time={'7:30pm'} day={'Monday'} />
                <TimeButtons time={'8:00pm'} day={'Monday'} />
                <TimeButtons time={'8:30pm'} day={'Monday'} />
                <TimeButtons time={'9:00pm'} day={'Monday'} />
                <TimeButtons time={'9:30pm'} day={'Monday'} />
                <TimeButtons time={'10:00pm'} day={'Monday'} />
                <TimeButtons time={'10:30pm'} day={'Monday'} />
                <TimeButtons time={'11:00pm'} day={'Monday'} />
                <TimeButtons time={'11:30pm'} day={'Monday'} />
            </div>

            <div className='dayWrapper'>
                <label>Tuesday</label>
                <TimeButtons time={'12:00am'} day={'Tuesday'} />
                <TimeButtons time={'12:30am'} day={'Tuesday'} />
                <TimeButtons time={'1:00am'} day={'Tuesday'} />
                <TimeButtons time={'1:30am'} day={'Tuesday'} />
                <TimeButtons time={'2:00am'} day={'Tuesday'} />
                <TimeButtons time={'2:30am'} day={'Tuesday'} />
                <TimeButtons time={'3:00am'} day={'Tuesday'} />
                <TimeButtons time={'3:30am'} day={'Tuesday'} />
                <TimeButtons time={'4:00am'} day={'Tuesday'} />
                <TimeButtons time={'4:30am'} day={'Tuesday'} />
                <TimeButtons time={'5:00am'} day={'Tuesday'} />
                <TimeButtons time={'5:30am'} day={'Tuesday'} />
                <TimeButtons time={'6:00am'} day={'Tuesday'} />
                <TimeButtons time={'6:30am'} day={'Tuesday'} />
                <TimeButtons time={'7:00am'} day={'Tuesday'} />
                <TimeButtons time={'7:30am'} day={'Tuesday'} />
                <TimeButtons time={'8:00am'} day={'Tuesday'} />
                <TimeButtons time={'8:30am'} day={'Tuesday'} />
                <TimeButtons time={'9:00am'} day={'Tuesday'} />
                <TimeButtons time={'9:30am'} day={'Tuesday'} />
                <TimeButtons time={'10:00am'} day={'Tuesday'} />
                <TimeButtons time={'10:30am'} day={'Tuesday'} />
                <TimeButtons time={'11:00am'} day={'Tuesday'} />
                <TimeButtons time={'11:30am'} day={'Tuesday'} />
                <TimeButtons time={'12:00pm'} day={'Tuesday'} />
                <TimeButtons time={'12:30pm'} day={'Tuesday'} />
                <TimeButtons time={'1:00pm'} day={'Tuesday'} />
                <TimeButtons time={'1:30pm'} day={'Tuesday'} />
                <TimeButtons time={'2:00pm'} day={'Tuesday'} />
                <TimeButtons time={'2:30pm'} day={'Tuesday'} />
                <TimeButtons time={'3:00pm'} day={'Tuesday'} />
                <TimeButtons time={'3:30pm'} day={'Tuesday'} />
                <TimeButtons time={'4:00pm'} day={'Tuesday'} />
                <TimeButtons time={'4:30pm'} day={'Tuesday'} />
                <TimeButtons time={'5:00pm'} day={'Tuesday'} />
                <TimeButtons time={'5:30pm'} day={'Tuesday'} />
                <TimeButtons time={'6:00pm'} day={'Tuesday'} />
                <TimeButtons time={'6:30pm'} day={'Tuesday'} />
                <TimeButtons time={'7:00pm'} day={'Tuesday'} />
                <TimeButtons time={'7:30pm'} day={'Tuesday'} />
                <TimeButtons time={'8:00pm'} day={'Tuesday'} />
                <TimeButtons time={'8:30pm'} day={'Tuesday'} />
                <TimeButtons time={'9:00pm'} day={'Tuesday'} />
                <TimeButtons time={'9:30pm'} day={'Tuesday'} />
                <TimeButtons time={'10:00pm'} day={'Tuesday'} />
                <TimeButtons time={'10:30pm'} day={'Tuesday'} />
                <TimeButtons time={'11:00pm'} day={'Tuesday'} />
                <TimeButtons time={'11:30pm'} day={'Tuesday'} />
            </div>

            <div className='dayWrapper'>
                <label>Wednesday</label>
                <TimeButtons time={'12:00am'} day={'Wednesday'} />
                <TimeButtons time={'12:30am'} day={'Wednesday'} />
                <TimeButtons time={'1:00am'} day={'Wednesday'} />
                <TimeButtons time={'1:30am'} day={'Wednesday'} />
                <TimeButtons time={'2:00am'} day={'Wednesday'} />
                <TimeButtons time={'2:30am'} day={'Wednesday'} />
                <TimeButtons time={'3:00am'} day={'Wednesday'} />
                <TimeButtons time={'3:30am'} day={'Wednesday'} />
                <TimeButtons time={'4:00am'} day={'Wednesday'} />
                <TimeButtons time={'4:30am'} day={'Wednesday'} />
                <TimeButtons time={'5:00am'} day={'Wednesday'} />
                <TimeButtons time={'5:30am'} day={'Wednesday'} />
                <TimeButtons time={'6:00am'} day={'Wednesday'} />
                <TimeButtons time={'6:30am'} day={'Wednesday'} />
                <TimeButtons time={'7:00am'} day={'Wednesday'} />
                <TimeButtons time={'7:30am'} day={'Wednesday'} />
                <TimeButtons time={'8:00am'} day={'Wednesday'} />
                <TimeButtons time={'8:30am'} day={'Wednesday'} />
                <TimeButtons time={'9:00am'} day={'Wednesday'} />
                <TimeButtons time={'9:30am'} day={'Wednesday'} />
                <TimeButtons time={'10:00am'} day={'Wednesday'} />
                <TimeButtons time={'10:30am'} day={'Wednesday'} />
                <TimeButtons time={'11:00am'} day={'Wednesday'} />
                <TimeButtons time={'11:30am'} day={'Wednesday'} />
                <TimeButtons time={'12:00pm'} day={'Wednesday'} />
                <TimeButtons time={'12:30pm'} day={'Wednesday'} />
                <TimeButtons time={'1:00pm'} day={'Wednesday'} />
                <TimeButtons time={'1:30pm'} day={'Wednesday'} />
                <TimeButtons time={'2:00pm'} day={'Wednesday'} />
                <TimeButtons time={'2:30pm'} day={'Wednesday'} />
                <TimeButtons time={'3:00pm'} day={'Wednesday'} />
                <TimeButtons time={'3:30pm'} day={'Wednesday'} />
                <TimeButtons time={'4:00pm'} day={'Wednesday'} />
                <TimeButtons time={'4:30pm'} day={'Wednesday'} />
                <TimeButtons time={'5:00pm'} day={'Wednesday'} />
                <TimeButtons time={'5:30pm'} day={'Wednesday'} />
                <TimeButtons time={'6:00pm'} day={'Wednesday'} />
                <TimeButtons time={'6:30pm'} day={'Wednesday'} />
                <TimeButtons time={'7:00pm'} day={'Wednesday'} />
                <TimeButtons time={'7:30pm'} day={'Wednesday'} />
                <TimeButtons time={'8:00pm'} day={'Wednesday'} />
                <TimeButtons time={'8:30pm'} day={'Wednesday'} />
                <TimeButtons time={'9:00pm'} day={'Wednesday'} />
                <TimeButtons time={'9:30pm'} day={'Wednesday'} />
                <TimeButtons time={'10:00pm'} day={'Wednesday'} />
                <TimeButtons time={'10:30pm'} day={'Wednesday'} />
                <TimeButtons time={'11:00pm'} day={'Wednesday'} />
                <TimeButtons time={'11:30pm'} day={'Wednesday'} />
            </div>

            <div className='dayWrapper'>
            <label>Thursday</label>
                <TimeButtons time={'12:00am'} day={'Thursday'} />
                <TimeButtons time={'12:30am'} day={'Thursday'} />
                <TimeButtons time={'1:00am'} day={'Thursday'} />
                <TimeButtons time={'1:30am'} day={'Thursday'} />
                <TimeButtons time={'2:00am'} day={'Thursday'} />
                <TimeButtons time={'2:30am'} day={'Thursday'} />
                <TimeButtons time={'3:00am'} day={'Thursday'} />
                <TimeButtons time={'3:30am'} day={'Thursday'} />
                <TimeButtons time={'4:00am'} day={'Thursday'} />
                <TimeButtons time={'4:30am'} day={'Thursday'} />
                <TimeButtons time={'5:00am'} day={'Thursday'} />
                <TimeButtons time={'5:30am'} day={'Thursday'} />
                <TimeButtons time={'6:00am'} day={'Thursday'} />
                <TimeButtons time={'6:30am'} day={'Thursday'} />
                <TimeButtons time={'7:00am'} day={'Thursday'} />
                <TimeButtons time={'7:30am'} day={'Thursday'} />
                <TimeButtons time={'8:00am'} day={'Thursday'} />
                <TimeButtons time={'8:30am'} day={'Thursday'} />
                <TimeButtons time={'9:00am'} day={'Thursday'} />
                <TimeButtons time={'9:30am'} day={'Thursday'} />
                <TimeButtons time={'10:00am'} day={'Thursday'} />
                <TimeButtons time={'10:30am'} day={'Thursday'} />
                <TimeButtons time={'11:00am'} day={'Thursday'} />
                <TimeButtons time={'11:30am'} day={'Thursday'} />
                <TimeButtons time={'12:00pm'} day={'Thursday'} />
                <TimeButtons time={'12:30pm'} day={'Thursday'} />
                <TimeButtons time={'1:00pm'} day={'Thursday'} />
                <TimeButtons time={'1:30pm'} day={'Thursday'} />
                <TimeButtons time={'2:00pm'} day={'Thursday'} />
                <TimeButtons time={'2:30pm'} day={'Thursday'} />
                <TimeButtons time={'3:00pm'} day={'Thursday'} />
                <TimeButtons time={'3:30pm'} day={'Thursday'} />
                <TimeButtons time={'4:00pm'} day={'Thursday'} />
                <TimeButtons time={'4:30pm'} day={'Thursday'} />
                <TimeButtons time={'5:00pm'} day={'Thursday'} />
                <TimeButtons time={'5:30pm'} day={'Thursday'} />
                <TimeButtons time={'6:00pm'} day={'Thursday'} />
                <TimeButtons time={'6:30pm'} day={'Thursday'} />
                <TimeButtons time={'7:00pm'} day={'Thursday'} />
                <TimeButtons time={'7:30pm'} day={'Thursday'} />
                <TimeButtons time={'8:00pm'} day={'Thursday'} />
                <TimeButtons time={'8:30pm'} day={'Thursday'} />
                <TimeButtons time={'9:00pm'} day={'Thursday'} />
                <TimeButtons time={'9:30pm'} day={'Thursday'} />
                <TimeButtons time={'10:00pm'} day={'Thursday'} />
                <TimeButtons time={'10:30pm'} day={'Thursday'} />
                <TimeButtons time={'11:00pm'} day={'Thursday'} />
                <TimeButtons time={'11:30pm'} day={'Thursday'} />
            </div>

            <div className='dayWrapper'>
                <label>Friday</label>
                <TimeButtons time={'12:00am'} day={'Friday'} />
                <TimeButtons time={'12:30am'} day={'Friday'} />
                <TimeButtons time={'1:00am'} day={'Friday'} />
                <TimeButtons time={'1:30am'} day={'Friday'} />
                <TimeButtons time={'2:00am'} day={'Friday'} />
                <TimeButtons time={'2:30am'} day={'Friday'} />
                <TimeButtons time={'3:00am'} day={'Friday'} />
                <TimeButtons time={'3:30am'} day={'Friday'} />
                <TimeButtons time={'4:00am'} day={'Friday'} />
                <TimeButtons time={'4:30am'} day={'Friday'} />
                <TimeButtons time={'5:00am'} day={'Friday'} />
                <TimeButtons time={'5:30am'} day={'Friday'} />
                <TimeButtons time={'6:00am'} day={'Friday'} />
                <TimeButtons time={'6:30am'} day={'Friday'} />
                <TimeButtons time={'7:00am'} day={'Friday'} />
                <TimeButtons time={'7:30am'} day={'Friday'} />
                <TimeButtons time={'8:00am'} day={'Friday'} />
                <TimeButtons time={'8:30am'} day={'Friday'} />
                <TimeButtons time={'9:00am'} day={'Friday'} />
                <TimeButtons time={'9:30am'} day={'Friday'} />
                <TimeButtons time={'10:00am'} day={'Friday'} />
                <TimeButtons time={'10:30am'} day={'Friday'} />
                <TimeButtons time={'11:00am'} day={'Friday'} />
                <TimeButtons time={'11:30am'} day={'Friday'} />
                <TimeButtons time={'12:00pm'} day={'Friday'} />
                <TimeButtons time={'12:30pm'} day={'Friday'} />
                <TimeButtons time={'1:00pm'} day={'Friday'} />
                <TimeButtons time={'1:30pm'} day={'Friday'} />
                <TimeButtons time={'2:00pm'} day={'Friday'} />
                <TimeButtons time={'2:30pm'} day={'Friday'} />
                <TimeButtons time={'3:00pm'} day={'Friday'} />
                <TimeButtons time={'3:30pm'} day={'Friday'} />
                <TimeButtons time={'4:00pm'} day={'Friday'} />
                <TimeButtons time={'4:30pm'} day={'Friday'} />
                <TimeButtons time={'5:00pm'} day={'Friday'} />
                <TimeButtons time={'5:30pm'} day={'Friday'} />
                <TimeButtons time={'6:00pm'} day={'Friday'} />
                <TimeButtons time={'6:30pm'} day={'Friday'} />
                <TimeButtons time={'7:00pm'} day={'Friday'} />
                <TimeButtons time={'7:30pm'} day={'Friday'} />
                <TimeButtons time={'8:00pm'} day={'Friday'} />
                <TimeButtons time={'8:30pm'} day={'Friday'} />
                <TimeButtons time={'9:00pm'} day={'Friday'} />
                <TimeButtons time={'9:30pm'} day={'Friday'} />
                <TimeButtons time={'10:00pm'} day={'Friday'} />
                <TimeButtons time={'10:30pm'} day={'Friday'} />
                <TimeButtons time={'11:00pm'} day={'Friday'} />
                <TimeButtons time={'11:30pm'} day={'Friday'} />
            </div>

            <div className='dayWrapper'>
                <label>Saturday</label>
                <TimeButtons time={'12:00am'} day={'Saturday'} />
                <TimeButtons time={'12:30am'} day={'Saturday'} />
                <TimeButtons time={'1:00am'} day={'Saturday'} />
                <TimeButtons time={'1:30am'} day={'Saturday'} />
                <TimeButtons time={'2:00am'} day={'Saturday'} />
                <TimeButtons time={'2:30am'} day={'Saturday'} />
                <TimeButtons time={'3:00am'} day={'Saturday'} />
                <TimeButtons time={'3:30am'} day={'Saturday'} />
                <TimeButtons time={'4:00am'} day={'Saturday'} />
                <TimeButtons time={'4:30am'} day={'Saturday'} />
                <TimeButtons time={'5:00am'} day={'Saturday'} />
                <TimeButtons time={'5:30am'} day={'Saturday'} />
                <TimeButtons time={'6:00am'} day={'Saturday'} />
                <TimeButtons time={'6:30am'} day={'Saturday'} />
                <TimeButtons time={'7:00am'} day={'Saturday'} />
                <TimeButtons time={'7:30am'} day={'Saturday'} />
                <TimeButtons time={'8:00am'} day={'Saturday'} />
                <TimeButtons time={'8:30am'} day={'Saturday'} />
                <TimeButtons time={'9:00am'} day={'Saturday'} />
                <TimeButtons time={'9:30am'} day={'Saturday'} />
                <TimeButtons time={'10:00am'} day={'Saturday'} />
                <TimeButtons time={'10:30am'} day={'Saturday'} />
                <TimeButtons time={'11:00am'} day={'Saturday'} />
                <TimeButtons time={'11:30am'} day={'Saturday'} />
                <TimeButtons time={'12:00pm'} day={'Saturday'} />
                <TimeButtons time={'12:30pm'} day={'Saturday'} />
                <TimeButtons time={'1:00pm'} day={'Saturday'} />
                <TimeButtons time={'1:30pm'} day={'Saturday'} />
                <TimeButtons time={'2:00pm'} day={'Saturday'} />
                <TimeButtons time={'2:30pm'} day={'Saturday'} />
                <TimeButtons time={'3:00pm'} day={'Saturday'} />
                <TimeButtons time={'3:30pm'} day={'Saturday'} />
                <TimeButtons time={'4:00pm'} day={'Saturday'} />
                <TimeButtons time={'4:30pm'} day={'Saturday'} />
                <TimeButtons time={'5:00pm'} day={'Saturday'} />
                <TimeButtons time={'5:30pm'} day={'Saturday'} />
                <TimeButtons time={'6:00pm'} day={'Saturday'} />
                <TimeButtons time={'6:30pm'} day={'Saturday'} />
                <TimeButtons time={'7:00pm'} day={'Saturday'} />
                <TimeButtons time={'7:30pm'} day={'Saturday'} />
                <TimeButtons time={'8:00pm'} day={'Saturday'} />
                <TimeButtons time={'8:30pm'} day={'Saturday'} />
                <TimeButtons time={'9:00pm'} day={'Saturday'} />
                <TimeButtons time={'9:30pm'} day={'Saturday'} />
                <TimeButtons time={'10:00pm'} day={'Saturday'} />
                <TimeButtons time={'10:30pm'} day={'Saturday'} />
                <TimeButtons time={'11:00pm'} day={'Saturday'} />
                <TimeButtons time={'11:30pm'} day={'Saturday'} />
            </div>
        </div>
    )};
};
 
export default TimeBlockDisplay;