import { Button, Card, DatePicker, Input, Modal, Typography } from "antd";
import moment from "moment";
import React from "react";
import "./Create.css";


export default class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      id: 999999,
      description: "Description",
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
    }
  }

  handleOpen = () => {
    this.setState({ open: true });
  }

  handleClose = () => {
    this.setState({ open: false });
  }

  handleDescChange = e => {
    this.setState({ description: e.target.value });
  };

  handleExtraChange = e => {
    this.setState({ extra: e.target.value });
  };

  handleDateChange = e => {
    this.setState({ remind_at: e.toString() });
  };

  handleClick = e => {
    console.log("eeee ", e);
  };

  render() {
    const { open } = this.state;
    return (
      <>
        <Button type="primary" size="large" className="create-btn"
          onClick={this.handleOpen}>
          <Typography.Title>+</Typography.Title>
        </Button>
        <Modal
          closable={false}
          centered
          visible={open}
          className="create"
          footer={null}
        >
          <Card
            title={
              <Input
                placeholder="Description"
                size="large"
                onChange={this.handleDescChange}
              />
            }
            className="create"
            cover={
              <DatePicker
                bordered={false}
                format="DD.MM.YYYY HH:mm"
                showTime={{ defaultValue: moment("00:00:00", "HH:mm:ss") }}
                size=""
                onOk={this.handleDateChange}
              />
            }
            actions={[
              <Button
                size="large"
                className="cancel"
                onClick={this.handleClose}
              >
                Cancel
              </Button>,
              <Button
                size="large"
                onClick={this.handleClick}
              >
                Remind
              </Button>
            ]}
          >
            <Card.Meta
              title={
                <Input.TextArea
                  placeholder="Extra notes?"
                  onChange={this.handleExtraChange}
                />
              }
            />
          </Card>
        </Modal>
      </>
    );
  }
}
