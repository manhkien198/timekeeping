import { Select } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import { filterOption } from '../utils/filterOption';

function SelectUsers({ userSelected, setUserSelected }) {
  const handleChangeUserSelected = value => {
    setUserSelected(value);
  };
  const usersList = useSelector(state => state.personalStatistic.users);
  const { Option } = Select;

  return (
    <Select
      defaultValue={usersList[0]?.username}
      style={{ width: 240, color: '#066f9b', fontWeight: 700, fontSize: 30 }}
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
  );
}

export default SelectUsers;
