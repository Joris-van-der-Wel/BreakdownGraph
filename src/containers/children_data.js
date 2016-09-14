import React, { Component } from 'react';
import { connect } from 'react-redux';

class ChildrenData extends Component {
  renderList() {
    if (this.props.activeEvent === null) {
      return (
        <div> Select Event for overview.. </div>
      );
    }
    if (this.props.activeEvent.children.length !== 0) {
      return this.props.activeEvent.children.map((child) => {
        return (
          <div style={{display: 'flex'}}>
            <div style={{float: 'left', width: '75%'}}> {child.type} </div>
            <div style={{float: 'right', width: '25%'}}>
              <div style={{display: 'inline-block', verticalAlign: 'bottom', height: '100%', width: '0'}}></div>
              : {Math.round((child.timing.duration + 0.00001) * 100) / 100}ms
            </div>
          </div>
          );
      });
    }
    return (
    <div> No child-events </div>
    );
  }
  render() {
    console.log(this.props.activeEvent);
    if (this.props.activeEvent === null) {
      return (
        <div className="data" style={{display: 'inline-block', width: '33.33%', height: 'auto', padding: '2px 2px 2px 2px'}}>
          <strong> Children: No event selected </strong>
          <div> {this.renderList()} </div>
        </div>
      );
    }
    return (
      <div className="data" style={{display: 'inline-block', width: '33.33%', height: 'auto', padding: '2px 2px 2px 2px'}}>
        <strong> {this.props.activeEvent.type} > Children </strong>
        <div> {this.renderList()} </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    activeEvent: state.activeEvent
  };
}

export default connect(mapStateToProps)(ChildrenData);
