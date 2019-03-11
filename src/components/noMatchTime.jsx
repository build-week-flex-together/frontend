import React from 'react';
import moment from 'moment';

const NoMatchTime = () => {
    return (
        <div>
            <h3>Looks like we're having a hard time finding a time
                that works for both of you. Let's try things the old
                fashioned way.
            </h3>
            <h1>Call Benji and
                figure out a time that works
            </h1>
            <h3>What time works?</h3>
            <TimePicker defaultValue={moment('13:30:56', 'HH:mm:ss')} />
        </div>
    );
}

export default NoMatchTime;