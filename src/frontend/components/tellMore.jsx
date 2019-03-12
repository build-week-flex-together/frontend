import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class TellMore extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            phone: '',
            notifications: '',
            level: '',
            value: ''
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
    }

    handleNameChange = (e) => {
        e.preventDefault();
        this.setState({ name: e.target.value });
    }

    handleEmailChange = (e) => {
        e.preventDefault();
        this.setState({ email: e.target.value });
    }
    handlePhoneChange = (e) => {
        e.preventDefault();
        this.setState({ phone: e.target.value });
    }
    // POST new user
    handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/api/auth/onboard', {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone
        })
    }
    

        render() {
            return (
                <div>
                    <h3>Tell us a bit more...</h3>
                    <form id='postUserData'>
                        <input type='text' placeholder='Name' onChange={this.handleNameChange} value={this.state.name}></input>
                        <input type='email' placeholder='Email' onChange={this.handleEmailChange} value={this.state.email}></input>
                        <input type='tel' placeholder='Phone Number' onChange={this.handlePhoneChange} value={this.state.phone}></input>
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
                    <button input type='submit' value='Next' onClick={this.handleSubmit}>
                        <Link to='/timePicker'>Next</Link>
                    </button>
                </div>
            );
        }
    }

export default TellMore;