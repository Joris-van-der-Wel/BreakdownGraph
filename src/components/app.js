import React, { Component } from 'react';
import EventList from '../containers/event_list';
import PlotList from '../containers/plot_list';
import EventData from '../containers/event_data';
import Header from '../containers/header';

export default class App extends Component {

  // componentDidMount() {
  //   document.addEventListener('DOMContentLoaded', () => {
  //     // const scrollArea = document.querySelector('.BreakDown > .Background > .content > .plotlist > .content');
  //     // const header = document.querySelector('.BreakDown > .header > .right > .content');
  //
  //     const frame = () => {
  //       try {
  //         this.animationFrame();
  //       } finally {
  //         this._animationFrameId = requestAnimationFrame(frame);
  //       }
  //     };
  //     this._animationFrameId = requestAnimationFrame(frame);
  //   });
  // }
  //
  // componentWillUnmount() {
  //   cancelAnimationFrame(this._animationFrameId);
  //   this._animationFrameId = null;
  // }
  //
  // animationFrame() {
  //   // header.style.left = -scrollArea.scrollLeft + 'px';
  // }

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
        {/* <div className="container" style={{height: '500', display: 'flex', maxWidth: '1200', minWidth: '600'}}> */}
        <div
          className="BreakDown"
          style={{position: 'relative', maxWidth: 1200, minWidth: 700, height: 500}}>
          <Header />
          <div className="Background"
            style={{backgroundImage: this.calculateBackground(),
            overflow: 'hidden'}} >
            <div className="content" style={{position: 'relative', height: 482, overflowX: 'hidden', overflowY: 'scroll'}}>
              {/* <defs>
                <pattern id="pattern1"
                x="0" y="0" width="100%" height="36"
                patternUnits="userSpaceOnUse" >
                <rect x="100" y="100" fill= "grey"/>
                </pattern>
              </defs> */}
              {/* <svg xmlns="http://www.w3.org/2000/svg" width= "100" height="36">
                <rect width= "100" height="18" fill="white" fillOpacity="0.0" />
                <rect width= "100" height="18" y="18" fill="grey" fillOpacity="0.5" />
              </svg> */}
              <EventList />
              <PlotList />
            </div>
          </div>
        </div>
        {/* </div> */}
        <EventData />
      </div>
    );
  }
}
