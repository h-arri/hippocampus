import { Button, Card, Popconfirm } from "antd";
import React from "react";
import "./Reminder.css";
import { useDispatch } from "react-redux";
import {
  deleteReminderApi,
  updateReminderApi,
} from "../../store/actions/reminder";
import moment from "moment";

const Reminder = (props) => {
  const { reminder } = props;
  const dispatch = useDispatch();

  const handleDone = () => {
    dispatch(
      updateReminderApi({
        ...reminder,
        isDone: true,
        remindAt: moment(reminder.remindAt).format("YYYY-MM-DD hh:mm:ss"),
      })
    );
  };

  const handleDelete = () => {
    dispatch(deleteReminderApi(reminder.id));
  };

  return (
    <>
      <Card
        title={moment(new Date(reminder.remindAt).getTime()).fromNow()}
        className={reminder.isDone ? "done" : "reminder"}
        actions={[
          <Popconfirm
            title="Are you sure?"
            okText="Yes"
            cancelText="No"
            cancelButtonProps={{ danger: true }}
            onConfirm={handleDelete}
            disabled={reminder.isDone}
          >
            <Button danger className="delete-button" disabled={reminder.isDone}>
              Delete
            </Button>
          </Popconfirm>,
          <Button
            className="done-button"
            onClick={handleDone}
            disabled={reminder.isDone}
          >
            Done
          </Button>,
        ]}
        hoverable
        cover={reminder.description}
      >
        <Card.Meta title={reminder.extra} />
      </Card>
    </>
  );
};

export default Reminder;
