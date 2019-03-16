import React, { Component } from 'react';

export default class SecondChild extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 'loading...',
    };
    this.getTimeAsync();
  }
  getTime() {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    fetch(url)
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(data => {
        console.log(data);
        this.setState({ time: data.title });
      })
      .catch(error => {
        console.log(error);
      });
    console.log('Done fetching????');
  }
  async getTimeAsync() {
    try {
      const url = 'https://jsonplaceholder.typicode.com/todos/1';
      const response = await fetch(url);
      console.log(response);
      const data = await response.json();
      console.log(data);
      this.setState({ time: data.title });
    } catch (error) {
      console.log(error);
    }
    console.log('Done fetching');
  }
  componentDidMount() {
    this.getTimeAsync();
  }
  render() {
    const { name } = this.props;
    const { time } = this.state;
    return (
      <div>
        SecondChild: {name} {time}
      </div>
    );
  }
}
