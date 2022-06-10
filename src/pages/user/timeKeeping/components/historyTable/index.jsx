import { Button, Table } from 'antd';
import { useTranslation } from 'react-i18next';
import './historyTable.scss';
import Buttonwarning from '../../icon/buttonwarning';

function HistoryTable({ Item, showModal }) {
  const {logTimeReportList} =Item
  const { t } = useTranslation();
  const columns = [
    {
      title: t('time_keeping.id'),
      dataIndex: 'STT',
      Key: 'STT',
      align: 'center',
      render:(id,record,index)=>(
        <span>{index+1}</span>
      )
    },
    {
      title: (
        <>
          {t('time_keeping.day')}
        </>
      ),
      dataIndex: 'date',
      Key: 'day',
      align: 'center',
    },
    {
      title: t('time_keeping.checkIn'),
      dataIndex: 'checkin',
      Key: 'checkin',
      align: 'center',
      render: checkin =>
        checkin ? (
          `${checkin}`
        ) : (
          <>
          <Button type="link" onClick={showModal} icon={<Buttonwarning />}></Button>
          </>
        ),
    },
    {
      title: t('time_keeping.checkOut'),
      dataIndex: 'checkout',
      Key: 'checkout',
      align: 'center',
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
    },
  ];
 
  return (
    <>
      <Table
        rowKey={'id'}
        pagination={false}
        columns={columns}
        dataSource={logTimeReportList}
        // scroll={{ y: 380 }}
        // bordered={true}
      />
    </>
  );
}
export default HistoryTable;
