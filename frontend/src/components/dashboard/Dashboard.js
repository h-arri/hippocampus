import React, { Component } from 'react';
import RemindersList from '../reminders-list/RemindersList';
import Create from '../create/Create';
import { Row, Col } from 'antd';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Create />
        <RemindersList />
      </div>
    );
  }
}

export default Dashboard;
