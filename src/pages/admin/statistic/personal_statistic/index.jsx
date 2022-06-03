import { Button, message, Table } from 'antd';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import personalStatisticApi from '../../../../api/personalStatisticApi';
import UsersApi from '../../../../api/userApi';
import ButtonGroup from '../../../../components/ButtonGroup';
import CusomPageHeader from '../../../../components/CusomPageHeader';
import Filter from '../../../../components/Filter';
import SelectUsers from '../../../../components/SelectUsers';
import { setUsers } from './reducer';
import qs from 'query-string';
function PersonalStatistic(props) {
  const { t } = useTranslation();
  const location = useLocation();
  const queryParams = qs.parse(location.search);
  const [userList, setUserList] = useState([]);
  const [params, setParams] = useState({
    ...queryParams,
    date: queryParams.date
      ? queryParams.date
      : moment(Date.now()).format('DD/MM/YYYY'),
    username: userList ? userList?.[0]?.username : queryParams.username,
  });
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(true);
  const navi = useNavigate();
  useEffect(() => {
    navi({
      pathname: window.location.pathname,
      search: qs.stringify(params, {
        skipEmptyString: true,
      }),
    });
  }, [navi, params]);

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
      render: (_, row) => <p>{row?.reasonType?.name}</p>,
    },
  ];
  const dispatch = useDispatch();
  const fetchUsers = async () => {
    try {
      const res = await UsersApi.getAll();
      dispatch(setUsers(res.data));
      setParams({
        ...params,
        username: queryParams.username
          ? queryParams.username
          : res.data[0].username,
      });
      setUserList(res.data);
    } catch (error) {
      message.error(error.message);
    }
  };
  const fetchPersonalStatistic = async () => {
    try {
      const resp = await personalStatisticApi.getAll({
        username: params.username || userList?.[0]?.username,
        date: params.date,
      });
      setDataSource(resp.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      message.error(error.message);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    fetchPersonalStatistic();
  }, [params]);

  return (
    <div className="personal__statistic">
      <CusomPageHeader
        title={<SelectUsers setParams={setParams} params={params} />}
        params={params}
        setParams={setParams}
        subTitle={`${t('page_header.month')}`}
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
