import React, { Component } from 'react';
import ChildrenData from './children_data';
import MetaData from './meta_data';
import TimingsData from './timings_data';

class EventData extends Component {
  render() {
    return (
      <div style={{display: 'flex', maxWidth: '1206', minWidth: '600'}}>
        <ChildrenData />
        <MetaData />
        <TimingsData />
      </div>
    );
  }
}

export default EventData;
