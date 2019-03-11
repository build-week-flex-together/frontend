import React from 'react';
import { Link } from 'react-router-dom';

const TellMore = () => {
    return (
        <div>
            <h3>Tell us a bit more...</h3>
            <form>
                <input type='text' placeholder='Name'></input>
                <input type='text' placeholder='Email'></input>
                <input type='number' placeholder='Phone Number'></input>
            </form>
            <div>
                <p>I prefer to receive notifications by </p>
                <select>
                    <option value='email'>Email</option>
                    <option value='text'>Text</option>
                </select>
            </div>
            <div>
                <p>Mobility Level (choose one)</p>
                <button>Low</button>
                <button>Medium</button>
                <button>Hight</button>
            </div>
            <button>
                <Link to='/timePicker'>Next</Link>
            </button>
        </div>
    );
}

export default TellMore;