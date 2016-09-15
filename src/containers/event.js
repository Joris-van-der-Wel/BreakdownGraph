import React, {Component} from 'react';
import ChildList from './child_list';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { expandEvent } from '../actions/index';
import { clickEvent } from '../actions/index';

class Event extends Component {
  eventStart = this.props.event.timing.begin.counter - this.props.counterStart;
  eventDuration = this.props.event.timing.duration;
  rectWidth = this.eventDuration * this.props.globals.plotScale;
  rectStart = this.eventStart * this.props.globals.plotScale;
  arrowStart = this.rectWidth + this.rectStart + (10 * this.props.globals.plotScale);
  textDuration = Math.round((this.eventDuration + 0.00001) * 100) / 100

  get isInTimeframe() {
    return this.props.event.timing.begin.counter < this.props.allEvents.timing.end.counter;
  }

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

  renderExpandButton() {
    if (this.hasChidren === true) {
      return (
          <input style={{position: 'relative', left: 5, top: 2}}
            type="image"
            src= {`${this.isExpanded ? '../../style/images/toggle_minus.png' : '../../style/images/toggle_plus.png'}`}
            onClick={() => this.nameClicked()}/>
      );
    }
  }

  render() {
    if (this.isInTimeframe) {
      if (this.props.source === 'event') {
        if (this.hasChildren) {
          return (
            <div
              className = {`Event name ${this.isExpanded ? 'expandStateOpen' : 'expandStateClosed'}`}>
              <div
                className = {`type ${this.hasChildren ? 'clickable' : 'notClickable'}`}>
                <div style={{display: 'inline-block', width: 25}}>
                  <input style={{position: 'relative', left: 5, top: 2}}
                    type="image"
                    src= {`${this.isExpanded ? '../../style/images/toggle_minus.png' : '../../style/images/toggle_plus.png'}`}
                    onClick={() => this.nameClicked()}/>
                </div>
                <div style={{display: 'inline-block'}}
                  onClick={() => this.props.clickEvent(this.props.event)}>
                  {this.props.event.type}
                </div>
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
            className = {`Event name ${this.isExpanded ? 'expandStateOpen' : 'expandStateClosed'}`}>
            <div
              className = {`type ${this.hasChildren ? 'clickable' : 'notClickable'}`}>
              <div style={{display: 'inline-block', width: 25}}>
                <span style={{position: 'relative', left: 5, top: 2}}>
                </span>
              </div>
              <div style={{display: 'inline-block'}}
                onClick={() => this.props.clickEvent(this.props.event)}>
                {this.props.event.type}
              </div>
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
          <svg className="timeline" width={this.props.plotWidth} height="18" fill= {this.props.color}>
            <rect width= {this.rectWidth} height="14" x= {this.rectStart} y="2" />
            <text fontSize="14" height="8" x= {this.arrowStart} y="14">
              <tspan height="8" x= {this.arrowStart} y="14" fill="black" style={{display: 'inline', fontWeight: '600'}}>{`↦` + `${this.textDuration}` + `ms`}</tspan>
            </text>
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
    return null;
  }
}

function mapStateToProps(state) {
  return {
    expandedEvents: state.expandedEvents,
    globals: state.globals,
    height: state.height,
    activeEvent: state.activeEvent,
    allEvents: state.input
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ expandEvent: expandEvent, clickEvent: clickEvent }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Event);
