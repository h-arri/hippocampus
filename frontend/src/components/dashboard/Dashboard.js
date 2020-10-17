import { Col, Divider, Layout, Row } from "antd";
import React, { useEffect } from "react";
import Create from "../create/Create";
import RemindersList from "../reminders-list/RemindersList";
import "./Dashboard.css";
import FilterBar from "../filter-bar/FilterBar";
import { connect, useDispatch, useSelector } from "react-redux";
import { filterReminders, getRemindersApi } from "../../store/actions/reminders";

const Dashboard = () => {
    const dispatch = useDispatch();
    const reminders = useSelector(state => state.reminders.filtered);
    const loading = useSelector(state => state.reminders.loading);
    const filter = useSelector(state => state.filter);

    useEffect(() => {
        (async function fetchReminders() {
            await dispatch(getRemindersApi());
            await dispatch(filterReminders(filter));
        })();
    }, []);

    return (
        <Layout className="container">
            <Layout.Header className="header">
                <Row>
                    <Col span={2}>
                        <Create/>
                    </Col>
                    <Col span={22}>
                        <FilterBar className="filter" filter={filter}/>
                    </Col>
                </Row>
            </Layout.Header>
            <Divider/>
            <Layout.Content>
                <RemindersList reminders={reminders} loading={loading}/>
            </Layout.Content>
        </Layout>
    );
};

export default connect()(Dashboard);
