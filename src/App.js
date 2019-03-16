import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import AppRouter from './components/appRouter';
import Menu from './components/menu';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <React.Fragment>
            <header className="App-header">
              MI APP
              <Menu />
            </header>
            <AppRouter />
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
