import { Button, message, Table } from 'antd';
import moment from 'moment';
import qs from 'query-string';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import personalStatisticApi from '../../../../api/personalStatisticApi';
import UsersApi from '../../../../api/userApi';
import ButtonGroup from '../../../../components/ButtonGroup';
import CusomPageHeader from '../../../../components/CusomPageHeader';
import Filter from '../../../../components/Filter';
import SelectUsers from '../../../../components/SelectUsers';
import { DATE_FORMAT } from '../../../../constants/common';
import { checkOrderbyValue } from '../../../../utils/checkOrderByValue';
import { getNumbersOfWeekend } from '../../../../utils/getNumbersOfWeekend';
import { dataExport } from '../../../../utils/newDataExportStatistic';
import { setUsers } from './reducer';
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
    username: userList?.[0]?.username || queryParams.username,
    sortBy: '',
    sortDirection: '',
    keyword: queryParams.keyword ? queryParams.keyword : '',
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
      align: 'center',
      showSorterTooltip: {
        title: t('personal_statistic.titleChangeSorter'),
      },
      sorter: true,
      defaultSortOrder: checkOrderbyValue(params, 'date'),
    },
    {
      title: t('personal_statistic.check_in'),
      dataIndex: 'checkInTime',
      align: 'center',
    },
    {
      title: t('personal_statistic.check_out'),
      dataIndex: 'checkOutTime',
      align: 'center',
    },
    {
      title: t('personal_statistic.ot'),
      dataIndex: 'overTime',
      align: 'center',
    },
    {
      title: t('personal_statistic.come_late'),
      dataIndex: 'lateTime',
      align: 'center',
    },
    {
      title: t('personal_statistic.leave_soon'),
      dataIndex: 'leave_soon',
      align: 'center',
    },
    {
      title: t('personal_statistic.hours'),
      dataIndex: 'totalWorkedTime',
      align: 'center',
      render: _ => <span>{_ ? _.toFixed(2) : ''}</span>,
    },
    {
      title: t('personal_statistic.state_owned'),
      dataIndex: 'wage',
      align: 'center',
      showSorterTooltip: {
        title: t('personal_statistic.titleChangeSorter'),
      },
      sorter: true,
      defaultSortOrder: checkOrderbyValue(params, 'wage'),
      render: _ => <span>{_ ? _.toFixed(2) : ''}</span>,
    },
    {
      title: t('personal_statistic.note'),
      dataIndex: 'note',
      align: 'center',
      render: (_, row) => (
        <p>
          {row.reasonType
            ? `${row?.reasonType?.type} ${
                row?.reason ? `: ${row?.reason}` : ''
              }`
            : ''}
        </p>
      ),
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
        sortBy: params.sortBy ? params.sortBy : null,
        sortDirection: params.sortDirection ? params.sortDirection : null,
        keyword: params.keyword ? params.keyword : '',
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
    if (userList.length) {
      fetchPersonalStatistic();
    }
  }, [params]);
  const numbersOfWeekend = getNumbersOfWeekend(params.date);
  const restOfWorkDay =
    moment(params.date, DATE_FORMAT).daysInMonth() - numbersOfWeekend;
  const colExport = columns.map(x => {
    if (x.children?.length) {
      x.children.map(col => {
        if (col.dataIndex === 'total_day_off') {
          col.render = () => 12;
        } else if (col.dataIndex === 'rest') {
          col.render = (_, row) => 12 - row?.pdaysUsed;
        }
        return col;
      });
    }
    return x;
  });
  const handleTableChange = (pagination, filter, sorter) => {
    const { current: page, pageSize: limit } = pagination;
    setParams(prev => ({
      ...prev,
      page,
      limit,
      sortBy: sorter.field,
      sortDirection: sorter.order === 'ascend' ? 'ASC' : 'DESC',
    }));
  };
  return (
    <div className="personal__statistic">
      <CusomPageHeader
        title={<SelectUsers setParams={setParams} params={params} />}
        params={params}
        setParams={setParams}
        subTitle={`${t('page_header.month')}`}
      />
      <Filter
        listParam={params}
        setListParam={setParams}
        setLoading={setLoading}
      />
      <ButtonGroup
        total={dataSource.totalWorks}
        totalWork={restOfWorkDay}
        type={2}
        listParam={params}
        setListParam={setParams}
        columns={colExport}
        changeData={dataExport}
        api={personalStatisticApi}
        filter={false}
        totalRecord={dataSource.logTimeReportList?.length}
        children={
          <Button
            type="link"
            style={{ color: '#066F9B', fontWeight: 700 }}
            onClick={() =>
              navi(`/statistic/personal/edit?username=${params.username}`)
            }
          >
            {t('personal_statistic.edit')}
          </Button>
        }
      />
      <Table
        dataSource={dataSource.logTimeReportList}
        columns={columns}
        rowKey="id"
        loading={loading}
        onChange={handleTableChange}
      />
    </div>
  );
}

export default PersonalStatistic;
