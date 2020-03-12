import './RemindersList.css';

import { Row, Col } from 'antd';
import { connect } from 'react-redux';
import React, { Component } from 'react';

import { getRemindersAsync } from '../../store/actions/reminders';
import Reminder from '../reminder/Reminder';

class RemindersList extends Component {
  componentDidMount() {
    this.props.getRemindersAsync();
  }

  render() {
    return (
        <Row gutter={[8, 32]} className="grid">
          {this.props.reminders.map(reminder => (<Col key={reminder.id}
            className="col" span={5}><Reminder reminder={reminder}/></Col>))}
        </Row>
    );
  }
}

const mapStateToProps = state => {
  return {
    reminders: Object.values(state.reminders.reminders)
  };
};

export default connect(
  mapStateToProps,
  {getRemindersAsync}
)(RemindersList);
