import React, { Component } from 'react';
import Compontent8 from './compontent8';

export default class Compontent7 extends Component {
  constructor(props) {
    super(props);
    this.goback = this.goback.bind(this);
  }
  goback() {
    this.props.history.goBack();
  }
  render() {
    const { valor, otroValor } = this.props.match.params;
    return (
      <div>
        <h2>Compontent 7</h2>
        {valor} {otroValor}
        <button onClick={this.goback}>Back</button>
        <Compontent8 valor={valor} />
      </div>
    );
  }
}
