import React, { useEffect, useState } from 'react';
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
import { month, monthFormat } from '../../../components/moment/month';
import time_keeping from '../../../api/time_keeping.js'
import moment from 'moment'

const { Title } = Typography;
const iconDown = <DownOutline />;

function TimeKeeping(props) {
  
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  const [item, setItem] = useState([])
  const [date, setDate] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')
  const showModal = () => {
    setVisible(true);
  };

  const getDataTimeKeeping = async  () =>{
    try{
      const  data  = await time_keeping.getAll()
      setItem(data.data);
      
    } catch (error) {
      console.log(error)

    }
  
  }
  useEffect (() =>{ 
    getDataTimeKeeping()
  },[year, month])
  console.log(month) 
  const handleDatePicker = value => {
    const month = moment(value).month();
    const year = moment(value).year();
    setMonth(month + 1);
    setYear(year);
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
              onChange={handleDatePicker}
              setMonth={setMonth}
              setYear={setYear}
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
            {item.map(dt =>(
              dt.totalWorkedTime
            ))
            
            }/20
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
      <HistoryTable Item={item}/>
    </>
  );
}

export default TimeKeeping;
