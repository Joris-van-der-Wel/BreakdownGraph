import React, { Component } from 'react';
import { connect } from 'react-redux';
import Event from './event';

class EventList extends Component {

  trueIfChildren(hasChildren) {
    if (hasChildren) return 'true';
  }

  renderList() {
    return this.props.allEvents.events.map((event) => {
      const hasChildren = event.children.length > 0;
      return (
        <div
          key={event.id}>
          <Event
            hasChildren={this.trueIfChildren(hasChildren)}
            source="event"
            key={event.id}
            event={event}/>
        </div>
      );
    });
  }

  render() {
    return (
        <div
          className="EventList">
          <div className="header"> <strong>Breakdown > Events</strong> </div>
          {this.renderList()}
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    allEvents: state.input
  };
}

export default connect(mapStateToProps)(EventList);
