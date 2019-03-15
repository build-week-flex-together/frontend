import React from 'react';

class TellMore extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.location)

        this.state = { // set initial states for input
            name: '',
            email: '',
            phone: '',
            notifyEmail: '',
            notifyPhone: '',
            mobility: '',
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleNotificationsChange = this.handleNotificationsChange.bind(this);
        this.handleMobility =  this.handleMobility.bind(this);
        this.handleNext = this.handleNext.bind(this);
    }

    handleNameChange = (e) => {
        e.preventDefault();
        this.setState({ name: e.target.value });
        localStorage.setItem('name', e.target.value);
    }
    handleEmailChange = (e) => {
        e.preventDefault();
        this.setState({ email: e.target.value });
        localStorage.setItem('email', e.target.value);
    }
    handlePhoneChange = (e) => {
        e.preventDefault();
        this.setState({ phone: e.target.value });
        localStorage.setItem('phone', e.target.value);

    }
    handleNotificationsChange = (e) => {
        e.preventDefault();
        this.setState({ notifications: e.target.value})
        localStorage.setItem('notifications', e.target.value);

    }
    handleMobility = (e) => {
        e.preventDefault();
        this.setState({ mobility: e.target.value })
        localStorage.setItem('mobility', e.target.value);

    }

    handleNext = (e) => {
        e.preventDefault();        
        
        this.props.history.push('/timePicker')  
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
                            {/* notification type selector */}
                            <form>
                                <label>Email</label>
                                <input name='email' type='checkbox' value='email' />
                                <label>Text</label>
                                <input name='text' type='checkbox' value='text' />
                            </form>
                    </div>
                    <div>
                        <p>Mobility Level (choose one)</p>
                        {/* workout level buttons - need to style for color change on click */}
                        <button value= {1} onClick={this.handleMobility}>Low</button>
                        <button value= {2} onClick={this.handleMobility}>Medium</button>
                        <button value= {3} onClick={this.handleMobility}>High</button>
                    </div>
                    <button onClick={this.handleNext}>Next</button>

                </form>
            </div>
        );
    }
}

export default TellMore;