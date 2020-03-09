import './Reminder.css';

import { Card, Statistic } from 'antd';
import { NotificationFilled, EllipsisOutlined, LikeFilled, UserOutlined } from '@ant-design/icons';
import React from 'react';

export default class Reminder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reminder: props.reminder
    };
  }

  render() {
    const { reminder } = this.state;
    const counter = new Date(reminder.remind_me_at).getTime();

    return <Card
            title={reminder.description}
            className="reminder"
            actions={[
              <LikeFilled key="setting" />,
              <NotificationFilled key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
            hoverable
            cover={<Statistic.Countdown title="in" className="counter" value={counter} format="HH:mm:ss" />}>
              <Card.Meta
                title={reminder.description}
                description={new Intl.DateTimeFormat('de-DE', {
                    year: 'numeric', month: 'numeric', day: 'numeric',
                    hour: 'numeric', minute: 'numeric', second: 'numeric',
                    hour12: false
                  }).format(new Date(reminder.created_at))}
                />
                <UserOutlined />
        </Card>
  }
}
