import React, {Component} from 'react';
import ChildList from './child_list';

class Event extends Component {
  render() {
    console.log(this.props.event.children.length);
    console.log(this.props.source);
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
      return (
        <li
          className = "list-group-item">
          <div>{this.props.event.type}</div>
          <div>
            <ChildList
              source = "event"
              children= {this.props.event.children} />
          </div>
        </li>
      );
    }
    return (
      <li
        className = "list-group-item">
        <div>{this.props.event.timing.begin.time}</div>
        <div>
          <ChildList
            children= {this.props.event.children} />
        </div>
      </li>
    );
  }
}

export default Event;
