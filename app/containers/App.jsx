import React from 'react';
import { Link } from 'react-router';
import DevTools from 'mobx-react-devtools';

import actions from '../utils/actions';

import EasyTransition from 'react-easy-transition'

class App extends React.Component {
  
  componentDidMount() {
      actions.getPosts();
  }
  
  render() {
    return (
      <div className="wrapper">
        <div className="container">
          <h1>Design Case Studies</h1>
          <nav>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/test">Test</Link></li>
            <li><Link to="/notfound">Not Found</Link></li>
          </nav>
          <div className="detail">
            <EasyTransition
                path={location.pathname}
                initialStyle={{opacity: 0}}
                transition="opacity 0.3s ease-in"
                finalStyle={{opacity: 1}}
            >
              {this.props.children}
            </EasyTransition>
          </div>
        </div>
      </div>
    )
  }

}

export default App;
