import { Table, Tooltip } from 'antd';
import React from 'react';
import { dataSource } from '../constant';

const TableTimeKeeping = () => {
  const column = [
    {
      title: 'Stt',
      dataIndex: 'stt',
      align: 'center',
      key: 'id',
    },
    {
      title: 'Họ và tên',
      dataIndex: 'name',
      align: 'center',
      key: 'name',
    },
    {
      title: '1',
      dataIndex: '1',
      align: 'center',
      key: '1',
      render: status => {
        return (
          <div>
            {status.onl ? (
              <div>
                {status.description ? (
                  <div>
                    <Tooltip
                      placement="topLeft"
                      title={status.description}
                      style={{ color: '#E11274', backgroundColor: 'white' }}
                    >
                      <span style={{ color: '#E11274' }}>X</span>
                    </Tooltip>
                  </div>
                ) : (
                  <span>X</span>
                )}{' '}
              </div>
            ) : (
              ''
            )}
          </div>
        );
      },
    },
    {
      title: '2',
      dataIndex: '2',
      align: 'center',
      key: '2',
      render: status => {
        return <div>{status && <span>X</span>}</div>;
      },
    },
    {
      title: '3',
      dataIndex: '3',
      align: 'center',
      key: '3',
      render: status => {
        return <div>{status && <span>X</span>}</div>;
      },
    },
    {
      title: '4',
      dataIndex: '4',
      align: 'center',
      key: '4',
      render: status => {
        return <div>{status && <span>X</span>}</div>;
      },
    },
    {
      title: '5',
      dataIndex: '5',
      align: 'center',
      key: '5',
      render: status => {
        return <div>{status && <span>X</span>}</div>;
      },
    },
    {
      title: '6',
      dataIndex: '6',
      align: 'center',
      key: '6',
      render: status => {
        return <div>{status && <span>X</span>}</div>;
      },
    },
    {
      title: '7',
      dataIndex: '7',
      align: 'center',
      key: '7',
      render: status => {
        return <div>{status && <span>X</span>}</div>;
      },
    },
    {
      title: 'Ngày làm việc',
      dataIndex: 'workingDay',
      align: 'center',
      key: 'workingDay',
    },
    {
      title: 'Tác vụ',
      dataIndex: 'action',
      align: 'center',
      key: 'action',
    },
  ];
  return <Table columns={column} dataSource={dataSource} />;
};

export default TableTimeKeeping;
