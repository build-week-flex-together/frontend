import React from 'react';
import { Link } from 'react-router-dom';

class WhoAreYou extends React.Component {
    constructor() {
        super();
        this.state = {
            userType: ''
        }
    }

    // local storage after user update for senior / buddy option => will lead to correct path based on clicked button value.
    componentDidUpdate() {
        localStorage.setItem('userType', JSON.stringify(this.state));
    }
    // sets state to user choice upon choice button click
    handleUserType = (e) => {
        this.setState({
            userType: e.target.value
        })
    }

    render() {
        return (
            <div>
                <h1>Who are you?</h1>
                <div>Loading Bar will go here...</div>
                <h2>Choose 1: </h2>
                <div>
                    {/* user chooses to be a main user (senior) or buddy (companion) */}
                    {/* changed buttons to directly link to next step, rather than needing a third "next" button */}
                    <button value='senior' onClick={ this.handleUserClass }>
                        <Link to='/tellMore'>
                            <h3>I am interested in low impact exercise</h3>
                        </Link> 
                    </button>
                    <button value='buddy' onClick= { this.handleUserClass }>
                        <Link to='/tellMore'>
                            <h3>I want to be a companion to my loved one/friend who needs to do low impact exercise.</h3>
                        </Link> 
                    </button>
                </div>
                {/* exercise user or companion will both go to 'TellMeMore' - choice won't matter but status should be entered into database */}
            </div>
        );
    }    
}

export default WhoAreYou;