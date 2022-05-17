import { SearchOutlined } from '@ant-design/icons';
import { Button, Col, DatePicker, Form, Input, Row, Select } from 'antd';
import React from 'react';
import { dataDate } from '../constant';
import moment from 'moment';
const FilterTimeKeeping = ({ setMonth, setYear }) => {
  const { Option } = Select;
  const handleDatePicker = value => {
    const month = moment(value).month();
    const year = moment(value).year();
    setMonth(month + 1);
    setYear(year);
  };
  return (
    <Form style={{ marginBottom: '42px' }}>
      <Form.Item
        style={{ alignItem: 'center' }}
        name="dateTime"
        label={
          <p className="title_filterMonth">
            Chấm công{' '}
            <span
              className="title_filterMonth"
              style={{ color: '#066F9B', textTransform: 'capitalize' }}
            >
              tháng
            </span>
          </p>
        }
        labelAlign="left"
      >
        <DatePicker
          placeholder=""
          className="datePicker_month"
          picker="month"
          onChange={handleDatePicker}
        />
      </Form.Item>
      <Row>
        <Col span={23}>
          <Form.Item name="search">
            <Input
              style={{ backgroundColor: '#E5E5E5', borderRadius: '8px' }}
              placeholder="Search"
              size="large"
            />
          </Form.Item>
        </Col>
        <Col span={1}>
          <Form.Item>
            <Button
              size="large"
              style={{ border: 'none', boxShadow: 'none' }}
              icon={<SearchOutlined />}
            ></Button>
          </Form.Item>
        </Col>
        <Col style={{ marginRight: '15px' }}>
          <Form.Item name="sort" style={{ marginBottom: 0 }}>
            <Select defaultValue="Filter">
              {dataDate?.map((item, index) => {
                return (
                  <Option key={index} value={item?.id}>
                    {item?.value}
                  </Option>
                );
              })}
            </Select>
          </Form.Item>
        </Col>
        <Col>
          <Button style={{ border: 'none', color: '#066F9B' }}> Export</Button>
        </Col>
      </Row>
    </Form>
  );
};

export default FilterTimeKeeping;
