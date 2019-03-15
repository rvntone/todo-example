import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import List from './list';
import NewItem from './newItem';

export default class TodoRouter extends Component {
  render() {
    const { list, addNewTask, changeStatus, removeTask } = this.props;
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <List
              list={list}
              changeStatus={changeStatus}
              removeTask={removeTask}
            />
          )}
        />
        <Route
          path="/add"
          render={() => <NewItem list={list} addNewTask={addNewTask} />}
        />
      </Switch>
    );
  }
}
