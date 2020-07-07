import { Col, Row, Skeleton } from "antd";
import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { getRemindersApi } from "../../store/actions/reminders";
import Reminder from "../reminder/Reminder";
import "./RemindersList.css";

const RemindersList = ({ reminders, loading }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    (async function fetchReminders() { await dispatch(getRemindersApi()); })();
  }, []);

  return (
    <Skeleton active loading={loading}>
      <Row gutter={[8, 32]} className="grid">
        {reminders.map(reminder => (
          <Col key={reminder.id} className="col" span={5}>
            <Reminder reminder={reminder} />
          </Col>
        ))}
      </Row>
    </Skeleton>
  );
};

const mapStateToProps = state => ({
  reminders: Object.values(state.reminders.reminders),
  loading: state.reminders.loading
});

export default connect(mapStateToProps)(RemindersList);
