import React from 'react';

class WhoAreYou extends React.Component {
    constructor() {
        super();
        this.state = {
            is_companion: 0
        }
    }

    // sets state to user choice upon choice button click then sets to local storage
    handleUserClass = (e) => {
        e.preventDefault();
        this.setState({
            is_companion: e.target.value  // updated to is_companion match API
        })
        localStorage.setItem('is_companion', e.target.value);  // local storage
    }

    handleNext = () => {
        e.preventDefault();
        this.props.history.push('/tellMore')  
    }
   

    render() {
        return (
            <div>
                <h1>Who are you?</h1>
                <h2>Choose 1: </h2>
                <div>
                    {/* user chooses to be a main user (senior) or buddy (companion) */}
                    {/* changed buttons to directly link to next step, rather than needing a third "next" button */}
                    {/* passes data */}
                        <button value={1} onClick={ this.handleUserClass }>
                                I am interested in low impact exercise
                        </button>
                        <button value={2} onClick= { this.handleUserClass }>
                                I want to be a companion to my loved one/friend who needs to do low impact exercise.
                        </button>
                        <br></br>
                        <button onClick = {this.handleNext }>Next</button>
                </div>
                {/* exercise user or companion will both go to 'TellMeMore' - choice won't matter but status should be entered into database */}
            </div>
        );
    } 
}   

export default WhoAreYou;