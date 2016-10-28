import React, { Component } from 'react';
import EventList from '../containers/event_list';
import PlotList from '../containers/plot_list';
import EventData from '../containers/event_data';
import Header from '../containers/header';

export default class App extends Component {

  componentDidMount() {
    document.addEventListener('DOMContentLoaded', () => {
      const frame = () => {
        try {
          this.animationFrame();
        } finally {
          this._animationFrameId = requestAnimationFrame(frame);
        }
      };
      this._animationFrameId = requestAnimationFrame(frame);
    });
  }

  componentWillUnmount() {
    cancelAnimationFrame(this._animationFrameId);
    this._animationFrameId = null;
  }

  animationFrame() {
    this.refs.header.getWrappedInstance().timeLineHeaderLeft = -this.refs.plotList.getWrappedInstance().scrollAreaLeft;
  }

  calculateBackground() {
    const svgToTransform =
      `<svg xmlns="http://www.w3.org/2000/svg" width= "100" height="36">
      <rect width= "100" height="18" fill="white" fillOpacity="0.0" />
      <rect width= "100" height="18" y="18" fill="lightgrey" fillOpacity="0.0" />
      </svg>`;
    return 'url(' + CSS.escape('data:image/svg+xml;base64,' + btoa(svgToTransform)) + ')';
  }

  render() {
    return (
      <div>
        <div
          className="BreakDown"
          style={{position: 'relative', maxWidth: 1200, minWidth: 700, height: 500}}>
          <Header ref="header"/>
          <div className="content" style={{position: 'relative', height: 447, overflowX: 'hidden', overflowY: 'scroll'}}>
            <div className="combine" style={{position: 'relative', top: 0, bottom: 0, right: 0, left: 0}}>
              <div className="Background"
                style={{backgroundImage: this.calculateBackground(), position: 'absolute', height: '100%', width: '100%'}} >
              </div>
              <EventList />
              <PlotList ref="plotList"/>
            </div>
          </div>
        </div>
        <EventData />
      </div>
    );
  }
}
