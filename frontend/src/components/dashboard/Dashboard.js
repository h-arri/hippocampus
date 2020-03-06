import React, { Component } from 'react';
import RemindersList from '../reminders-list/RemindersList';
import { Row, Col } from 'antd';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <RemindersList />
      </div>
    );
  }
}

export default Dashboard;
