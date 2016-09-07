import React, { Component } from 'react';
import { connect } from 'react-redux';
import Event from './event';

class EventList extends Component {

  renderList() {
    return this.props.allEvents.events.map((event) => {
      const hasChildren = event.children.length > 0;
      if (hasChildren === true) {
        return (
          <div
            key={event.id}>
            <Event
              hasChildren="true"
              source="event"
              key={event.id}
              event={event}
            />
          </div>
        );
      }
      return (
        <div key={event.id}>
          <Event
            source="event"
            key={event.id}
            event={event}
          />
        </div>
      );
    });
  }

  render() {
    return (
        <div
          className="EventList">
          <div className="header"> Events </div>
          {this.renderList()}
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    allEvents: state.input,
    expandedEvents: state.expandedEvents
  };
}


export default connect(mapStateToProps)(EventList);
