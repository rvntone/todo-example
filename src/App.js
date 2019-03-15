import React, { Component } from 'react';
import './app.scss';
import AppRouter from './components/appRouter';

class App extends Component {
  render() {
    return (
      <div className="app">
        <AppRouter />
      </div>
    );
  }
}

export default App;
