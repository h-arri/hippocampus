import { connect } from 'react-redux';
import React, { Component } from 'react';
import Reminder from '../reminder';
import { getReminders } from '../../store/actions/reminders';

class RemindersList extends Component {
  componentDidMount() {
    this.props.getReminders();
  }

  render() {
    return (
      <div>
        {this.props.reminders.map(reminder => (<Reminder reminder={reminder} />))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  reminders: Object.values(state.reminders)
});

// const mapDispatchToProps = dispatch => ({
//   bindActionCreators({getReminders}, dispatch)
// })

export default connect(
  mapStateToProps,
  {getReminders}
)(RemindersList);
