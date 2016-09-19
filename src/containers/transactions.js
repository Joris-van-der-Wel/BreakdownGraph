import React, { Component } from 'react';
import { connect } from 'react-redux';

class Transactions extends Component {
  startCounter = this.props.allEvents.timing.begin.counter;

  renderTransactions() {
    return this.props.allEvents.transactions.map((transaction) => {
      const xPlot = (transaction.timing.end.counter - this.startCounter) * this.props.globals.plotScale;
      return (
        <line key={xPlot + 'Transaction'} x1={xPlot} y1="0" x2={xPlot} y2="100%" style={{ stroke: 'rgb(255,0,0)', strokeWidth: 4, strokeOpacity: '0.7' }}/>
      );
    });
  }

  renderTimeline() {
    const lines = [];
    for (let xPlot = 0; xPlot < this.props.plotWidth; xPlot += (100 * this.props.globals.plotScale)) {
      if ((xPlot % (1000 * this.props.globals.plotScale)) === 0) {
        lines.push(
          <line className="second" key={xPlot + 'Second'}
            x1={xPlot} y1="-2" x2={xPlot} y2="100%" style={{ stroke: 'rgb(0,0,0)', strokeWidth: 0.8 }}/>
        );
      }
      lines.push(
        <line className="100ms" key={xPlot + '100ms'}
          x1={xPlot} y1="0" x2={xPlot} y2="100%" style={{ stroke: 'rgb(0,0,0)', strokeWidth: 0.2 }}/>
      );
    }
    return lines;
  }

  // renderTimetext() {
  //   const secTexts = [];
  //   for (let xPlot = 0; xPlot < this.props.plotWidth; xPlot += (1000 * this.props.globals.plotScale)) {
  //     if (xPlot !== 0) {
  //       secTexts.push(
  //         <text className="timelineText" key={xPlot + 'Text'} x={xPlot - (70 * this.props.globals.plotScale)} y="13" key={xPlot} style={{fill: 'black'}}>
  //           <tspan>{xPlot / (1000 * this.props.globals.plotScale) + 's'}</tspan>
  //         </text>
  //       );
  //     }
  //   }
  //   return secTexts;
  // }

  render() {
    return (
      <div>
        <svg className="transactions"
          height="100%"
          width={this.props.plotWidth}
          style={{position: 'absolute', zIndex: 10}}>
          {this.renderTransactions()}
        </svg>
        <svg className="timeroster"
          height="100%"
          width={this.props.plotWidth}
          style={{position: 'absolute', zIndex: 1}}>
          {this.renderTimeline()}
        </svg>
        {/* <svg className="timeline"
          height="18"
          width={this.props.plotWidth}
          style={{position: 'absolute', display: 'block', zIndex: 10}}>
          {this.renderTimetext()}
        </svg> */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    allEvents: state.input,
    globals: state.globals
  };
}

export default connect(mapStateToProps)(Transactions);
