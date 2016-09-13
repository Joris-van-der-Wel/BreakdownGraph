import React, { Component } from 'react';
import ChildrenData from './children_data';
import MetaData from './meta_data';
import TimingsData from './timings_data';

class EventData extends Component {
  render() {
    return (
      <div style={{display: 'flex'}}>
        <ChildrenData />
        <MetaData />
        <TimingsData />
      </div>
    );
  }
}

export default EventData;
