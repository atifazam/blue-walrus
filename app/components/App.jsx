import React from 'react';
import { Link } from 'react-router';
import DevTools from 'mobx-react-devtools';

import actions from '../utils/actions';

class App extends React.Component {
  
  componentDidMount() {
      actions.getPosts();
  }
  
  render() {
    return (
      <div className="welcome">
        <h1>My app</h1>
        <nav>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/test">Test</Link></li>
          <li><Link to="/notfound">Not Found</Link></li>
          <li><Link to="/asddsa">Random</Link></li>
        </nav>
        <div className="detail">
          <DevTools />
          {this.props.children}
        </div>
      </div>
    )
  }

}

export default App;
