import { Layout, Row, Col } from 'antd';
import React, { Component } from "react";
import Create from "../create/Create";
import RemindersList from "../reminders-list/RemindersList";
import "./Dashboard.css";
import FilterBar from '../filter-bar/FilterBar';


const Dashboard = () => {

  return (<Layout className="container">
    <Layout.Header className="header">
      <Row>
        <Col span={4}>
          <Create />
        </Col>
        <Col span={20}>
          <FilterBar />
        </Col>
      </Row>
    </Layout.Header>
    <Layout.Content>
      <RemindersList />
    </Layout.Content>
  </Layout>);
}

export default Dashboard;
