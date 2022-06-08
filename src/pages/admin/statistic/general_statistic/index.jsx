import { Table } from 'antd';
import moment from 'moment';
import qs from 'query-string';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import generalStatisticApi from '../../../../api/generalStatisticApi';
import ButtonGroup from '../../../../components/ButtonGroup';
import CusomPageHeader from '../../../../components/CusomPageHeader';
import Filter from '../../../../components/Filter';
import { getNumbersOfWeekend } from '../../../../utils/getNumbersOfWeekend';
function GeneralStatistic() {
  const { t } = useTranslation();

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
    },
    {
      title: t('general_table.employees'),
      dataIndex: 'fullName',
    },
    {
      title: t('general_table.work_day'),
      dataIndex: 'workDays',
    },
    {
      title: t('general_table.paid_leave'),
      dataIndex: 'pdays',
    },
    {
      title: t('general_table.unpaid_leave'),
      dataIndex: 'offDays',
    },
    {
      title: t('general_table.ot'),
      dataIndex: 'overTimes',
    },
    {
      title: t('general_table.total_day_off'),
      dataIndex: 'total_day_off',
      render: () => <span>12</span>,
    },
    {
      title: t('general_table.day_off'),
      dataIndex: 'pdaysUsed',
    },
    {
      title: t('general_table.day_off'),
      dataIndex: 'rest',
      render: (_, row) => {
        return <span>{12 - row.pdaysUsed}</span>;
      },
    },
  ];
  const data = dataSource?.logTimeReportList?.map((x, id) => ({
    id: id + 1,
    ...x,
  }));
  const numbersOfWeekend = getNumbersOfWeekend(
    moment(params.date).format('DD/MM/YYYY'),
  );
  const restOfWorkDay = moment(params.date).daysInMonth() - numbersOfWeekend;
  return (
    <>
      <CusomPageHeader
        title={t('page_header.title')}
        subTitle={`${t('page_header.month')}`}
        params={params}
        setParams={setParams}
      />
      <Filter />
      <ButtonGroup total={dataSource.totalWages} totalWork={restOfWorkDay} />
      <Table dataSource={data} columns={columns} rowKey="id" />
    </>
  );
}

export default GeneralStatistic;
