import { Button, Popover, Table, Tooltip } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import SuccessRequest from '../../../../assets/images/request/Button/True.png';
import FailRequest from '../../../../assets/images/request/Button/False.png';
import editIcon from '../../../../assets/images/request/Button/Edit.svg';
import removeIcon from '../../../../assets/images/request/Button/DeleteOutlined.svg';
import moment from 'moment';
import { dataRequest } from '../constant';
import { EllipsisOutlined } from '@ant-design/icons';
const TableRequest = () => {
  const { t } = useTranslation();
  const Actions = ({ record }) => (
    <div className="request__action" style={{}}>
      <Button
        className="request__action--edit"
        icon={<img src={editIcon} alt="detail" />}
        size="large"
      >
        {t('acceptRequestor.edit')}
      </Button>

      <Button
        className="request__action--delete"
        icon={<img src={removeIcon} alt="detail" />}
        size="large"
      >
        {t('acceptRequestor.delete')}
      </Button>
    </div>
  );
  const column = [
    {
      title: t('time_keeping.id'),
      dataIndex: 'id',
      align: 'center',
      key: t('time_keeping.id'),
      width: 150,
      render: id => {
        return <span>{id}</span>;
      },
    },
    {
      title: t('acceptRequestor.staff'),
      dataIndex: 'staff',
      align: 'center',
      key: t('acceptRequestor.staff'),
      width: 150,
      render: staff => {
        return <span>{staff}</span>;
      },
    },
    {
      title: t('acceptRequestor.date'),
      dataIndex: 'date',
      align: 'center',
      key: t('acceptRequestor.date'),
      width: 150,
      render: date => {
        return <span>{moment(date).format('DD/MM')}</span>;
      },
    },
    {
      title: t('acceptRequestor.time'),
      dataIndex: 'time',
      align: 'center',
      key: t('acceptRequestor.time'),
      width: 150,
      render: time => {
        return <span>{moment(time).format('hh:mm')}</span>;
      },
    },
    {
      title: t('acceptRequestor.reason'),
      dataIndex: 'reason',
      align: 'center',
      key: t('acceptRequestor.reason'),
      width: 150,
      render: reason => {
        return (
          <Tooltip title={reason}>
            <span className="reason_content">{reason}</span>
          </Tooltip>
        );
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
      render: (text, record) => {
        return (
          <Popover
            zIndex={1}
            style={{ padding: 0, border: '1px solid black' }}
            content={<Actions record={record} />}
            placement="bottomRight"
            trigger="hover"
            getTooltipContainer={triggerNode => triggerNode.parentNode}
          >
            <EllipsisOutlined
              style={{
                fontSize: '25px',
                width: '27px',
                height: '32px',
                fontWeight: 400,
              }}
            />
          </Popover>
        );
      },
    },
  ];
  return (
    <div>
      <Table columns={column} dataSource={dataRequest} />
    </div>
  );
};

export default TableRequest;
