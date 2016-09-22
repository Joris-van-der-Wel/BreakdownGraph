import React, { Component } from 'react';
import { connect } from 'react-redux';
import Event from './event';
import Transactions from './transactions';
import { bindActionCreators } from 'redux';
import { scrollLeftValue } from '../actions/index';

class PlotList extends Component {
  startTime = this.props.allEvents.timing.begin.counter;
  plotWidth = (this.props.allEvents.timing.duration + 500) * this.props.globals.plotScale;

  get scrollAreaLeft() {
    return this.refs.plotscroll.scrollLeft;
  }

  renderList() {
    return this.props.allEvents.events.map((event) => {
      return (
        <Event
          source="plot"
          plotWidth={this.plotWidth}
          counterStart={this.startTime}
          key={event.id}
          event={event}
          color="rgb(47,85,92)"
        />
      );
    });
  }

  render() {
    return (
        <div
          className="PlotList">
          <div ref="plotscroll"
            className="content"
            scrollEventThrottle={16}
            style={{overflowX: 'scroll', overflowY: 'hidden', position: 'relative'}}>
            <Transactions
              plotWidth={this.plotWidth} />
            {this.renderList()}
          </div>
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    allEvents: state.input,
    globals: state.globals,
    left: state.scrollLeftValue
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ scrollLeftValue: scrollLeftValue }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps, null, {withRef: true})(PlotList);
