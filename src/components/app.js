import React, { Component } from 'react';
import EventList from '../containers/event_list';
import PlotList from '../containers/plot_list';
import EventData from '../containers/event_data';

export default class App extends Component {
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
          style={{backgroundImage: this.calculateBackground()}} >
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
        <EventData />
      </div>
    );
  }
}
