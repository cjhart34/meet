import React, { Component } from 'react';

class NumberOfEvents extends Component {
    state = {
        eventsNumber: '32'
    };

    handleInputChanged = (event) => {
        const value = event.target.value;
        this.setState({
            eventsNumber: value
        });
    };

    render() {
        return (
            <div className='numberOfEvents'>
                <label>
                    Number Of Events:
                    <input
                        type='number'
                        className='numberOfEventsInput'
                        value={this.state.eventsNumber}
                        onChange={this.handleInputChanged}                    
                    ></input>
                </label>
            </div>
        );
    }
}

export default NumberOfEvents;