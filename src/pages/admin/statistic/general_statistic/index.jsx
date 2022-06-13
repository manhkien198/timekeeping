import { message, Table } from 'antd';
import moment from 'moment';
import qs from 'query-string';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import generalStatisticApi from '../../../../api/generalStatisticApi';
import UsersApi from '../../../../api/userApi';
import ButtonGroup from '../../../../components/ButtonGroup';
import CusomPageHeader from '../../../../components/CusomPageHeader';
import Filter from '../../../../components/Filter';
import { DATE_FORMAT } from '../../../../constants/common';
import { getNumbersOfWeekend } from '../../../../utils/getNumbersOfWeekend';
function GeneralStatistic() {
  const { t } = useTranslation();
  const [userList, setUserList] = useState([]);
  const fetchUsers = async () => {
    try {
      const res = await UsersApi.getAll();

      setUserList(res.data);
    } catch (error) {
      message.error(error.message);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  const dataBtnGroup = userList
    ? userList.map((user, id) => ({ ...user, id, title: user.fullName }))
    : [];
  const location = useLocation();
  const queryParams = qs.parse(location.search);
  const [params, setParams] = useState({
    ...queryParams,
    date: queryParams.date
      ? queryParams.date
      : moment(Date.now()).format('DD/MM/YYYY'),
  });
  const [dataSource, setDataSource] = useState([]);
  const navi = useNavigate();
  const fetchGeneralStatisTicData = async () => {
    const resp = await generalStatisticApi.getAll({ ...params });
    setDataSource(resp.data);
  };
  useEffect(() => {
    navi({
      pathname: window.location.pathname,
      search: qs.stringify(params, {
        skipEmptyString: true,
      }),
    });
  }, [navi, params]);
  useEffect(() => {
    fetchGeneralStatisTicData();
  }, [params]);

  const columns = [
    {
      title: t('general_table.cardinal_numbers'),
      dataIndex: 'id',
      align: 'center',
    },
    {
      title: t('general_table.employees'),
      dataIndex: 'fullName',
      align: 'center',
    },
    {
      title: `Tháng ${params.date.split('/')[1]}`,
      children: [
        {
          title: t('general_table.work_day'),
          dataIndex: 'workDays',
          align: 'center',
        },
        {
          title: t('general_table.paid_leave'),
          dataIndex: 'pdays',
          align: 'center',
        },
        {
          title: t('general_table.unpaid_leave'),
          dataIndex: 'offDays',
          align: 'center',
        },
        {
          title: t('general_table.ot'),
          dataIndex: 'overTimes',
          align: 'center',
        },
      ],
    },

    {
      title: `Năm ${params.date.split('/')[2]}`,
      children: [
        {
          title: t('general_table.total_day_off'),
          dataIndex: 'total_day_off',
          align: 'center',
          render: () => <span>12</span>,
        },
        {
          title: t('general_table.used_day'),
          dataIndex: 'pdaysUsed',
          align: 'center',
        },
        {
          title: t('general_table.rest_day'),
          dataIndex: 'rest',
          align: 'center',
          render: (_, row) => {
            return <span>{12 - row?.pdaysUsed}</span>;
          },
        },
      ],
    },
  ];
  const data = dataSource?.logTimeReportList?.map((x, id) => ({
    id: id + 1,
    ...x,
  }));
  console.log('data', data);
  const numbersOfWeekend = getNumbersOfWeekend(params.date);
  const restOfWorkDay =
    moment(params.date, DATE_FORMAT).daysInMonth() - numbersOfWeekend;

  return (
    <>
      <CusomPageHeader
        title={t('page_header.title')}
        subTitle={`${t('page_header.month')}`}
        params={params}
        setParams={setParams}
      />
      <Filter />
      <ButtonGroup
        total={dataSource.totalWages}
        totalWork={restOfWorkDay}
        items={dataBtnGroup}
        totalRecord={data?.length}
        columns={columns}
        filter={false}
        listParam={params}
        api={generalStatisticApi}
        setListParam={setParams}
      />
      <Table dataSource={data} columns={columns} rowKey="id" bordered />
    </>
  );
}

export default GeneralStatistic;
