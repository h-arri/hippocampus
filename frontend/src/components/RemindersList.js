import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getReminders } from '../store/actions/reminders';

class RemindersList extends Component {
  componentDidMount() {
    this.props.getReminders();
  }

  render() {
    return (
      <div className='ui relaxed divided list' style={{ marginTop: '2rem' }}>
        {this.props.reminders.map(reminder => (
          <div className='item' key={reminder.id}>
            <i className='large calendar outline middle aligned icon' />
            <div className='content'>
              <a className='header'>{reminder.description}</a>
              <div className='description'>{reminder.remind_me_at}</div>
            </div>
          </div>
        ))}
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
