import React, { Component } from 'react';

export default class MiComponente extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    const { miValor } = props;
    this.state = {
      miValor,
      miValor2: 222,
    };
    this.cambio = this.cambio.bind(this);
    this.click = this.click.bind(this);
  }
  cambio() {
    console.log(2);
    this.setState(state => {
      return {
        miValor: state.miValor + Math.random() * 100,
      };
    });
  }
  algo() {
    console.log(1);
  }
  click() {
    console.log(`click ${this.state.miValor}`);
  }
  render() {
    let { miValor2, miValor3: a = '3333' } = this.state;
    return (
      <div>
        Mi <span onClick={this.cambio}>Componente</span>
        <br />
        <span
          onClick={() => {
            this.setState({ miValor3: 1 });
          }}
        >
          {this.state.miValor}
        </span>
        <br />
        {miValor2}
        <br />
        {a}
      </div>
    );
  }
}
