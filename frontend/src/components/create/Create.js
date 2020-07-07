import { Button, DatePicker, Input, Modal, Typography, Form, message } from "antd";
import moment from "moment";
import React from "react";
import { createReminderApi } from "../../store/actions/reminder";
import { getRemindersApi } from "../../store/actions/reminders";
import "./Create.css";
import { connect } from "react-redux";
import store from '../../store';

class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      id: 999999,
      description: "Description",
      extra: "Extra notes?",
      remindAt: "",
      createdAt: moment().format('YYYY-MM-DD hh:mm:ss')
    }
  }

  componentDidUpdate() {
    const { reminder } = store.getState();
    const created = Object.entries(reminder.reminder).length !== 0 && reminder.error === null;
    if (created) {
      message.success('Reminder created successfully!');
      this.props.getRemindersApi();
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
    this.setState({ remindAt: moment(e.toISOString()).format('YYYY-MM-DD hh:mm:ss') });
  };

  handleCreate = e => {
    const { description, extra, remindAt, createdAt } = this.state;
    this.props.createReminderApi({
      description, extra, remindAt, createdAt
    });
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    const { reminder } = store.getState();
    const creating = reminder ? reminder.loading : false;

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
          okText="Create"
          onOk={this.handleCreate}
          onCancel={this.handleClose}
          cancelButtonProps={{ danger: true }}
          confirmLoading={creating}
        >
          <Form name="reminder" layout={{ labelCol: { span: 4 }, wrapperCol: { span: 14 } }}>
            <Form.Item name="desc" rules={[{ required: true }]}><Input placeholder="Description" size="large"
              onChange={this.handleDescChange} /></Form.Item>
            <Form.Item name="when">
              <DatePicker
                bordered={false}
                format="DD.MM.YYYY HH:mm"
                showTime={{ defaultValue: moment("00:00:00", "HH:mm:ss") }}
                size="large"
                onOk={this.handleDateChange}
              />
            </Form.Item>
            <Form.Item name="extra">
              <Input.TextArea placeholder="Any tips?" onChange={this.handleExtraChange}></Input.TextArea>
            </Form.Item>
          </Form>
        </Modal>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    creating: state.reminder.loading
  };
}

export default connect(mapStateToProps, { createReminderApi, getRemindersApi })(Create);
