import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getReminders } from '../../store/actions/reminders';
import {Reminder} from '../reminder/Reminder';
import { Row, Col } from 'antd';
import './RemindersList.css';

class RemindersList extends Component {
  componentDidMount() {
    this.props.getReminders();
  }

  render() {
    return (
      <Row gutter={[16, 16]} className="grid">
        {this.props.reminders.map(reminder => (<Col className="col" span={6}><Reminder reminder={reminder}/></Col>))}
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
