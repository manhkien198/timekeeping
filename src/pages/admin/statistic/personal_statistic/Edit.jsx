import { Button, DatePicker, Form, Input, Select } from 'antd';
import React from 'react';
import Filter from '../../../../components/Filter';
import { useNavigate } from 'react-router-dom';
import { t } from 'i18next';

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
        <Form.Item
          label={`${t('personal_statistic.day')} :`}
          name="date"
          className="form-control"
        >
          <DatePicker style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item
          label={`${t('sidebar.time_keeping')} :`}
          name="timeKeeping"
          className="form-control"
        >
          <Form.Item style={{ display: 'inline-block', marginRight: 10 }}>
            <Input placeholder={t('personal_statistic.check_in')} />
          </Form.Item>
          <Form.Item style={{ display: 'inline-block' }}>
            <Input placeholder={t('personal_statistic.check_out')} />
          </Form.Item>
        </Form.Item>
        <Form.Item
          label={`${t('personal_statistic.total_hours')} :`}
          name="totalTime"
          className="form-control"
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={`${t('personal_statistic.absent')} :`}
          name="absent"
          className="form-control"
        >
          <Input placeholder="OT/ P/ NB/ Ro" />
        </Form.Item>
        <Form.Item
          label={`${t('personal_statistic.time')} :`}
          name="time"
          className="form-control"
        >
          <Form.Item style={{ display: 'inline-block', marginRight: 10 }}>
            <Input placeholder={t('personal_statistic.enter_time')} />
          </Form.Item>
          <Form.Item style={{ display: 'inline-block' }}>
            <DatePicker style={{ width: '100%' }} />
          </Form.Item>
        </Form.Item>
        <Form.Item
          label={`${t('personal_statistic.reason')} :`}
          name="reason"
          className="form-control"
        >
          <Input placeholder={t('personal_statistic.enter_reason')} />
        </Form.Item>
        <Form.Item
          label={`${t('personal_statistic.acceptor')} :`}
          name="acceptor"
          className="form-control"
        >
          <Select
            showSearch
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
        <Form.Item
          label={`${t('personal_statistic.note')} :`}
          name="note"
          className="form-control"
        >
          <Input placeholder={t('personal_statistic.enter_note')} />
        </Form.Item>
      </Form>
      <div className="btn-group">
        <Button type="danger" onClick={() => form.resetFields()}>
          {t('personal_statistic.reset')}
        </Button>
        <Button type="danger"> {t('personal_statistic.update')}</Button>
        <Button type="primary" onClick={() => navi('/statistic/personal')}>
          {t('personal_statistic.cancel')}
        </Button>
      </div>
    </div>
  );
}

export default Edit;
