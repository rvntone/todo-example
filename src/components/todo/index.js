import React, { Component } from 'react';
import Header from './header';
import TodoRouter from './todoRouter';

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
    this.onAddNewTask = this.onAddNewTask.bind(this);
    this.onChangeStatus = this.onChangeStatus.bind(this);
    this.onRemoveTask = this.onRemoveTask.bind(this);
  }
  onRemoveTask(pos) {
    const { list } = this.state;
    list.splice(pos, 1);
    this.setState({ list });
  }
  onAddNewTask(task) {
    const { list } = this.state;
    task.status = 0;
    list.push(task);
    this.setState({ list });
  }
  onChangeStatus(pos) {
    const { list } = this.state;
    const task = list[pos];
    task.status = task.status === 2 ? 0 : task.status + 1;
    this.setState({ list });
  }
  render() {
    const { list } = this.state;
    return (
      <div>
        <Header />
        <TodoRouter
          changeStatus={this.onChangeStatus}
          addNewTask={this.onAddNewTask}
          removeTask={this.onRemoveTask}
          list={list}
        />
      </div>
    );
  }
}
