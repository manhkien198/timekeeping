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
import PopupLaterCheckin from './components/popup/popup';
import { useTranslation } from 'react-i18next';
import { month, monthFormat} from '../../../components/moment/month'
const { Title } = Typography;
const iconDown = <DownOutline />;



function TimeKeeping(props) {
  const { t } = useTranslation();

  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  return (
    <>
      <PageHeader style={{ padding: '0' }}>
        <Title style={{ padding: '0px 19px' }} level={2}>
          {t('time_keeping.timekeeping_history')}
          <Title
            style={{
              display: 'inline',
              color: '#066F9B',
              marginLeft: '0.8rem',
            }}
            level={2}
          >
            {t('time_keeping.month')}{' '}
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
          {t('time_keeping.total_worked')}
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
        {t('time_keeping.late')}
      </Button>
      <PopupLaterCheckin Visible={visible} setVisibles={setVisible} />
      <HistoryTable />
    </>
  );
}

export default TimeKeeping;
