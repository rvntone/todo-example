import React, { Component } from 'react';
import Header from './header';
import TodoRouter from './todoRouter';
import { TodoContext } from './todoContext';
class Todo extends Component {
  constructor(props) {
    super(props);
    this.onAddNewTask = this.onAddNewTask.bind(this);
    this.onChangeStatus = this.onChangeStatus.bind(this);
    this.onRemoveTask = this.onRemoveTask.bind(this);
    this.state = {
      list: [],
      addNewTask: this.onAddNewTask,
      changeStatus: this.onChangeStatus,
      removeTask: this.onRemoveTask,
    };
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
    console.log('todocontext', this.context);
    return (
      <TodoContext.Provider value={this.state}>
        <Header />
        <TodoRouter />
      </TodoContext.Provider>
    );
  }
}
Todo.contextType = TodoContext;
export default Todo;
