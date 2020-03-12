import './App.css';
import './ant-styles.css';

import { Provider } from 'react-redux';
import {Typography} from 'antd';
import Icon from '@ant-design/icons';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Dashboard from '../components/dashboard/Dashboard';
import Hippo from '../../assets/hippo.svg';
import store from '../store';

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <div className='header'>
          <Icon component={Hippo} className='hippo' />
          <div className='shadow-conatiner'>
            <p className="shadow-frame">
              <svg version="1.1" className="shadow" id="Layer_1"
                xmlns="http://www.w3.org/2000/svg" xmlns-xlink="http://www.w3.org/1999/xlink"
                x="61px" y="20px" width="122.436px" height="39.744px"
                viewBox="0 0 122.436 39.744" enableBackground="new 0 0 122.436 39.744"
                xml-space="preserve">
                  <ellipse fill='mediumseagreen' cx="61.128" cy="19.872" rx="49.25" ry="8.916"/>
                </svg>
            </p>
          </div>
        </div>
        <Provider store={store}>
          <Dashboard />
        </Provider>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#app'));
