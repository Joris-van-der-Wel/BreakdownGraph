import React, { Component } from 'react';
import { connect } from 'react-redux';
import Event from './event';
import Transactions from './transactions';

class PlotList extends Component {
  startTime = this.props.allEvents.timing.begin.counter;
  plotWidth = this.props.allEvents.timing.duration * this.props.globals.plotScale;

  renderList() {
    return this.props.allEvents.events.map((event) => {
      return (
        <Event
          source="plot"
          plotWidth={this.plotWidth}
          counterStart={this.startTime}
          key={event.type}
          event={event}
          color="rgb(0,0,255)"
        />
      );
    });
  }

  render() {
    return (
        <div
          className="PlotList">
          <Transactions
            plotWidth={this.plotWidth} />
          <div className="header" style={{height: 18}} />
          <div style={{width: this.plotWidth}}>
            {this.renderList()}
          </div>
        </div>
    );
  }
}

function mapStateToProps(state) {
  // Whatever is returned from her will show up as props
  // inside of BookList
  return {
    allEvents: state.input,
    globals: state.globals
  };
}

export default connect(mapStateToProps)(PlotList);
