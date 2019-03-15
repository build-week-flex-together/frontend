import React from 'react';
import Axios from 'axios';


class emailAuth extends React.Component {
    constructor(props) {
        super(props);
        this.state={}
    }

    authEmail = (userEmail) => { 
        // use token to verify email
        Axios.post('https://flextogether.herokuapp.com/api/invite/:token/verify', userEmail)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    }

    render() {
        return (
            <div>
                <button onClick={ authEmail }>Confirm Email</button>
            </div>
        );
    }
}

export default emailAuth;