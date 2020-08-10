import { Card, Statistic, Button, Popconfirm } from "antd";
import React, { useState } from "react";
import "./Reminder.css";
import { useDispatch } from "react-redux";
import { deleteReminderApi, updateReminderApi } from "../../store/actions/reminder";
import moment from "moment";

const Reminder = (props) => {
  const { reminder } = props;
  const counter = new Date(reminder.remindAt).getTime();
  const [done, setDone] = useState(reminder.isDone);
  const dispatch = useDispatch();

  const handleDone = () => {
    setDone(true);
    dispatch(updateReminderApi({
      ...reminder,
      isDone: true,
      remindAt: moment(reminder.remindAt).format('YYYY-MM-DD hh:mm:ss')
    }));
  }

  const handleDelete = () => {
    dispatch(deleteReminderApi(reminder.id));
  }

  return (<>
    <Card
      title={<Statistic.Countdown
        title="in"
        className="counter"
        value={counter}
        format="HH:mm:ss"
      />}
      className={done ? "done" : "reminder"}
      actions={[
        <Popconfirm title="Are you sure?" okText="Yes" cancelText="No"
          cancelButtonProps={{ danger: true }} onConfirm={handleDelete}>
          <Button danger className="button">Delete</Button>
        </Popconfirm>,
        <Button className="button" onClick={handleDone}>Done</Button>
      ]}
      hoverable
      cover={
        reminder.description
      }
    >
      <Card.Meta title={reminder.extra} />
    </Card>
  </>
  );
}

export default Reminder;