import React from 'react';
import './lateCheckin.scss';
import { Form, Input, Button, Card } from 'antd';
export default function LateCheckin({HandleConfirm}) {
  console.log(HandleConfirm)
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
        <p>Xin chào Lê Như Ngọc,</p>
        <p>Bây giờ là 8:32 ngày 12/05/2022</p>
        <p>
          Bạn chưa thực hiện check - in. Vui lòng kết nối điện thoại với Wifi
          nội bộ hoặc gửi yêu cầu cho Admin.
        </p>
        
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
              Gửi yêu cầu
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
