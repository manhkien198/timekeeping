import { Button, message, Select, Table } from 'antd';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import personalStatisticApi from '../../../../api/personalStatisticApi';
import UsersApi from '../../../../api/userApi';
import ButtonGroup from '../../../../components/ButtonGroup';
import CusomPageHeader from '../../../../components/CusomPageHeader';
import Filter from '../../../../components/Filter';
import SelectUsers from '../../../../components/SelectUsers';
import { filterOption } from '../../../../utils/filterOption';
import { setUsers } from './reducer';
function PersonalStatistic(props) {
  const { t } = useTranslation();
  const [userSelected, setUserSelected] = useState('kienpm');
  const [dataSource, setDataSource] = useState([]);
  const [date, setDate] = useState(moment(Date.now()).format('DD/MM/YYYY'));
  const [loading, setLoading] = useState(true);
  const { Option } = Select;
  const navi = useNavigate();
  const usersList = useSelector(state => state.personalStatistic.users);
  const columns = [
    {
      title: t('personal_statistic.day'),
      dataIndex: 'date',
    },
    {
      title: t('personal_statistic.check_in'),
      dataIndex: 'checkInTime',
    },
    {
      title: t('personal_statistic.check_out'),
      dataIndex: 'checkOutTime',
    },
    {
      title: t('personal_statistic.ot'),
      dataIndex: 'overTime',
    },
    {
      title: t('personal_statistic.come_late'),
      dataIndex: 'lateTime',
    },
    {
      title: t('personal_statistic.leave_soon'),
      dataIndex: 'leave_soon',
    },
    {
      title: t('personal_statistic.hours'),
      dataIndex: 'totalWorkedTime',
    },
    {
      title: t('personal_statistic.state_owned'),
      dataIndex: 'state_owned',
    },
    {
      title: t('personal_statistic.note'),
      dataIndex: 'note',
    },
  ];
  const dispatch = useDispatch();
  const fetchUsers = async () => {
    try {
      const res = await UsersApi.getAll();
      dispatch(setUsers(res.data));
    } catch (error) {
      message.error(error.message);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  const fetchPersonalStatistic = async () => {
    try {
      const resp = await personalStatisticApi.getAll({
        username: userSelected,
        date: date,
      });
      setDataSource(resp.data);
      setLoading(false);
    } catch (error) {
      message.error(error.message);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchPersonalStatistic();
  }, [userSelected, date]);
  const handleSelectUser = value => {
    setUserSelected(value);
  };
  return (
    <div className="personal__statistic">
      <CusomPageHeader
        title={
          <SelectUsers
            userSelected={userSelected}
            setUserSelected={setUserSelected}
          />
        }
        subTitle={`${t('page_header.month')}`}
        setDate={setDate}
      />
      <Filter />
      <ButtonGroup
        children={
          <Button
            type="link"
            style={{ color: '#066F9B', fontWeight: 700 }}
            onClick={() => navi('/statistic/personal/edit')}
          >
            {t('personal_statistic.edit')}
          </Button>
        }
      />
      <div className="personal__statistic__total total">
        <h2 className="total__title">{t('personal_statistic.total_work')}</h2>
        <p className="total__number">7.5 / 20</p>
      </div>
      <Table
        dataSource={dataSource}
        columns={columns}
        rowKey="id"
        loading={loading}
      />
    </div>
  );
}

export default PersonalStatistic;
