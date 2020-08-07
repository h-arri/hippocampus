import { Col, Row, Skeleton } from "antd";
import React from "react";
import Reminder from "../reminder/Reminder";
import "./RemindersList.css";

const RemindersList = ({ reminders, loading }) => {

  return (
    <Skeleton active loading={loading}>
      {reminders &&  <Row gutter={[8, 32]} className="grid">
        {reminders.map(reminder => (
          <Col key={reminder.id} className="col" span={5}>
            <Reminder reminder={reminder} />
          </Col>
        ))}
      </Row>}
    </Skeleton>
  );
};

export default RemindersList;
