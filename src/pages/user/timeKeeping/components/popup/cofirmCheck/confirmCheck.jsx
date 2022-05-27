import { Card, Typography } from 'antd';
import React from 'react';
import Check from '../../../icon/check';
import { useTranslation } from 'react-i18next';
const { Title } = Typography;
export default function ConfirmCheck() {
  const { t } = useTranslation();
  return (
    <div>
      <Card
        style={{ 
          marginLeft: '25px',
          marginTop: '94px',
          border: 'none',
          textAlign: 'center',
        }}
      >
        <Check />
        <Typography style={{ marginTop: '68px' }}>
          <Title level={2}>{t('comfirmRequest.approved')}</Title>
          <Title level={2}>{t('comfirmRequest.wishing')}</Title>
        </Typography>
      </Card>
    </div>
  );
}
