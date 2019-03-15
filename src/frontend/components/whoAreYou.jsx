import React from 'react';
import { Link } from 'react-router-dom';

class WhoAreYou extends React.Component {
    constructor() {
        super();
        this.state = {
            userClass: ''
        }
    }

    // sets state to user choice upon choice button click then sets to local storage
    handleUserClass = (e) => {
        e.preventDefault();
        this.setState({
            userClass: e.target.value
        })
        this.props.history.push('/tellMore')
        console.log(this.state.userClass)
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
                    {/* passes data */}
                    <Link to={{pathname: '/tellMore', state: {userClass: 'senior'}}}>
                        <button value='senior' onClick={ this.handleUserClass }>
                                I am interested in low impact exercise
                        </button>
                    </Link>
                    <Link to={{pathname: '/tellMore', state: {userClass: 'senior'}}}>
                        <button value='buddy' onClick= { this.handleUserClass }>
                                I want to be a companion to my loved one/friend who needs to do low impact exercise.
                        </button>
                    </Link>
                </div>
                {/* exercise user or companion will both go to 'TellMeMore' - choice won't matter but status should be entered into database */}
            </div>
        );
    } 
}   

export default WhoAreYou;