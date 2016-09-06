import React, { Component } from 'react';
import { connect } from 'react-redux';
import Event from './event';

class EventList extends Component {
  renderList() {
    return this.props.allEvents.map((event) => {
      return (
        <div>
          <Event
            source="event"
            key={event.type}
            event={event}
          />
        </div>
      );
    });
  }

  render() {
    const eventStyle = {
      position: 'absolute',
      left: '0%',
      top: 0,
      width: '30%'
    };
    return (
        <div
          id="eventList"
          style={eventStyle}>
          {this.renderList()}
        </div>
    );
  }
}

function mapStateToProps(state) {
  // Whatever is returned from her will show up as props
  // inside of BookList
  return {
    allEvents: state.events
  };
}

export default connect(mapStateToProps)(EventList);
