import React, { Component } from 'react';
import EventList from '../containers/event_list';
import PlotList from '../containers/plot_list';

export default class App extends Component {
  render() {
    return (
      <div
        className="BreakDown">
        <EventList />
        <PlotList />
      </div>
    );
  }
}
