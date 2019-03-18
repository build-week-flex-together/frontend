import React from 'react';

class WhoAreYou extends React.Component {
    constructor() {
        super();
        this.state = {
            is_companion: 0,
            bgColor: 'white',
            bgColor2: 'white',
            textColor: 'rgb(0,33,71)', 
            textColor2: 'rgb(0,33,71)'
        }
    }

    // sets state to user choice upon choice button click then sets to local storage
    handleUserClass = (e) => {
        e.preventDefault();
        if (e.target.value === '1') {
            this.setState({ bgColor: 'rgb(0,33,71)' });
            this.setState({ textColor: 'white'})
        } else {
            this.setState({ bgColor2: 'rgb(0,33,71)' });
            this.setState({ textColor2: 'white' })
        }
        this.setState({
            is_companion: e.target.value
        })
        localStorage.setItem('is_companion', e.target.value);  // local storage
    }

    handleNext = (e) => {
        e.preventDefault();
        this.props.history.push('/tellMore')  
    }
   

    render() {
        return (
            <div className='whoAreYouText'>
                <h1>Who are you?</h1>
                <h2>Choose 1: </h2>
            <div class='btnsContainer'>
                {/* user chooses to be a main user (senior) or buddy (companion) */}
                {/* changed buttons to directly link to next step, rather than needing a third "next" button */}
                {/* passes data */}
                    <button className='btns' value={1} onClick={ this.handleUserClass} style={{backgroundColor: this.state.bgColor, color: this.state.textColor}}>
                            I am interested in low impact exercise
                    </button>
                    <button className='btnFix' value={2} onClick= { this.handleUserClass } style={{backgroundColor: this.state.bgColor2, color: this.state.textColor2 }} >
                            I want to be a companion to my loved one/friend who needs to do low impact exercise.
                    </button>
            </div>
                        <br></br>
                        <button onClick = {this.handleNext } className='nextBtn'>Next</button>
                {/* exercise user or companion will both go to 'TellMeMore' - choice won't matter but status should be entered into database */}
            </div>
        );
    } 
}   

export default WhoAreYou;