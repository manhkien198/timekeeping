import { Form, Select } from 'antd';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { filterOption } from '../utils/filterOption';

function SelectUsers({ userSelected, setUserSelected }) {
  const handleChangeUserSelected = value => {
    setUserSelected(value);
  };
  const usersList = useSelector(state => state.personalStatistic.users);
  const { Option } = Select;
  const [form] = Form.useForm();
  useEffect(() => {
    form.setFieldsValue({ users: usersList[0]?.username || userSelected });
  }, [usersList]);

  return (
    <Form form={form} className="form">
      <Form.Item name="users" className="form-item">
        <Select
          style={{
            width: 240,
            color: '#066f9b',
            fontWeight: 700,
            fontSize: 30,
          }}
          showSearch
          filterOption={filterOption}
          onChange={handleChangeUserSelected}
        >
          {usersList.map(x => (
            <Option key={x.username} value={x.username}>
              {x.fullName}
            </Option>
          ))}
        </Select>
      </Form.Item>
    </Form>
  );
}

export default SelectUsers;
