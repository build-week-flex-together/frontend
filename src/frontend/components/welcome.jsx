import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
    return (
        <div>
            <h1>Welcome to FlexTogether</h1>
            <button>
                <Link to='/whoAreYou'>Start</Link>
            </button>
        </div>
    );
}

export default Welcome;