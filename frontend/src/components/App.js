import { Provider } from 'react-redux';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Typography} from 'antd';
import Icon from '@ant-design/icons';

import Dashboard from '../components/dashboard/Dashboard';
import store from '../store';
import './App.css';
import Hippo from '../../assets/hippo.svg';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="header">
          <Icon component={Hippo} className="hippo"/>
          <Typography.Title className="title">Hippocampus</Typography.Title>
        </div>
        <Provider store={store}>
          <Dashboard />
        </Provider>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#app'));
