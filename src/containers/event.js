import React, {Component} from 'react';
import ChildList from './child_list';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { expandEvent } from '../actions/index';

class Event extends Component {
  eventStart = this.props.event.timing.begin.counter - this.props.counterStart;
  eventEnd = this.props.event.timing.end.counter - this.props.counterStart;
  eventDuration = this.props.event.timing.duration;
  rectWidth = this.eventDuration * this.props.globals.plotScale;
  rectStart = this.eventStart * this.props.globals.plotScale;

  get isExpanded() {
    return this.props.expandedEvents.has(this.props.event.id);
  }

  get hasChildren() {
    return this.props.hasChildren === 'true';
  }

  nameClicked() {
    if (this.hasChildren) {
      this.props.expandEvent(this.props.event.id);
    }
  }

  render() {
    // const rectStyle = {
    //   fill: 'rgb(0,0,255)',
    //   strokeWidth: 3,
    //   stroke: 'rgb(0,0,0)'
    // };
    //console.log('check: ', this.props.expandedEvents, this.isExpanded);
    // if (this.props.event.children.length === 0) {
    //   if (this.props.source === 'plot') {
    //     return (
    //       <li
    //         className = "list-group-item">
    //         <div>{this.props.event.type}</div>
    //       </li>
    //     );
    //   }
    // }
    if (this.props.source === 'event') {
      console.log(this.props.expandedEvents);
      return (
        <div
          className = {`Event name ${this.isExpanded ? 'expandStateOpen' : 'expandStateClosed'}`}>
          <div
            className = {`type ${this.hasChildren ? 'clickable' : 'notClickable'}`}
            onClick={() => this.nameClicked()}>
            {this.props.event.type}
          </div>
          <div className= "children">
            <ChildList
              source = "event"
              children = {this.props.event.children} />
          </div>
        </div>
      );
    }
    return (
      <div
        className = {`Event plot ${this.isExpanded ? 'expandStateOpen' : 'expandStateClosed'}`}>
        {/* <div> {this.eventStart} => {this.eventEnd}</div> */}
        <svg className="timeline" width={this.props.plotWidth} height="18" fill= {this.props.color}>
          <rect width= {this.rectWidth} height="13" x= {this.rectStart} />
        </svg>
        <div className="children">
          <ChildList
            scale = {this.props.globals.plotScale}
            counterStart = {this.props.start}
            children= {this.props.event.children} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    expandedEvents: state.expandedEvents,
    globals: state.globals
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ expandEvent: expandEvent }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Event);
