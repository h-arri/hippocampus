import "./Reminder.css";

import { Card, Statistic, Button, Popconfirm } from "antd";
import React from "react";

const Reminder = (props) => {
  const {
    reminder: { description, extra, remind_at, byWho, forWho, created_at }
  } = props;
  const counter = new Date(remind_at).getTime();

  return (
    <Card
      title={<Statistic.Countdown
        title="in"
        className="counter"
        value={counter}
        format="HH:mm:ss"
      />}
      className="reminder"
      actions={[
        <Popconfirm title="Are you sure?" okText="Yes" cancelText="No" cancelButtonProps={{ danger: true }}>
          <Button danger className="button">Delete</Button>
        </Popconfirm>,
        <Button className="button">Done</Button>
      ]}
      hoverable
      cover={
        description
      }
    >
      <Card.Meta title={extra} />
    </Card>
  );
}

export default Reminder;