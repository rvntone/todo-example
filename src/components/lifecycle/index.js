import React, { Component } from 'react';
import Error from './error';

export default class LifeCycle extends Component {
  constructor(props) {
    super(props);
    console.log('1.--- constuctor', this.constructor.name);
    this.state = {
      valor: 1,
    };
    this.changeState = this.changeState.bind(this);
  }
  static getDerivedStateFromProps(props, state) {
    console.log('--- getDerivedStateFromProps', LifeCycle.name);
    return { valor2: 3 };
  }
  componentDidMount() {
    console.log('1.--- componentDidMount', this.constructor.name);
  }
  changeState() {
    console.log('changeState', this.state);
    this.setState(state => {
      let { valor } = state;
      valor++;
      return { valor };
    });
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('2.--- shouldComponentUpdate', this.constructor.name);
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('2.--- getSnapshotBeforeUpdate', this.constructor.name);
    return { a: prevState.valor + prevState.valor2 };
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('2.--- componentDidUpdate', this.constructor.name, snapshot);
  }
  componentWillUnmount() {
    console.log('3.--- componentWillUnmount', this.constructor.name);
  }
  static getDerivedStateFromError(error) {
    console.log('--- getDerivedStateFromError', LifeCycle.name, error);
    return { valor: 4 };
  }
  componentDidCatch(error, info) {
    console.log('4.--- componentDidCatch', this.constructor.name, error, info);
  }
  render() {
    console.log('=== render', this.constructor.name);
    const { valor } = this.state;
    return (
      <div onClick={this.changeState}>
        <Error valor={valor} />
        Lifecycle
      </div>
    );
  }
}
