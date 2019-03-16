import React, { Component } from 'react';

export default class Child extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  onChange(event) {
    const { value } = event.target;
    this.props.change(value);
  }
  render() {
    const { value } = this.props;
    return (
      <div>
        Child
        <input value={value} onChange={this.onChange} />
      </div>
    );
  }
}
