import { Button, Spin, Table } from 'antd';
import { useTranslation } from 'react-i18next';
import './historyTable.scss';
import Buttonwarning from '../../icon/buttonwarning';
import moment from 'moment';
import { PENDING } from '../../../../../constants/common';

function HistoryTable({ Item, showModal }) {
  const { logTimeReportList } = Item;
  const { t } = useTranslation();
  const columns = [
    {
      title: t('time_keeping.id'),
      dataIndex: 'STT',
      Key: 'STT',
      align: 'center',
      render: (id, record, index) => <span>{index + 1}</span>,
    },
    {
      title: <>{t('time_keeping.day')}</>,
      dataIndex: 'date',
      Key: 'day',
      align: 'center',
    },
    {
      title: t('time_keeping.checkIn'),
      dataIndex: 'checkin',
      Key: 'checkin',
      align: 'center',
      render: (checkin, record) => {
        return (
          <div>
            {record?.checkInTime === null &&
            record?.date === moment(Date.now()).format('DD/MM') ? (
              <span>
                {record.status === null ? (
                  <Button
                    type="link"
                    onClick={showModal}
                    icon={<Buttonwarning />}
                  ></Button>
                ) : (
                  <span>
                    {record.status === PENDING ? (
                      <span className="text-blue">{<Spin />}</span>
                    ) : (
                      <span>{record.checkInTime}</span>
                    )}
                  </span>
                )}
              </span>
            ) : (
              <span>{record.checkInTime}</span>
            )}
          </div>
        );
      },
    },
    {
      title: t('time_keeping.checkOut'),
      dataIndex: 'checkout',
      Key: 'checkout',
      align: 'center',
      render: (_, record) => {
        return <span>{record.checkOutTime}</span>;
      },
    },
    {
      title: t('time_keeping.ot'),
      dataIndex: 'ot',
      Key: 'ot',
      align: 'center',
    },
    {
      title: t('time_keeping.workingDay'),
      dataIndex: 'totalWorkedTime',
      Key: 'totalWork',
      align: 'center',
    },
    {
      title: t('time_keeping.note'),
      dataIndex: 'note',
      key: 'note',
      align: 'center',
      render: (note, record) => {
        return (
          <span>{record.reason === null ? record.note : record.reason}</span>
        );
      },
    },
  ];

  return (
    <div className="table">
      <Table
        rowKey={'id'}
        pagination={false}
        columns={columns}
        dataSource={logTimeReportList}
      />
    </div>
  );
}
export default HistoryTable;
