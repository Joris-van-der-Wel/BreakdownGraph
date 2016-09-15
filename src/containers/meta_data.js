import React, { Component } from 'react';
import { connect } from 'react-redux';

class MetaData extends Component {
  renderList() {
    if (this.props.activeEvent === null) {
      return (
        <div> Select Event for overview.. </div>
      );
    }
    return (
      <div style={{display: 'block'}}>
        <div style={{display: 'flex'}}>
          <div style={{float: 'left', width: '30%'}}>
            <div>comment</div>
          </div>
          <div style={{float: 'right', width: '70%', wordWrap: 'break-word'}}>
            <div>: {this.props.activeEvent.comment}</div>
          </div>
        </div>
        <div style={{display: 'flex'}}>
          <div style={{float: 'left', width: '30%'}}>
            <div>id</div>
          </div>
          <div style={{float: 'right', width: '70%', wordWrap: 'break-word'}}>
            <div>: {this.props.activeEvent.id}</div>
          </div>
        </div>
        <div style={{display: 'flex'}}>
          <div style={{float: 'left', width: '30%'}}>
            <div>children</div>
          </div>
          <div style={{float: 'right', width: '70%', wordWrap: 'break-word'}}>
            <div>: {this.props.activeEvent.children.length}</div>
          </div>
        </div>
      </div>
    );
  }
  render() {
    if (this.props.activeEvent === null) {
      return (
        <div className="dataMid" style={{float: 'left', width: '38%', height: 'auto', padding: '2px 2px 2px 2px'}}>
          <strong> MetaData: No event selected </strong>
          <div> {this.renderList()} </div>
        </div>
      );
    }
    return (
      <div className="dataMid" style={{float: 'left', width: '38%', height: 'auto', padding: '2px 2px 2px 2px'}}>
        <strong> {this.props.activeEvent.type} > MetaData </strong>
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

export default connect(mapStateToProps)(MetaData);
