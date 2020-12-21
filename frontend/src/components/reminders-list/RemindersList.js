import { Col, Empty, Row, Skeleton } from "antd";
import React from "react";
import Reminder from "../reminder/Reminder";
import "./RemindersList.css";

const RemindersList = ({ reminders, loading }) => {
  return (
    <Skeleton active loading={loading}>
      {reminders.length > 0 ? (
        <Row gutter={[32, 48]} className="row">
          {reminders.map((reminder) => (
            <Col
              key={reminder.id}
              className="col"
              xs={24}
              sm={24}
              md={12}
              lg={8}
              xl={8}
            >
              <Reminder reminder={reminder} />
            </Col>
          ))}
        </Row>
      ) : (
        <Empty description="No reminders! :/" />
      )}
    </Skeleton>
  );
};

export default RemindersList;
