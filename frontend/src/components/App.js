import { Provider } from 'react-redux';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Dashboard from './Dashboard';
import store from '../store';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Hiipocampus Reminders</h1>
        <Provider store={store}>
          <Dashboard />
        </Provider>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#app'));
