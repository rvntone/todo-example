import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './store';

import './App.css';
import Connected from './components/connected';
import ComposedComponent from './components/composedComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          REDUX
          <div>
            <ComposedComponent>
              <Connected />
            </ComposedComponent>
          </div>
        </Provider>
      </div>
    );
  }
}

export default App;
