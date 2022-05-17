import React, { useState } from 'react';
import {
  Typography,
  PageHeader,
  Dropdown,
  Space,
  DatePicker,
  Button,
} from 'antd';
import HistoryTable from './components/historyTable/index';
import './styles.scss';
import DownOutline from './icon/downOutline';
import PopupLaterCheckin from './components/popup/popup'

const { Title } = Typography;
const iconDown = <DownOutline />;

const today = new Date();
const formatMonth = (date, format) => {
  const map = {
    mm: date.getMonth() + 1,
    yyy: date.getFullYear(),
  };
  return format.replace(/mm|yyy/gi, matched => map[matched]);
};
const month = formatMonth(today, 'mm/yyy');
console.log(formatMonth(today, 'mm/yyy'));
const monthFormat = ' MM/YYYY';

function TimeKeeping(props) {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  
  return (
    <>
      <PageHeader style={{ padding: '0' }}>
        <Title style={{ padding: '0px 19px' }} level={2}>
          Lịch sử chấm công
          <Title
            style={{
              display: 'inline',
              color: '#066F9B',
              marginLeft: '0.8rem',
            }}
            level={2}
          >
            Tháng{' '}
            <DatePicker
              suffixIcon={iconDown}
              placeholder={month}
              format={monthFormat}
              bordered={'none'}
              picker="month"
              allowClear={false}
            />
          </Title>
        </Title>
        <Title style={{ padding: '0px 54px', marginTop: '0' }} level={3}>
          Tổng số công
          <Title
            style={{
              display: 'inline',
              color: '#066F9B',
              marginLeft: '7.7rem',
            }}
            level={3}
          >
            7,7/20
          </Title>
        </Title>

        <Dropdown>
          <Space
            style={{
              fontSize: '20px',
              color: '#066F9B',
              fontWeight: 'bold',
              float: 'right',
              marginTop: '-39px',
              paddingRight: '10px',
            }}
          >
            Filter
            <DownOutline />
          </Space>
        </Dropdown>
      </PageHeader>
      <Button style={{ color: '#066F9B' }} ghost onClick={showModal}>
        Check in Muộn
      </Button>
      <PopupLaterCheckin Visible={visible} setVisibles={setVisible} />
      <HistoryTable />
    </>
  );
}

export default TimeKeeping;
