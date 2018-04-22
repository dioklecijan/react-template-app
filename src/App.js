import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store, routes } from './config';

import TopMenu from './common/components/TopMenu';

// root component

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <TopMenu routes={routes} />
            <hr />
            <div>{routes.map((r, i) => <Route key={`r_${i}`} {...r} />)}</div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
