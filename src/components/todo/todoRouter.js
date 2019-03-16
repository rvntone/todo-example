import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import List from './list';
import NewItem from './newItem';

export default class TodoRouter extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={List} />
        <Route path="/add" component={NewItem} />
      </Switch>
    );
  }
}
