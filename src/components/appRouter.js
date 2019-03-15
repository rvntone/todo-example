import React, { Component } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import Todo from './todo';
import NotFound from './common/notFound';

export default class AppRouter extends Component {
  render() {
    return (
      <Router>
        <div className="appContent">
          <Switch>
            <Route path={'/(|add)'} component={Todo} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}
