import React, { Component } from 'react';

export default class MiComponente extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ['valor10', 'valor111', 'valor13', 'valor15'],
    };
  }
  renderValores() {
    const { list } = this.state;
    return list.map((valor, key) => {
      return <div key={key}>{valor}</div>;
    });
    // const result = [];
    // list.forEach((valor, key) => {
    //   result.push(<div key={key}>{valor}</div>);
    // });
    // return result;
  }
  render() {
    return (
      <div>
        Mi <span>Componente</span> @ index
        {this.renderValores()}
      </div>
    );
  }
}
