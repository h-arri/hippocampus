import { Col, Row, Skeleton } from "antd";
import React, { Component } from "react";
import { connect } from "react-redux";
import { getRemindersApi } from "../../store/actions/reminders";
import Reminder from "../reminder/Reminder";
import "./RemindersList.css";

class RemindersList extends Component {

  componentDidMount() {
    this.props.getRemindersApi();
  }

  render() {
    const { loading } = this.props.loading;

    return (
      <Skeleton active loading={loading}>
        <Row gutter={[8, 32]} className="grid">
          {this.props.reminders.map(reminder => (
            <Col key={reminder.id} className="col" span={5}>
              <Reminder reminder={reminder} />
            </Col>
          ))}
        </Row>
      </Skeleton>
    );
  }
}

const mapStateToProps = state => {
  return {
    reminders: Object.values(state.reminders.reminders),
    loading: state.reminders.loading
  };
};

export default connect(mapStateToProps, { getRemindersApi })(RemindersList);
