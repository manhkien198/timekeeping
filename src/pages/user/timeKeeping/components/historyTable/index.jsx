import { Table } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import './historyTable.scss';
import Buttonwarning from '../../icon/buttonwarning';

const iconDown = <DownOutlined />;

function HistoryTable({ Item, showModal }) {
  const { t } = useTranslation();
  const columns = [
    {
      title: t('time_keeping.id'),
      dataIndex: 'STT',
      Key: 'STT',
      align: 'center',
    },
    {
      title: (
        <>
          {t('time_keeping.day')} {iconDown}
        </>
      ),
      dataIndex: 'day',
      Key: 'day',
      align: 'center',
    },
    {
      title: 'check in',
      dataIndex: 'checkin',
      Key: 'checkin',
      align: 'center',
      render: checkin =>
        checkin ? (
          `${checkin}`
        ) : (
          <button className="popup_check" onClick={showModal}>
            <Buttonwarning />
          </button>
        ),
    },
    {
      title: 'check out',
      dataIndex: 'checkout',
      Key: 'checkout',
      align: 'center',
    },
    {
      title: 'ot',
      dataIndex: 'ot',
      Key: 'ot',
      align: 'center',
    },
    {
      title: t('time_keeping.workingDay'),
      dataIndex: 'totalWork',
      Key: 'totalWork',
      align: 'center',
    },
    {
      title: t('time_keeping.note'),
      dataIndex: 'note',
      key: 'note',
      align: 'center',
    },
  ];
  const data = [];
  Item.map(dt =>
    data.push({
      STT: dt.id,
      day: dt.date,
      checkin: dt.checkInTime,
      checkout: dt.checkOutTime,
      ot: dt.overTime,
      totalWork: dt.workTime,
      note: dt.note,
    }),
  );
  return (
    <>
      <Table
        pagination={false}
        columns={columns}
        dataSource={data}
        scroll={{ y: 380 }}
        bordered={true}
      />
    </>
  );
}
export default HistoryTable;
