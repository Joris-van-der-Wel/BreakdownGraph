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
      let iterator = 0;
      return this.props.activeEvent.children.map((child) => {
        iterator += 1;
        return (
          <div key={child + iterator} style={{display: 'flex'}}>
            <div style={{float: 'left', width: '75%', wordWrap: 'break-word'}}> {child.type} </div>
            <div style={{float: 'right', width: '25%'}}>
              <div style={{display: 'inline-block', verticalAlign: 'bottom', height: '100%', width: '0'}}></div>
              : {Math.round((child.timing.duration + 0.00001) * 100) / 10000}ms
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
    if (this.props.activeEvent === null) {
      return (
        <div className="data" style={{display: 'inline-block', width: '37.5%', height: 'auto', padding: '2px 2px 2px 2px'}}>
          <strong> Children: No event selected </strong>
          <div> {this.renderList()} </div>
        </div>
      );
    }
    return (
      <div className="data" style={{display: 'inline-block', width: '37.5%', height: 'auto', padding: '2px 2px 2px 2px'}}>
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
