import React, { Component } from 'react';

class Event extends Component {
   state = {
    detailsVisible: false
   };

   handleDetailsToggled = () => {
    if (!this.state.detailsVisible) {
        this.setState({
            detailsVisible: true
        });
    } else {
        this.setState({
            detailsVisible: false
        });
    }
   };

   render() {
    const { event } = this.props;
    return (
        <div className='event'>
            <h3 className='summary'>{event.summary}</h3>
            <p className='info'>
                {event.start.dateTime} {event.start.timeZone} {event.location}
            </p>
            {this.state.detailsVisible ? (
                <>
                    <div className='event-details'>
                        <h5 className='detailsTitle'>About event: </h5>
                        <a href={event.htmlLink} className='detailsLink'>See details on the Google Calendar</a>
                        <p className='detailsDescription'>{event.description}</p>
                    </div>
                    <button className='btn-toggle-details' onClick={this.handleDetailsToggled}>Hide Details</button>
                </>
            ) : (
                <button className='btn-toggle-details' onClick={this.handleDetailsToggled}>Show Details</button>
            )}
        </div>
    );
   }
}

export default Event;