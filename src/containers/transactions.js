import React, { Component } from 'react';
import { connect } from 'react-redux';

class Transactions extends Component {
  startCounter = this.props.allEvents.timing.begin.counter;

  renderTransactions() {
    // return this.props.allEvents.transactions.map((transaction) => {
    //   const xPlot = (transaction.timing.end.counter - this.startCounter) * this.props.globals.plotScale;
    //   return (
    //     <line key={xPlot + 'Transaction'} x1={xPlot} y1="0" x2={xPlot} y2="100%" style={{ stroke: 'rgb(240,176,122)', strokeWidth: 3, strokeOpacity: '0.8' }}/>
    //   );
    // });
    if (this.props.activeTrans) {
      const id = this.props.activeTrans.id;
      const rectStart = (this.props.activeTrans.timing.begin.counter - this.startCounter) * this.props.globals.plotScale;
      const rectWidth = this.props.activeTrans.timing.duration * this.props.globals.plotScale;
      (console.log(rectStart, this.props.activeTrans.timing.begin.counter, this.startCounter));
      return (
        <rect key={id} width={rectWidth} height="100%" x={rectStart} y="0" fill="grey" fillOpacity="0.3"/>
      );
    }
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
          style={{position: 'absolute', zIndex: 2}}>
          {this.renderTransactions()}
        </svg>
        <svg className="timeroster"
          height="100%"
          width={this.props.plotWidth}
          style={{position: 'absolute', zIndex: 0}}>
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
    globals: state.globals,
    activeTrans: state.activeTransaction
  };
}

export default connect(mapStateToProps)(Transactions);
