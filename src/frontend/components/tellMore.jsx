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
            text_notifications: false,
            email_notifications: false,
            bgColor: 'white',
            bgColor2: 'white',
            bgColor3: 'white',
            textColor: 'rgb(0,33,71)', 
            textColor2: 'rgb(0,33,71)',
            textColor3: 'rgb(0,33,71)'
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleNotificationsChange = this.handleNotificationsChange.bind(this);
        this.handleMobility =  this.handleMobility.bind(this);
        this.handleNext = this.handleNext.bind(this);
    }

    handleNameChange = (e) => {
        this.setState({ name: e.target.value });
        localStorage.setItem('name', e.target.value);
    }
    handleEmailChange = (e) => {
        this.setState({ email: e.target.value });
        localStorage.setItem('email', e.target.value);
    }
    handlePhoneChange = (e) => {
        this.setState({ phone: e.target.value });
        localStorage.setItem('phone', e.target.value);
    }
    handleNotificationsChange = (e) => {
        let text = this.state.text_notifications;
        let email = this.state.email_notifications;
        if (e.target.value === 'Email') {
            email = e.target.checked;
        } else if (e.target.value === 'Text') {
            text = e.target.checked;
        }

        this.setState({ email_notifications: email, text_notications: text });
    }
    handleMobility = (e) => {
        if (e.target.value === 'Low') {
            this.setState({ bgColor: 'rgb(0,33,71)' });
            this.setState({ textColor: 'white'})
        } else if (e.target.value === 'Medium') {
            this.setState({ bgColor2: 'rgb(0,33,71)' });
            this.setState({ textColor2: 'white' })
         } else {
             this.setState({ bgColor2: 'rgb(0,33,71)' });
             this.setState({ textColor2: 'white' })
         }

        this.setState({ mobility: e.target.value })
        localStorage.setItem('mobility', e.target.value);

    }

    handleNext = (e) => {
        localStorage.setItem('name', this.state.name);
        localStorage.setItem('email', this.state.email);
        localStorage.setItem('phone', this.state.phone);
        localStorage.setItem('mobility', this.state.mobility);

        if (this.state.email_notifications && this.state.text_notications) {
            localStorage.setItem('notifications', 'Text & Email');
        } else if (this.state.email_notifications) {
            localStorage.setItem('notifications', 'Email');
        } else if (this.state.text_notications) {
            localStorage.setItem('notifications', 'Text');
        }

        this.props.history.push('/timePicker')  
    }

    render() {
        return (
            <div className='tellMoreText'>
                <h3>Tell us a bit more...</h3>
                <input className='inputBoxes' type='text' placeholder='Name' onChange={this.handleNameChange} value={this.state.name}></input>
                <input className='inputBoxes' type='email' placeholder='Email' onChange={this.handleEmailChange} value={this.state.email}></input>
                <input className='inputBoxes' type='tel' placeholder='Phone Number' onChange={this.handlePhoneChange} value={this.state.phone}></input>
                <div>
                    <p>I prefer to receive notifications by: </p>
                    {/* notification type selector */}
                    <label>Email</label>
                    <input type='checkbox' value='Email' onChange={this.handleNotificationsChange} />
                    <label>Text</label>
                    <input type='checkbox' value='Text' onChange={this.handleNotificationsChange} />
                </div>
                <div>
                    <p>Mobility Level (choose one)</p>
                    {/* workout level buttons - need to style for color change on click */}
                    <button className='mobilityBtn' value="Low" onClick={this.handleMobility} style={{backgroundColor: this.state.bgColor, color: this.state.textColor}}>Low</button>
                    <button className='mobilityBtn' value="Medium" onClick={this.handleMobility} style={{backgroundColor: this.state.bgColor2, color: this.state.textColor2}}>Medium</button>
                    <button className='mobilityBtn' value="High" onClick={this.handleMobility} style={{backgroundColor: this.state.bgColor3, color: this.state.textColor3}}>High</button>
                </div>
                <button className='nextBtn' onClick={this.handleNext}>Next</button>
            </div>
        );
    }
}

export default TellMore; 