import React, { useEffect, useState } from 'react';
import TableTimeKeeping from './component/TableTimeKeeping';
import queryString from 'query-string';
import { get_day_of_month } from './constant';
import { Modal, message } from 'antd';
import CusomPageHeader from '../../../../components/CusomPageHeader';
import ButtonGroup from '../../../../components/ButtonGroup';
import { useTranslation } from 'react-i18next';
import Filter from '../../../../components/Filter';
import TimeKeepingApi from '../../../../api/time_keeping/TimeKeepingApi';
import moment from 'moment';
import { convertArrayToParamsWithDash } from '../../../../utils/convertArrayToParamsWithDash';
import { useLocation, useNavigate } from 'react-router-dom';
import { DEFAULT_LIMIT, DEFAULT_PAGE } from '../../../../constants/common';
import qs from 'query-string';
function TimeKeepingTable(props) {
  const location = useLocation();
  const navigate = useNavigate();
  const [date, setDate] = useState(moment(Date.now()).format('DD/MM/YYYY'));
  const { t } = useTranslation();
  const [month, setMonth] = useState();
  const [year, setYear] = useState();
  const [day, setDay] = useState();
  const [isShowModal, setIsShowModal] = useState(false);
  const [data, setData] = useState([]);
  const [dataModal, setDataModal] = useState({});
  const [loading, setLoading] = useState(true);
  const [listParam, setListParam] = useState({
    date: date,
    currentPage: DEFAULT_PAGE,
    limit: DEFAULT_LIMIT,
    keyword: '',
    sortDirection: 'ASC',
  });
  useEffect(() => {
    const date = new Date();
    setMonth(moment(date).format('MM'));
    setYear(moment(date).format('YYYY'));
  }, []);

  useEffect(() => {
    const dayInMonth = get_day_of_month(year, month);
    setDay(dayInMonth);
  }, [month, year, date]);

  useEffect(() => {
    setListParam({ ...listParam, date });
    setLoading(true);
  }, [date]);

  useEffect(() => {
    const newParams = qs.parse(location.search);
    const { date, sortDirection } = newParams;
    setListParam({ ...listParam, ...newParams });
  }, []);

  const handleShowModal = (fullname, item) => {
    setIsShowModal(true);
    setDataModal({ fullname, ...item });
  };

  const getAllData = async () => {
    try {
      const { data } = await TimeKeepingApi.getAll(listParam);
      setData(data.list);
      setLoading(false);
    } catch (error) {
      message.error(error);
    }
  };

  useEffect(() => {
    const newParams = { ...listParam };
    convertArrayToParamsWithDash(newParams);
    navigate({
      pathname: location.pathname,
      search: queryString.stringify(newParams, {
        skipNull: true,
        skipEmptyString: true,
      }),
    });
    getAllData();
  }, [listParam]);

  return (
    <div className="tableTimeKeeping">
      <CusomPageHeader
        setMonth={setMonth}
        setYear={setYear}
        setDate={setDate}
        title={t('page_header.title')}
        subTitle={`${t('page_header.month')}`}
        params={listParam}
        setParams={setListParam}
      />
      <Filter
        listParam={listParam}
        setListParam={setListParam}
        setLoading={setLoading}
      />
      <ButtonGroup
        listParam={listParam}
        setListParam={setListParam}
        setLoading={setLoading}
      />
      <div className="table">
        <TableTimeKeeping
          loading={loading}
          data={data}
          day={day}
          month={date?.slice(3, 5)}
          handleShowModal={handleShowModal}
        />
      </div>
      <div className="modal_detailTimeKeeping">
        <Modal
          footer={false}
          onCancel={() => setIsShowModal(false)}
          title={t('time_keeping.detail')}
          width={500}
          visible={isShowModal}
        >
          <div className="modal_content">
            <div className="modal_description">
              <p>{t('acceptRequestor.staff')}:</p>
              <p>{t('acceptRequestor.date')}:</p>
              <p>{t('time_keeping.activity')}:</p>
              <p>{t('acceptRequestor.reason')}:</p>
              <p>{t('acceptRequestor.approver')}:</p>
            </div>
            <div className="">
              <p>{dataModal?.fullname}</p>
              <p>{dataModal?.date}</p>
              <p>{dataModal?.reasonType?.type}</p>
              <p>{dataModal?.reasonType?.name}</p>
              <p>{dataModal?.approver}</p>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default TimeKeepingTable;
