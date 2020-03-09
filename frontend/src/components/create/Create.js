import './Create.css';

import { BellFilled, StopOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Card, DatePicker, Typography } from 'antd';
import React from 'react';

export default class Reminder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 999999,
      description: 'What should I remember?',
      extra: 'Extra notes?',
      remind_me_at: '',
      created_at: new Intl.DateTimeFormat('de-DE', {
          year: 'numeric', month: 'numeric', day: 'numeric',
          hour: 'numeric', minute: 'numeric', second: 'numeric',
          hour12: false
        }).format(Date.now())
    };
  }

  handleDescChange = e => {
    this.setState({ description: e });
  }

  handleExtraChange = e => {
    this.setState({ extra: e });
  }

  handleDateChange = e => {
    this.setState({ remind_me_at: e.toString() });
  }

  render() {
    const { description, extra, created_at } = this.state;
    const counter = Date.now().getTime;

    return <Card
            title={<Typography.Text className='description' ellipsis={true}
            editable={{ onChange: this.handleDescChange }}>{description}</Typography.Text>}
            className="create"
            actions={[
              <Button size='large' icon={<StopOutlined key='cancel' />} className='cancel'>Cancel</Button>,
              <Button size='large' icon={<BellFilled key='remind' />}>Remind!</Button>,
            ]}
            hoverable
            cover={<DatePicker bordered={false} format='DD.MM.YYYY HH:mm'
                      showTime={{ defaultValue: Date.now()}}
                      onOk={this.handleDateChange}/>}>
                        <Card.Meta
                          title={<Typography.Paragraph
                          editable={{ onChange: this.handleExtraChange }}>{extra}</Typography.Paragraph>}
                          />
                  <UserOutlined />
        </Card>
  }
}
