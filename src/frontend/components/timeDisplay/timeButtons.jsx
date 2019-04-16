import React from 'react';
import './timeDisplay.css';

// creates a clickable button that will display a time block
class TimeButtons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bgColor: 'white',
            textColor: 'black'
        };

        this.handleClick = this.handleClick.bind(this);
    };

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
        
        this.props.clickHandler(this.props.time, this.props.day);
    };

    render() {
        return (
            <div>
                <button className='timeBlock' 
                    value={this.props.time} 
                    onClick={this.handleClick}
                    style={{backgroundColor: this.state.bgColor, color: this.state.textColor}}>
                    {this.props.time}
                </button>
            </div>
        );
    }
};

export default TimeButtons; 