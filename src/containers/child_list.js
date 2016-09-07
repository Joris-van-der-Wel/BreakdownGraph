import React, {Component} from 'react';
import { connect } from 'react-redux';
import Event from './event';

class ChildList extends Component {
plotWidth = this.props.allEvents.timing.duration * this.props.globals.plotScale

renderList() {
  return this.props.children.map((event) => {
    const hasChildren = event.children.length > 0;
    if (hasChildren === true) {
      if (this.props.source === 'event') {
        return (
          <div key={event.id}>
            <Event
              hasChildren="true"
              source="event"
              key={event.id}
              event={event}/>
          </div>
        );
      }
      return (
        <div key={event.id}>
          <Event
            source="plot"
            counterStart={this.props.allEvents.timing.begin.counter}
            key={event.id}
            event={event}
            color="rgb(0,255,255)"/>
        </div>
      );
    }
    if (this.props.source === 'event') {
      return (
        <div key={event.id}>
          <Event
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
          source="plot"
          plotWidth={this.plotWidth}
          counterStart={this.props.allEvents.timing.begin.counter}
          key={event.id}
          event={event}
          color="rgb(0,255,255)"
        />
      </div>
    );
  });
}

render() {
  return (
      <div
        className="EventList">
        {this.renderList()}
      </div>
  );
}
}

function mapStateToProps(state) {
  return {
    allEvents: state.input,
    expandedEvents: state.expandedEvents,
    globals: state.globals
  };
}

export default connect(mapStateToProps)(ChildList);
