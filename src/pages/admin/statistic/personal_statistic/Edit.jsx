import { Button, DatePicker, Form, Input, Select } from 'antd';
import React from 'react';
import Filter from '../../../../components/Filter';
import { useNavigate } from 'react-router-dom';
function Edit(props) {
  const [form] = Form.useForm();
  const onFinish = value => {
    console.log(value);
  };
  const { Option } = Select;

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 4 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
  };
  const navi = useNavigate();
  return (
    <div className="edit-form">
      <Filter />
      <Form
        className="form"
        {...formItemLayout}
        form={form}
        onFinish={onFinish}
        scrollToFirstError
      >
        <Form.Item label="Ngày :" name="date" className="form-control">
          <DatePicker style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item
          label="Chấm công :"
          name="timeKeeping"
          className="form-control"
        >
          <Form.Item style={{ display: 'inline-block', marginRight: 10 }}>
            <Input placeholder="Giờ vào" />
          </Form.Item>
          <Form.Item style={{ display: 'inline-block' }}>
            <Input placeholder="Giờ ra  " />
          </Form.Item>
        </Form.Item>
        <Form.Item label="Tổng giờ :" name="totalTime" className="form-control">
          <Input />
        </Form.Item>
        <Form.Item label="Vắng mặt :" name="absent" className="form-control">
          <Input placeholder="OT/ P/ NB/ Ro" />
        </Form.Item>
        <Form.Item
          label="Thời gian :"
          name="timeKeeping"
          className="form-control"
        >
          <Form.Item style={{ display: 'inline-block', marginRight: 10 }}>
            <Input placeholder="Nhập thời gian" />
          </Form.Item>
          <Form.Item style={{ display: 'inline-block' }}>
            <DatePicker style={{ width: '100%' }} />
          </Form.Item>
        </Form.Item>
        <Form.Item label="Lý do :" name="reason" className="form-control">
          <Input placeholder="Nhập lý do" />
        </Form.Item>
        <Form.Item
          label="Người phê duyệt :"
          name="acceptor"
          className="form-control"
        >
          <Select
            showSearch
            placeholder="Select a person"
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="tom">Tom</Option>
          </Select>
        </Form.Item>
        <Form.Item label="Ghi chú :" name="note" className="form-control">
          <Input placeholder="Nhập ghi chú" />
        </Form.Item>
      </Form>
      <div className="btn-group">
        <Button type="danger" onClick={() => form.resetFields()}>
          Reset
        </Button>
        <Button type="danger">Update</Button>
        <Button type="primary" onClick={() => navi('/statistic/personal')}>
          Cancel
        </Button>
      </div>
    </div>
  );
}

export default Edit;
