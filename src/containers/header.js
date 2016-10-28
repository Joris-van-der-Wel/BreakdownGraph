import React, { Component } from 'react';
import { connect } from 'react-redux';
import TransactionsHeader from './transactions_header';

class Header extends Component {

  plotWidth = (this.props.allEvents.timing.duration + 500) * this.props.globals.plotScale;

  get timeLineHeaderLeft() {
    return parseInt(this.refs.timeLineHeader.style.left, 10);
  }

  set timeLineHeaderLeft(v) {
    this.refs.timeLineHeader.style.left = v + 'px';
  }

  renderTimetext() {
    const secTexts = [];
    for (let xPlot = 0; xPlot < this.plotWidth; xPlot += (1000 * this.props.globals.plotScale)) {
      if (xPlot !== 0) {
        secTexts.push(
          <text className="timelineText" key={xPlot + 'Text'} x={xPlot - (70 * this.props.globals.plotScale)} y="15" key={xPlot} style={{fill: 'black'}}>
            <tspan>{xPlot / (1000 * this.props.globals.plotScale) + 's'}</tspan>
          </text>
        );
      }
    }
    return secTexts;
  }

  render() {
    return (
      <div className="header" style={{borderStyle: 'solid', borderTop: 0, borderLeft: 0, borderRight: 0, borderColor: 'grey', boxSizing: 'border-box', position: 'relative', height: '54', zIndex: 10}}>
        <div className="left" style={{position: 'absolute', left: 0, top: 0, width: 310, paddingLeft: 2}}>
          <div className="contentUp"><strong>↓ Breakdown - Events</strong></div>
          <div className="contentBottom" style={{textAlign: 'right'}}><strong>Transactions → </strong></div></div>
        <div className="right" style={{position: 'absolute', left: 310, top: 0, right: 0, height: '100%', overflow: 'hidden'}}>
          <div ref="timeLineHeader" className="content" style={{position: 'absolute', left: 0, top: 0, width: this.plotWidth}}>
            <svg className="timeline"
              height="18"
              width={this.plotWidth}>
              {this.renderTimetext()}
            </svg>
            <TransactionsHeader />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    allEvents: state.input,
    globals: state.globals,
    scrollLeftValue: state.scrollLeftValue
  };
}

export default connect(mapStateToProps, null, null, { withRef: true })(Header);
