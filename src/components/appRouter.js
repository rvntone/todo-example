import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Component0 from './dumies/compontent0';
import Component1 from './dumies/compontent1';
import Component2 from './dumies/compontent2';
import Component3 from './dumies/compontent3';
import Compontent4 from './dumies/compontent4';
import Compontent6 from './dumies/compontent6';
import Compontent7 from './dumies/compontent7';
import LiftingStateUp from './liftingStateUp';

export default class AppRouter extends Component {
  render() {
    return (
      <div className="content">
        <Switch>
          <Route path="/(ruta1|ruta2)" component={Component1} />
          <Route path="/ruta2" component={Component2} />
          <Route path="/ruta3" render={() => <Component3 />} />
          <Route path="/ruta4" component={Compontent4} />
          <Route path="/ruta5" render={() => <Redirect to="/ruta4/ruta5" />} />
          <Route path="/ruta6" component={Compontent6} />
          <Route path="/ruta7/:valor/:otroValor" component={Compontent7} />
          <Route path="/ruta8" component={LiftingStateUp} />
          <Route exact path="/" component={Component0} />
        </Switch>
      </div>
    );
  }
}
