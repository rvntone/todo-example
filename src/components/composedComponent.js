import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { Connected } from './connected';

class ComposedComponent extends Component {
  renderChildren() {
    if (this.props.children) {
      return this.props.children;
    }
    return <div>Empty</div>;
  }
  render() {
    console.log(this.props);
    return (
      <div>
        ComposedComponent
        <div className="content">{this.renderChildren()}</div>
      </div>
    );
  }
}
// ComposedComponent.propTypes = {
// children: PropTypes.oneOf(Connected)
// };

export default ComposedComponent;
