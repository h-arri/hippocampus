import { Col, Row } from "antd";
import React, { Component } from "react";
import { connect } from "react-redux";
import { getRemindersFromApi } from "../../store/actions/reminders";
import Reminder from "../reminder/Reminder";
import "./RemindersList.css";


class RemindersList extends Component {
  componentDidMount() {
    this.props.getRemindersFromApi();
  }

  render() {

    return (
      <Row gutter={[8, 32]} className="grid">
        {this.props.reminders.map(reminder => (
          <Col key={reminder.id} className="col" span={5}>
            <Reminder reminder={reminder} />
          </Col>
        ))}
      </Row>
    );
  }
}

const mapStateToProps = state => {
  return {
    reminders: Object.values(state.reminders.reminders)
  };
};

export default connect(mapStateToProps, { getRemindersFromApi })(RemindersList);
