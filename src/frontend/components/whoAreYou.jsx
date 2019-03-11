import React from 'react';
import { Link } from 'react-router-dom';

const WhoAreYou = () => {
    return (
        <div>
            <h1>Who are you?</h1>
            <div>Loading Bar...</div>
            <h2>Choose 1: </h2>
            <div>
                <h3>I am interested in low impact exercise</h3>
            </div>
            <div>
                <h3>I want to be a companion to my loved one/friend who needs to do low impact exercise.</h3>
            </div>
            {/* exercise user or companion will both go to 'TellMeMore' - choice won't matter but status should be entered into database */}
            <button>
                <Link to='/tellMore'>Next</Link> 
            </button>
        </div>
    );
}

export default WhoAreYou;