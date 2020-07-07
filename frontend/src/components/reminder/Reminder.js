import "./Reminder.css";

import { Card, Statistic, Button, Popconfirm } from "antd";
import React, { useState } from "react";

const Reminder = (props) => {
  const {
    reminder: { description, extra, isDone, remindAt }
  } = props;
  const counter = new Date(remindAt).getTime();
  const [done, setDone] = useState(isDone);
  const [deleted, setDeleted] = useState(false);

  const handleDone = () => {
    setDone(true);
  }

  const handleDelete = () => {
    setDeleted(true);
  }

  return (<>
    {!deleted && <Card
      title={<Statistic.Countdown
        title="in"
        className="counter"
        value={counter}
        format="HH:mm:ss"
      />}
      className={done ? "done" : "reminder"}
      actions={[
        <Popconfirm title="Are you sure?" okText="Yes" cancelText="No" cancelButtonProps={{ danger: true }}>
          <Button danger className="button" onClick={handleDelete}>Delete</Button>
        </Popconfirm>,
        <Button className="button" onClick={handleDone}>Done</Button>
      ]}
      hoverable
      cover={
        description
      }
    >
      <Card.Meta title={extra} />
    </Card>}
  </>
  );
}

export default Reminder;