import * as React from 'react';
import { Card, Statistic } from 'antd';
import { NotificationFilled, EllipsisOutlined, LikeFilled } from '@ant-design/icons';
import './Reminder.css';

export class Reminder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reminder: props.reminder
    };
  }

  render() {
    const {reminder} = this.state;
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
            cover={<Statistic.Countdown className="counter" value={counter} format="HH:mm:ss" />}>
              <Card.Meta
                title={reminder.description}
                description={reminder.created_at}
              />
        </Card>
  }
}
