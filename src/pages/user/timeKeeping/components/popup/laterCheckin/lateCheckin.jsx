import React from 'react';
import './lateCheckin.scss';
import { Form, Input, Button, Card } from 'antd';
import { useTranslation } from 'react-i18next';

export default function LateCheckin({ HandleConfirm }) {
  const { t } = useTranslation();
  return (
    <div className="Popup__checkin-late">
      <Card
        style={{
          width: '888px',
          marginLeft: '25px',
          marginTop: '94px',
          border: 'none',
        }}
      >
        <p>{t('popup.hello')} Lê Như Ngọc,</p>
        <p>
          {t('popup.now')} 8:32 {t('popup.day')} 12/05/2022
        </p>
        <p>{t('popup.connect_wifi')}</p>

        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          size="large"
        >
          <Form.Item
            style={{
              justifyContent: 'center',
              marginTop: '110px',
              textAlign: 'center',
            }}
          >
            <Input
              placeholder="Lý do chưa check - in"
              style={{
                background: '#E5E5E5',
                borderRadius: '8px',
                border: 'none',
                padding: '11px',
                fontSize: '20px',
              }}
            />
            <Button
              type="primary"
              style={{
                marginTop: '21px',
                background: '#E11274',
                border: 'none',
                borderRadius: '8px',
                width: '229px',
                height: '51px',
              }}
              onClick={HandleConfirm}
            >
              {t('popup.send')}
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
