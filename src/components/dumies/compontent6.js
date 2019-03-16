import React, { Component } from 'react';
import { Prompt } from 'react-router-dom';

export default class Compontent6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      lastName: '',
      ci: '',
      isChanged: false,
    };
  }
  onChangeValue(event) {
    const { value, name: field } = event.target;
    if (!value.includes('#')) {
      this.setState({ [field]: value, isChanged: true });
    }
  }
  render() {
    const { name, lastName, isChanged, ci } = this.state;
    return (
      <div>
        <h2>Compontent 6</h2>
        <label htmlFor="name">Nombre:</label>
        <input
          name="name"
          value={name}
          onChange={this.onChangeValue.bind(this)}
        />
        <label htmlFor="lastName">Apellido:</label>
        <input
          name="lastName"
          value={lastName}
          onChange={this.onChangeValue.bind(this)}
        />
        <label htmlFor="ci">CI:</label>
        <input name="ci" value={ci} onChange={this.onChangeValue.bind(this)} />
        <Prompt when={isChanged} message="¿?" />
      </div>
    );
  }
}
