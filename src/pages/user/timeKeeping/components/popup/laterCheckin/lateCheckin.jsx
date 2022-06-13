import React from 'react';
import './lateCheckin.scss';
import { Form, Input, Button, Card } from 'antd';
import { useTranslation } from 'react-i18next';
import moment from 'moment';
let timeDay = new Date();
export default function LateCheckin({ handleConfirm, item }) {
  const { t } = useTranslation();
  const { form } = Form.useForm();
  const validateMessages = {
    required: t('popup.validate'),
  };
  return (
    <div className="Popup__checkin-late">
      <Card>
        <p>
          {t('popup.hello')} {item?.fullname}
        </p>
        <p>
          {t('popup.now')} {moment(timeDay, 'HH:mm').format('HH:mm')}{' '}
          {t('popup.day')} {moment(timeDay, 'DD/MM/YYYY').format('DD/MM/YYYY')}
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
          onFinish={handleConfirm}
          validateMessages={validateMessages}
        >
          <Form.Item
            name="reason"
            style={{
              justifyContent: 'center',
              marginTop: '110px',
              textAlign: 'center',
            }}
            rules={[
              {
                required: true,
              },
            ]}
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
          </Form.Item>
          <Form.Item
            style={{
              justifyContent: 'center',
              marginTop: '110px',
              textAlign: 'center',
            }}
          >
            <Button
              type="primary"
              htmlType="submit"
              style={{
                marginTop: '21px',
                background: '#E11274',
                border: 'none',
                borderRadius: '8px',
                width: '229px',
                height: '51px',
              }}
            >
              {t('popup.send')}
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
