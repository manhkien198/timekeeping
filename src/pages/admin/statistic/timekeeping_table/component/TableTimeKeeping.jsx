import { Table } from 'antd';
import React from 'react';
import { dataSource } from '../constant';
const TableTimeKeeping = ({ listDayOnMonth }) => {
  const column = [
    {
      title: 'Stt',
      dataIndex: 'id',
      align: 'center',
      key: 'id',
      fixed: 'left',
      width: 150,
      render: id => {
        return <p>{id}</p>;
      },
    },
    {
      title: 'Họ và tên',
      dataIndex: 'name',
      align: 'center',
      fixed: 'left',
      width: 100,
      key: 'name',
    },
    ...listDayOnMonth,
    {
      title: 'Ngày làm việc',
      dataIndex: 'workingDay',
      align: 'center',
      fixed: 'right',
      width: 100,
      key: 'workingDay',
    },
    {
      title: 'Tác vụ',
      dataIndex: 'action',
      align: 'center',
      fixed: 'right',
      width: 100,
      key: 'action',
    },
  ];
  return (
    <div>
      <Table
        columns={column}
        dataSource={dataSource}
        scroll={{ x: 800, y: 300 }}
        style={{ maxWidth: '1583px' }}
      />
    </div>
  );
};

export default TableTimeKeeping;
