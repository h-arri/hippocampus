import { filterReminders, getRemindersApi } from '../../store/actions/reminders';
import { Button, DatePicker, Form, Input, message, Modal, Typography } from 'antd';
import moment from "moment";
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useRef, useState } from "react";
import { createReminderApi } from '../../store/actions/reminder';
import "./Create.css";

const Create = () => {
    const dispatch = useDispatch();
    const modalRef = useRef(true);
    const [form] = Form.useForm();
    const [open, setOpen] = useState(false);

    const reminders = useSelector(state => state.reminders.reminders);
    const reminder = useSelector(state => state.reminder.reminder);
    const creating = useSelector(state => state.reminder.loading);
    const filter = useSelector(state => state.filter);

    useEffect(() => {
        if (modalRef.current && reminder.id && reminders.find(r => r.id === reminder.id) === undefined) {
            message.success('Reminder created successfully!');
            dispatch(getRemindersApi());
            dispatch(filterReminders(filter));
        }
    }, [creating]);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleCreate = e => {
        form.validateFields().then(values => {
            form.resetFields();
            dispatch(createReminderApi({
                description: values.desc,
                extra: values.extra,
                remindAt: moment(values.when.toLocaleString()).format('YYYY-MM-DD hh:mm:ss'),
                createdAt: moment().format('YYYY-MM-DD hh:mm:ss')
            }));
            setOpen(false);
        });
    };

    return (
        <>
            <Button type="primary" size="large" className="create-btn"
                    onClick={handleOpen}>
                <Typography.Title>+</Typography.Title>
            </Button>
            <Modal
                closable={false}
                centered
                visible={open}
                className="create"
                okText="Create"
                onOk={handleCreate}
                onCancel={handleClose}
                cancelButtonProps={{ danger: true }}
                confirmLoading={creating}
            >
                <Form form={form} name="reminder" layout={{ labelCol: { span: 4 }, wrapperCol: { span: 14 } }}
                      initialValues={{ remember: true }} onFinish={handleCreate}>
                    <Form.Item name="desc"
                               rules={[{ required: true, message: 'What you would like to do?' }]}>
                        <Input placeholder="Description" size="large"/></Form.Item>
                    <Form.Item name="when"
                               rules={[{ required: true, message: 'When you would like to do?' }]}>
                        <DatePicker
                            bordered={false}
                            format="DD.MM.YYYY HH:mm"
                            showTime={{ defaultValue: moment("00:00:00", "HH:mm:ss") }}
                            size="large"
                        />
                    </Form.Item>
                    <Form.Item name="extra">
                        <Input.TextArea placeholder="Any tips?"/>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
}

export default Create;
