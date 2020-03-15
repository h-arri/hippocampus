import "./Dashboard.css";

import { Col, Row } from "antd";
import React, { Component } from "react";

import Create from "../create/Create";
import RemindersList from "../reminders-list/RemindersList";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Row className="menu">
          <Col span={8}>
            <Create />
          </Col>
        </Row>
        <br />
        <br />
        <RemindersList />
      </div>
    );
  }
}

export default Dashboard;
