import React, { Component } from 'react';
import { connect } from 'react-redux';

class TimingsData extends Component {

  renderList() {
    if (this.props.activeEvent === null) {
      return (
        <div> Select Event for overview.. </div>
      );
    }
    const begin = this.props.activeEvent.timing.begin.counter - this.props.allEvents.timing.begin.counter;
    const end = this.props.activeEvent.timing.end.counter - this.props.allEvents.timing.begin.counter;
    return (
      <div style={{display: 'block'}}>
        <div style={{display: 'flex'}}>
          <div style={{float: 'left', width: '75%'}}>
            <div>Begin</div>
          </div>
          <div style={{float: 'right', width: '25%'}}>
            <div>: {begin}ms</div>
          </div>
        </div>
        <div style={{display: 'flex'}}>
          <div style={{float: 'left', width: '75%'}}>
            <div>End</div>
          </div>
          <div style={{float: 'right', width: '25%'}}>
            <div>: {end}ms</div>
          </div>
        </div>
        <div style={{display: 'flex'}}>
          <div style={{float: 'left', width: '75%'}}>
            <div>Duration</div>
          </div>
          <div style={{float: 'right', width: '25%'}}>
            <div>: {this.props.activeEvent.timing.duration}ms</div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    console.log(this.props.activeEvent);
    if (this.props.activeEvent === null) {
      return (
        <div className="data" style={{float: 'right', width: '33.33%', height: 'auto', padding: '2px 2px 2px 2px'}}>
          <strong> Timings: No event selected </strong>
          <div> {this.renderList()} </div>
        </div>
      );
    }
    return (
      <div className="data" style={{float: 'right', width: '33.33%', height: 'auto', padding: '2px 2px 2px 2px'}}>
        <strong> {this.props.activeEvent.type} > Timings </strong>
        <div> {this.renderList()} </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    activeEvent: state.activeEvent,
    allEvents: state.input
  };
}

export default connect(mapStateToProps)(TimingsData);
