import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import Event from './event';
import Transactions from './transactions';

class PlotList extends Component {
  startTime = this.props.allEvents.timing.begin.counter;
  plotWidth = (this.props.allEvents.timing.duration + 500) * this.props.globals.plotScale;
  scrollLeft = 0;

  componentDidMount() {
    document.addEventListener('scroll', this.scrollLeft);
    // const node = ReactDOM.findDOMNode(this).firstElementChild;
  }

  scrollLeft() {
    const node = ReactDOM.findDOMNode(this.refs.Content);
    console.log(node);
    // this.scrollLeft = node.scrollLeft;
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
          color="rgb(0,0,255)"
        />
      );
    });
  }

  render() {
    return (
        <div
          className="PlotList">
          <div ref="Content" className="content" style={{overflowX: 'scroll', overflowY: 'hidden'}}>
            <Transactions
              plotWidth={this.plotWidth} />
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
