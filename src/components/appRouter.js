import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Component0 from './dumies/compontent0';
import Component1 from './dumies/compontent1';
import Component2 from './dumies/compontent2';
import Component3 from './dumies/compontent3';
import Compontent4 from './dumies/compontent4';

export default class AppRouter extends Component {
  render() {
    return (
      <div className="content">
        <div>
          <Route path="/(ruta1|ruta2)" component={Component1} />
        </div>
        <div>
          <Route exact path="/" component={Component0} />
          <Route path="/ruta2" component={Component2} />
        </div>
        <Route path="/ruta3" render={() => <Component3 />} />
        <Route path="/ruta4" component={Compontent4} />
      </div>
    );
  }
}
