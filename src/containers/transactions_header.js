import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { activeTransaction } from '../actions/index';

class TransactionsHeader extends Component {

  renderList() {
    let bool = true;
    let lastEnd = 0;
    const secondLayer = [];
    const firstLayer = [];

    this.props.allEvents.transactions.map((transaction) => {
      const rectWidth = transaction.timing.duration * this.props.globals.plotScale;
      const rectStart = (transaction.timing.begin.counter - this.props.allEvents.timing.begin.counter) * this.props.globals.plotScale;
      if (lastEnd < transaction.timing.begin.counter) {
        bool = !bool;
        lastEnd = transaction.timing.end.counter;
        firstLayer.push(
          <rect key={rectStart + rectWidth} onClick={() => this.props.activeTransaction(transaction)} width= {rectWidth} height="15" x= {rectStart} y="0" fill={bool === true ? 'rgb(220,197,178)' : 'rgb(220,197,178)'} style={{strokeWidth: '1', stroke: 'black'}}></rect>
        );
        firstLayer.push(
          <text key={rectStart + rectWidth + 'text'} x={rectStart + (rectWidth / 2)} y="11" fill="black" textAnchor="middle" alignmentBaseline="middle" fontSize="13" style={{fontWeight: '600'}}>{transaction.title}</text>
            );
      } else {
        bool = !bool;
        secondLayer.push(
            <rect key={rectStart + rectWidth} onClick={() => this.props.activeTransaction(transaction)} width= {rectWidth} height="15" x= {rectStart} y="16" fill={bool === false ? 'rgb(220,197,178)' : 'rgb(220,197,178)'} style={{strokeWidth: '1', stroke: 'black'}}></rect>
        );
        secondLayer.push(
          <text key={rectStart + rectWidth + 'text'} x={rectStart + (rectWidth / 2)} y="28" fill="black" textAnchor="middle" alignmentBaseline="middle" fontSize="13" style={{fontWeight: '600'}}>{transaction.title}</text>
        );
      }
    });
    const allLayers = firstLayer.concat(secondLayer);
    return allLayers;
  }

  render() {
    return (
      <svg width="100%" height="100%" style={{marginTop: -3}}>
        {this.renderList()}
      </svg>
    );
  }
}

function mapStateToProps(state) {
  return {
    allEvents: state.input,
    globals: state.globals
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ activeTransaction: activeTransaction }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(TransactionsHeader);
