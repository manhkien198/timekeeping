import { Table } from 'antd';
import Data from './dataTable';
import  { DownOutlined } from '@ant-design/icons';
import {useTranslation} from 'react-i18next'
import './historyTable.scss'

const iconDown = <DownOutlined />

function HistoryTable() {
  const {t} = useTranslation()

  const columns = [
    {
      title: t("time_keeping.id"),
      dataIndex: 'STT',
      Key: 'STT',
      align: 'center'
    },
    {
      title: <>{t("time_keeping.day")}  {iconDown}</> ,
      dataIndex: 'day',
      Key: 'day',
      align: 'center'
    },
    {
      title: 'check in',
      dataIndex: 'checkin',
      Key: 'checkin',
      align: 'center'
    },
    {
      title: 'check out',
      dataIndex: 'checkout',
      Key: 'checkout',
      align: 'center'
    },
    {
      title: 'ot',
      dataIndex: 'ot',
      Key: 'ot',
      align: 'center'
    },
    {
      title: t("time_keeping.workingDay"),
      dataIndex: 'totalWork',
      Key: 'totalWork',
      align: 'center'
    },
    {
      title: t("time_keeping.note"),
      dataIndex: 'note',
      key: 'note',
      align: 'center'
    },
  ];

  return (
    <>
      <Table
        pagination={false}
        columns={columns}
        dataSource={Data}
        scroll={{ y: 380 }}
        bordered = {true}
      />;
    </>
  );
}
export default HistoryTable;
