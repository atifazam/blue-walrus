import React from 'react';
import App from '../containers/App';
import Home from '../components/Home';
import Test from '../components/Test';
import NotFound from '../components/NotFound';
import { Route, IndexRoute } from 'react-router';

import {renderTransitionContext, withTransition} from 'react-router-transitions';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default (
  <Route path="/" component={withTransition(App)}>
    <IndexRoute component={Home} />
    <Route path="/home" component={Home} />
    <Route path="/test" component={Test} />
    <Route path="*" component={NotFound} />
  </Route>
);
