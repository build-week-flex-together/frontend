import React, { Component } from 'react';
import { Route } from 'react-router-dom';

// CSS as needed
import './App.css';

// imported components for Routing
import Welcome from './components/welcome';
import WhoAreYou from './components/whoAreYou';
import TellMore from './components/tellMore';
import TimePicker from './components/timePicker';
import AddBuddy from './components/addBuddy';
import BuddyTimePicker from './components/buddyTimePicker';
import TimeAssignment from './components/timeAssignment';
import NoMatchTime from './components/noMatchTime';
import Thanks from './components/thanks';
import buddyInvite from './components/buddyInvite';

class App extends Component {
  constructor() {
    super(); 
    this.state = {}
  }
  render() {
    return (
      <div className='App'>
        <Route exact path= '/' component={ Welcome } />
        <Route path='/whoAreYou' component={ WhoAreYou } />
        <Route path='/tellMore' component={ TellMore } />
        <Route path='/timePicker' component={ TimePicker } />
        <Route path='/addBuddy' component={ AddBuddy } />
        <Route path='/buddyTimePicker' component={ BuddyTimePicker } />
        <Route path='/timeAssignment' component={ TimeAssignment } />
        <Route path='/noMatchTime' component={ NoMatchTime } />
        <Route path='/buddyInvite' component={buddyInvite} />
        <Route path='/thanks' component={ Thanks } />
      </div>
    );
  }
}

export default App;
