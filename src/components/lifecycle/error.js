import React, { Component } from 'react';

export default class Error extends Component {
  render() {
    const { valor } = this.props;
    if (valor > 4) {
      throw new Error('ERROR renderError');
    }
    console.log('===== render', this.constructor.name);
    return null;
  }
}
