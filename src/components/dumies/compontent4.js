import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Compontent5 from './compontent5';

export default class Compontent4 extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        Component 4
        <div>
          <Route path="/ruta4/ruta5" component={Compontent5} />
        </div>
      </div>
    );
  }
}
