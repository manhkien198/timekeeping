import { Table } from 'antd';
import Data from './dataTable';
import  { DownOutlined } from '@ant-design/icons';

import './historyTable.scss'

const iconDown = <DownOutlined />

function HistoryTable() {
  const columns = [
    {
      title: 'STT',
      dataIndex: 'STT',
      Key: 'STT',
      align: 'center'
    },
    {
      title: <>Ngày  {iconDown}</> ,
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
      title: 'Tổng giờ làm ',
      dataIndex: 'totalWork',
      Key: 'totalWork',
      align: 'center'
    },
    {
      title: 'Ghi chú',
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
