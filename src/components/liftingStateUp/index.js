import React, { Component } from 'react';
import Child from './child';
import SecondChild from './secondChild';

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
    this.onNameChange = this.onNameChange.bind(this);
  }
  onNameChange(name) {
    this.setState({ name });
  }
  render() {
    const { name } = this.state;
    return (
      <div>
        <Child value={name} change={this.onNameChange} />
        <SecondChild name={name} />
      </div>
    );
  }
}
