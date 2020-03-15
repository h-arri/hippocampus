import "./Reminder.css";

import { Card, Statistic, Tooltip } from "antd";
import {
  NotificationFilled,
  EllipsisOutlined,
  LikeFilled,
  UserOutlined
} from "@ant-design/icons";
import React from "react";

export default class Reminder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reminder: props.reminder
    };
  }

  render() {
    const {
      reminder: { description, extra, remind_at, byWho, forWho, created_at }
    } = this.state;
    const counter = new Date(remind_at).getTime();

    return (
      <Card
        title={description}
        className="reminder"
        actions={[
          <LikeFilled key="setting" />,
          <NotificationFilled key="edit" />,
          <EllipsisOutlined key="ellipsis" />
        ]}
        hoverable
        cover={
          <Statistic.Countdown
            title="in"
            className="counter"
            value={counter}
            format="HH:mm:ss"
          />
        }
      >
        <Card.Meta title={extra} />
        <div className="meta-wrapper">
          <div className="meta-desc">
            <Tooltip title={forWho} placement="left" ararrowPointAtCenterrow>
              <UserOutlined className="meta-desc-icon" />
            </Tooltip>
            <span>
              {new Intl.DateTimeFormat("de-DE", {
                year: "numeric",
                month: "numeric",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
                hour12: false
              }).format(new Date(created_at))}
            </span>
          </div>
          <Tooltip title={forWho} placement="right">
            <UserOutlined />
          </Tooltip>
        </div>
      </Card>
    );
  }
}
