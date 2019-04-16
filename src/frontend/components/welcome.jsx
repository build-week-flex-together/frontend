import React from 'react';
import { Link } from 'react-router-dom';


const Welcome = () => {
    return (
        <div className='welcome'>
            <h1>Welcome to FlexTogether</h1>
            <button className='startBtn'>
                <Link to='/whoAreYou'>Start</Link>
            </button>
        </div>
    );
}

export default Welcome;