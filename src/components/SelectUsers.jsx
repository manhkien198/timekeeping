import { Form, message, Select } from 'antd';
import { useEffect, useState } from 'react';
import UsersApi from '../api/userApi';
import { filterOption } from '../utils/filterOption';
function SelectUsers({ setParams, params }) {
  const handleChangeUserSelected = value => {
    setParams({ ...params, username: value });
  };
  const { Option } = Select;
  const [form] = Form.useForm();
  const [users, setUsers] = useState([]);
  const fetchUsers = async () => {
    try {
      const res = await UsersApi.getAll();
      setUsers(res.data);
      form.setFieldsValue({ users: params.username || res.data[0]?.username });
    } catch (error) {
      message.error(error.message);
    }
  };
  useEffect(() => {
    form.setFieldsValue({ users: params.username || users[0]?.username });
  }, [params]);
  useEffect(() => {
    fetchUsers();
  }, []);
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
          {users.map(x => (
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
