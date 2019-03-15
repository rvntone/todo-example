import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';

class NewItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskName: '',
    };
    this.onChange = this.onChange.bind(this);
    this.onAddNew = this.onAddNew.bind(this);
    this.backToList = this.backToList.bind(this);
  }
  onChange(event) {
    this.setState({
      taskName: event.target.value,
    });
  }
  onAddNew() {
    const { taskName } = this.state;
    const { history } = this.props;
    this.props.addNewTask({ taskName });
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
        <button disabled={this.shouldBeDisabled()} onClick={this.onAddNew}>
          Add
        </button>
        <button onClick={this.backToList}>Cancel</button>
      </div>
    );
  }
}

export default withRouter(NewItem);
