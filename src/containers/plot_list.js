import React, { Component } from 'react';
import { connect } from 'react-redux';
import Event from './event';

class PlotList extends Component {
  renderList() {
    return this.props.allEvents.map((event) => {
      return (
        <div>
          <Event
            source="plot"
            key={event.type}
            event={event}
          />
        </div>
      );
    });
  }

  render() {
    const plotStyle = {
      position: 'absolute',
      left: '30%',
      top: 0,
      width: '70%'
    };
    return (
        <div
          id="plotList"
          style={plotStyle}>
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

export default connect(mapStateToProps)(PlotList);
