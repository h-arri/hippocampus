import './RemindersList.css';

import { Row, Col } from 'antd';
import { connect } from 'react-redux';
import React, { Component } from 'react';

import { getReminders } from '../../store/actions/reminders';
import Create from '../create/Create';
import Reminder from '../reminder/Reminder';

class RemindersList extends Component {
  componentDidMount() {
    this.props.getReminders();
  }

  render() {
    return (
      <Row gutter={[16, 16]} className="grid">
        <Col className='col' span={6}><Create /></Col>
        {this.props.reminders.map(reminder => (<Col key={reminder.id} className="col" span={6}><Reminder reminder={reminder}/></Col>))}
      </Row>
    );
  }
}

const mapStateToProps = state => ({
  reminders: Object.values(state.reminders)
});

// const mapDispatchToProps = dispatch => ({
//   bindActionCreators({getReminders}, dispatch)
// });

export default connect(
  mapStateToProps,
  {getReminders}
)(RemindersList);
