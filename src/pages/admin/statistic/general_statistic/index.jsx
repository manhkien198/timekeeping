import { PageHeader, Table } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import ButtonGroup from '../../../../components/ButtonGroup';
import CusomPageHeader from '../../../../components/CusomPageHeader';
import Filter from '../../../../components/Filter';

function GeneralStatistic(props) {
  const { t } = useTranslation();
  const columns = [
    {
      title: t('general_table.cardinal_numbers'),
      dataIndex: 'stt',
    },
    {
      title: t('general_table.employees'),
      dataIndex: 'employees',
    },
    {
      title: t('general_table.work_day'),
      dataIndex: 'work_day',
    },
    {
      title: t('general_table.paid_leave'),
      dataIndex: 'paid_leave',
    },
    {
      title: t('general_table.unpaid_leave'),
      dataIndex: 'unpaid_leave',
    },
    {
      title: t('general_table.total_day_off'),
      dataIndex: 'total_day_off',
    },
    {
      title: t('general_table.day_off'),
      dataIndex: 'day_off',
    },
  ];
  const data = [];
  const item = {};
  columns.forEach((column, id) => {
    item['stt'] = id;
    item['employees'] = `nhan vien ${id}`;
    item['work_day'] = Math.round(Math.random());
    item['paid_leave'] = Math.round(Math.random());
    item['unpaid_leave'] = Math.round(Math.random());
    item['total_day_off'] = 12;
    item['day_off'] = Math.round(Math.random());
    item['rest'] = Math.round(Math.random());
    data.push({ ...item });
  });
  return (
    <>
      <CusomPageHeader
        title={t('page_header.title')}
        subTitle={`${t('page_header.month')}`}
      />
      <Filter />
      <ButtonGroup />
      <Table dataSource={data} columns={columns} rowKey="employees" />
    </>
  );
}

export default GeneralStatistic;
