import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import routes from './config/routes';
import RouterContext from 'react-router/lib/RouterContext';

import {renderTransitionContext, withTransition} from 'react-router-transitions';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import styles from './scss/styles.scss';

render(
  ( <Router history={browserHistory} routes={routes} render={renderTransitionContext({
      RouterContext,
      TransitionGroup: ReactCSSTransitionGroup,
      defaultTransition: {
        transitionName: 'fade',
        transitionEnterTimeout: 500,
        transitionLeaveTimeout: 300
      }
    })} /> ),
    document.getElementById('app')
);
