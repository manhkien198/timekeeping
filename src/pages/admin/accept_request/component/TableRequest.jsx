import { Table } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import SuccessRequest from '../../../../assets/images/request/Button/True.png';
import FailRequest from '../../../../assets/images/request/Button/False.png';
import moment from 'moment';
const TableRequest = () => {
  const { t } = useTranslation();
  const column = [
    {
      title: t('time_keeping.id'),
      dataIndex: 'id',
      align: 'center',
      key: t('time_keeping.id'),
      width: 150,
      render: id => {
        return <p>{id}</p>;
      },
    },
    {
      title: t('acceptRequestor.staff'),
      dataIndex: 'staff',
      align: 'center',
      key: t('acceptRequestor.staff'),
      width: 150,
      render: staff => {
        return <p>{staff}</p>;
      },
    },
    {
      title: t('acceptRequestor.date'),
      dataIndex: 'date',
      align: 'center',
      key: t('acceptRequestor.date'),
      width: 150,
      render: date => {
        return <p>{moment(date).format('DD/MM')}</p>;
      },
    },
    {
      title: t('acceptRequestor.time'),
      dataIndex: 'time',
      align: 'center',
      key: t('acceptRequestor.time'),
      width: 150,
      render: time => {
        return <p>{moment(time).format('hh:mm')}</p>;
      },
    },
    {
      title: t('acceptRequestor.reason'),
      dataIndex: 'reason',
      align: 'center',
      key: t('acceptRequestor.reason'),
      width: 150,
      render: time => {
        return <p>{time}</p>;
      },
    },
    {
      title: t('acceptRequestor.approve'),
      dataIndex: 'approve',
      align: 'center',
      key: t('acceptRequestor.approve'),
      width: 150,
      render: approve => {
        return (
          <div>
            {approve ? (
              <img width="22px" height="22px" src={SuccessRequest} alt="" />
            ) : (
              <img width="22px" height="22px" src={FailRequest} alt="" />
            )}
          </div>
        );
      },
    },
    {
      title: t('time_keeping.action'),
      dataIndex: 'action',
      align: 'center',
      key: t('time_keeping.action'),
      width: 150,
    },
  ];
  return (
    <div>
      <Table columns={column} />
    </div>
  );
};

export default TableRequest;
