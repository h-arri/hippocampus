import React, { Component } from 'react';
import RemindersList from './RemindersList';

class Dashboard extends Component {
  render() {
    return (
      <div className='ui container'>
        <div>Remind me</div>
        <RemindersList />
      </div>
    );
  }
}

export default Dashboard;
