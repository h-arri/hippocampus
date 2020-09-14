import { Col, Row, Skeleton } from "antd";
import React from "react";
import Reminder from "../reminder/Reminder";
import "./RemindersList.css";
import NoData from "../no-data/NoData";

const RemindersList = ({ reminders, loading }) => {

  return (
    <Skeleton active loading={loading}>
      {reminders.length > 0 ?  <Row gutter={[8, 32]} className="grid">
        {reminders.map(reminder => (
          <Col key={reminder.id} className="col" span={5}>
            <Reminder reminder={reminder} />
          </Col>
        ))}
      </Row> : <NoData />}
    </Skeleton>
  );
};

export default RemindersList;
