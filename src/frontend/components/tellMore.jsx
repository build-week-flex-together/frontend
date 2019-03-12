import React from 'react';
import { Link } from 'react-router-dom';

class TellMore extends React.Component {
    constructor(props) {
        super(props);

        this.state = { // set initial states for input
            name: '',
            email: '',
            phone: '',
            notifications: '',
            level: '',
            value: ''
        };
    }

    // local storage for state
    componentDidUpdate(){
        localStorage.setItem('buddyInput', JSON.stringify(this.state));
    }
    // change handlers for input (needs to be combined)
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
    handleNotificationsChange = (e) => {
        e.preventDefault();
        this.setState({ notifications: e.target.value})
    }
    handleLevelChange = (e) => {
        e.preventDefault();
        this.setState({ level: e.target.value })
    }

    render() {
        return (
            <div>
                <h3>Tell us a bit more...</h3>
                <form>
                    <input type='text' placeholder='Name' onChange={this.handleNameChange} value={this.state.name}></input>
                    <input type='email' placeholder='Email' onChange={this.handleEmailChange} value={this.state.email}></input>
                    <input type='tel' placeholder='Phone Number' onChange={this.handlePhoneChange} value={this.state.phone}></input>
                <div>
                    <p>I prefer to receive notifications by: </p>
                    <select>
                        <option value='email'>Email</option>
                        <option value='text'>Text</option>
                    </select>
                </div>
                <div>
                    <p>Mobility Level (choose one)</p>
                    <button onClick={this.handleLevelChange}>Low</button>
                    <button onClick={this.handleLevelChange}>Medium</button>
                    <button onClick={this.handleLevelChange}>Hight</button>
                </div>
                <button input type='submit' value='Next' onClick={this.handleSubmit}>
                    <Link to='/timePicker'>Next</Link>
                </button>
                </form>
            </div>
        );
    }
}

export default TellMore;