import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';
import { TodoContext } from './todoContext';
class NewItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskName: '',
    };
    this.onChange = this.onChange.bind(this);
    this.backToList = this.backToList.bind(this);
  }
  onChange(event) {
    this.setState({
      taskName: event.target.value,
    });
  }
  onAddNew(addNewTask) {
    const { taskName } = this.state;
    const { history } = this.props;
    addNewTask({ taskName });
    history.push('/');
  }
  backToList() {
    const { history } = this.props;
    history.push('/');
  }
  shouldBeDisabled() {
    const { taskName } = this.state;
    return taskName.trim() === '';
  }
  render() {
    const { taskName } = this.state;
    return (
      <div>
        <label htmlFor="taskName">Task:</label>
        <input name="taskName" value={taskName} onChange={this.onChange} />
        <TodoContext.Consumer>
          {({ addNewTask }) => (
            <button
              disabled={this.shouldBeDisabled()}
              onClick={this.onAddNew.bind(this, addNewTask)}
            >
              Add
            </button>
          )}
        </TodoContext.Consumer>
        <button onClick={this.backToList.bind}>Cancel</button>
      </div>
    );
  }
}

export default withRouter(NewItem);
