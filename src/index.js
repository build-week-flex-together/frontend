import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './frontend/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import WhoAreYou from './frontend/components/whoAreYou';
import TellMore from './frontend/components/tellMore';
import TimePicker from './frontend/components/timePicker';
import AddBuddy from './frontend/components/addBuddy';
import Thanks from './frontend/components/thanks';
import BuddyTimePick from './frontend/components/buddyTimePick';
import TimeAssignment from './frontend/components/timeAssignment';
import NoMatchTime from './frontend/components/noMatchTime';


ReactDOM.render(
    <Router>
        <div>
            <Route path='/' exact component={App} />
            <Route path="/whoAreYou" exact component={WhoAreYou} />
            <Route path='/tellMore' exact component={TellMore} />
            <Route path='/timePicker' exact component={TimePicker} />
            <Route path='/addBuddy' exact component={AddBuddy} />
            <Route path='/thanks' exact component={Thanks} />
            <Route path='/buddyTimePick' exact component={BuddyTimePick} />
            <Route path='/timeAssignment' exact component={TimeAssignment} />
            <Route path='/noMatchTime' exact component={NoMatchTime} />
        </div>
    </Router>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
