import React, { useEffect, useState } from 'react';
import HistoryTable from './components/historyTable/index';
import './styles.scss';
import Popup from './components/popup/popup';
import { useTranslation } from 'react-i18next';
import time_keeping from '../../../api/time_keeping.js';
import moment from 'moment';
import CusomPageHeader from '../../../components/CusomPageHeader';
import { message } from 'antd';
import jwt_decode from 'jwt-decode';
import { getToken } from '../../../api/Cookie';

function TimeKeeping(props) {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  const [item, setItem] = useState([]);
  const [date, setDate] = useState(moment(Date.now()).format('DD/MM/YYYY'));
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const accesstokenParsed = jwt_decode(getToken('Access_Token'));
  const username = accesstokenParsed.preferred_username;
  const [listParam, setListParam] = useState(() => {
    return {
      username: username,
      date: date,
    };
  });

  const showModal = () => {
    setVisible(true);
  };

  const getDataTimeKeeping = async () => {
    try {
      const { data } = await time_keeping.getAll(listParam);
      setItem(data);
    } catch (error) {
      message.error(error);
    }
  };

  useEffect(() => {
    getDataTimeKeeping();
  }, [listParam]);

  useEffect(() => {
    setListParam({ ...listParam, date: date });
  }, [date]);
  return (
    <>
      <CusomPageHeader
        setMonth={setMonth}
        setYear={setYear}
        setDate={setDate}
        title={t('time_keeping.timekeeping_history')}
        subTitle={t('time_keeping.month')}
      />
      <Popup Visible={visible} setVisibles={setVisible} />
      <HistoryTable Item={item} showModal={showModal} />
    </>
  );
}

export default TimeKeeping;
