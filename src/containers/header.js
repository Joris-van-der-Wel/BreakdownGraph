import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {

  plotWidth = (this.props.allEvents.timing.duration + 500) * this.props.globals.plotScale;

  renderTimetext() {
    const secTexts = [];
    for (let xPlot = 0; xPlot < this.plotWidth; xPlot += (1000 * this.props.globals.plotScale)) {
      if (xPlot !== 0) {
        secTexts.push(
          <text className="timelineText" key={xPlot + 'Text'} x={xPlot - (70 * this.props.globals.plotScale)} y="13" key={xPlot} style={{fill: 'black'}}>
            <tspan>{xPlot / (1000 * this.props.globals.plotScale) + 's'}</tspan>
          </text>
        );
      }
    }
    return secTexts;
  }

  render() {
    return (
      <div className="header" style={{outline: '1px solid black', position: 'relative', height: 18}}>
        <div className="left" style={{position: 'absolute', left: 0, top: 0, width: 310}}>Header LEFT</div>
        <div className="right" style={{position: 'absolute', left: 310, top: 0, right: 0, height: '100%', overflow: 'hidden'}}>
          <div className="content" style={{position: 'absolute', left: 0, top: 0, width: this.plotWidth}}>
            <svg className="timeline"
              height="18"
              width={this.plotWidth}>
              {this.renderTimetext()}
            </svg>
          </div>
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

export default connect(mapStateToProps)(Header);
