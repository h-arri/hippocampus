import React, { Component } from 'react';

import RemindersList from '../reminders-list/RemindersList';

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
