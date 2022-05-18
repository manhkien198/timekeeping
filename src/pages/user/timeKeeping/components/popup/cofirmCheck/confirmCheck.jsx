import { Card, Typography } from 'antd';
import React from 'react';
import Check from '../../../icon/check';

const { Title } = Typography;
export default function ConfirmCheck() {
  return (
    <div>
      <Card
        style={{
          width: '888px',
          marginLeft: '25px',
          marginTop: '94px',
          border: 'none',
          textAlign: 'center',
        }}
      >
        <Check />
        <Typography style={{ marginTop: '68px' }}>
          <Title level={2}>Yêu cầu đang được phê duyệt!</Title>
          <Title level={2}>Chúc bạn một ngày làm việc hiệu quả!</Title>
        </Typography>
      </Card>
    </div>
  );
}
