import "./Create.css";

import { BellFilled, StopOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Card, DatePicker, Input } from "antd";
import React from "react";
import moment from "moment";

export default class Reminder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 999999,
      description: "What should I remind?",
      extra: "Extra notes?",
      remind_at: "",
      created_at: new Intl.DateTimeFormat("de-DE", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: false
      }).format(Date.now()),
      editMode: false
    };
  }

  handleDescChange = e => {
    this.setState({ description: e.target.value });
  };

  handleExtraChange = e => {
    this.setState({ extra: e.targe });
  };

  handleDateChange = e => {
    this.setState({ remind_at: e.toString() });
  };

  handleClick = e => {
    console.log("eeee ", e);
  };

  render() {
    const { description, extra, created_at } = this.state;
    const counter = Date.now().getTime;

    return (
      <Card
        title={
          <Input
            placeholder="What should be reminded?!"
            size="large"
            onChange={this.handleDescChange}
          />
        }
        className="create"
        actions={[
          <Button
            size="large"
            icon={<StopOutlined key="cancel" onClick={this.handleClick} />}
            className="cancel"
          >
            Cancel
          </Button>,
          <Button
            size="large"
            icon={<BellFilled key="remind" onClick={this.handleClick} />}
          >
            Remind!
          </Button>
        ]}
        hoverable
        cover={
          <DatePicker
            bordered={false}
            format="DD.MM.YYYY HH:mm"
            showTime={{ defaultValue: moment("00:00:00", "HH:mm:ss") }}
            size=""
            onOk={this.handleDateChange}
          />
        }
      >
        <Card.Meta
          title={
            <Input.TextArea
              placeholder="Extra notes?"
              onChange={this.handleExtraChange}
            />
          }
        />
        <UserOutlined style={{ color: "mediumseagreen" }} />
      </Card>
    );
  }
}
