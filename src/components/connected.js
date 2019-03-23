import React, { Component } from 'react';
import { connect } from 'react-redux';

import { testAction } from '../actions/test';

export class Connected extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    this.props.testAction(Math.random());
  }
  render() {
    console.log(this.props);
    return <div onClick={this.onClick}>Connected {this.props.value}</div>;
  }
}

const mapStateToProps = state => {
  const { value = 1 } = state;
  return { value };
};

const mapDispatchToProps = { testAction };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Connected);
