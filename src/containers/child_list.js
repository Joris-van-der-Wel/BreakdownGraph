import React, {Component} from 'react';

class ChildList extends Component {
  renderList() {
    return this.props.children.map((child) => {
      console.log(child);
      if (this.props.source === 'event') {
        return (
          <li>
            {/* key={child.type}> */}
            {child.type}
          </li>
        );
      }
      return (
        <li>
          {/* key={child.type}> */}
          {child.timing.begin.time}
        </li>
      );
    });
  }
  render() {
    return (
      <ul className="list-group">
        {this.renderList()}
      </ul>
    );
  }
}

export default ChildList;
