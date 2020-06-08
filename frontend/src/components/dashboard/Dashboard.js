import { Layout } from 'antd';
import React, { Component } from "react";
import Create from "../create/Create";
import RemindersList from "../reminders-list/RemindersList";
import "./Dashboard.css";


class Dashboard extends Component {

  render() {

    return (<Layout className="container">
      <Layout.Header className="header">
        <Create />
      </Layout.Header>
      <Layout.Content>
        <RemindersList />
      </Layout.Content>
    </Layout>);
  }
}

export default Dashboard;
