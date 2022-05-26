import { Table } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
const TableTimeKeeping = ({ listDayOnMonth,data }) => {
  const { t } = useTranslation();
  const column = [
    {
      title: t('time_keeping.id'),
      dataIndex: 'id',
      align: 'center',
      key: t('time_keeping.id'),
      fixed: 'left',
      width: 150,
      render: id => {
        return <p>{id}</p>;
      },
    },
    {
      title: t('time_keeping.fullName'),
      dataIndex: 'fullname',
      align: 'center',
      fixed: 'left',
      width: 100,
      key: t('time_keeping.fullName'),
      render: fullname => {
        return <p>{fullname}</p>;
      },
    },
    ...listDayOnMonth,
    {
      title: t('time_keeping.workingDay'),
      dataIndex: 'workingDay',
      align: 'center',
      fixed: 'right',
      width: 100,
      key: t('time_keeping.workingDay'),
    },
    {
      title: t('time_keeping.action'),
      dataIndex: 'action',
      align: 'center',
      fixed: 'right',
      width: 100,
      key: t('time_keeping.action'),
    },
  ];
  return (
    <div>
      <Table
        rowKey={'id'}
        columns={column}
        dataSource={data}
        scroll={{ x: 800, y: 700 }}
        style={{ maxWidth: 'calc(100vw - 348px)' }}
      />
    </div>
  );
};

export default TableTimeKeeping;
