import React, { useEffect, useState } from 'react';
import TableTimeKeeping from './component/TableTimeKeeping';
import { get_day_of_month } from './constant';
import { Modal, message } from 'antd';
import CusomPageHeader from '../../../../components/CusomPageHeader';
import ButtonGroup from '../../../../components/ButtonGroup';
import { useTranslation } from 'react-i18next';
import Filter from '../../../../components/Filter';
import TimeKeepingApi from '../../../../api/time_keeping/TimeKeepingApi';
import moment from 'moment';
function TimeKeepingTable(props) {
  const [date, setDate] = useState(moment(Date.now()).format('DD/MM/YYYY'));
  const { t } = useTranslation();
  const [month, setMonth] = useState();
  const [year, setYear] = useState();
  const [day, setDay] = useState();
  const [isShowModal, setIsShowModal] = useState(false);
  const [data, setData] = useState([]);
  const [dataModal, setDataModal] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const date = new Date();
    setMonth(moment(date).format('MM'));
    setYear(moment(date).format('YYYY'));
  }, []);

  useEffect(() => {
    const dayInMonth = get_day_of_month(year, month);
    setDay(dayInMonth);
  }, [month, year, date]);

  const handleShowModal = (fullname, item) => {
    setIsShowModal(true);
    setDataModal({ fullname, ...item });
  };

  const getAllData = async () => {
    try {
      const { data } = await TimeKeepingApi.getAll({ date });
      setData(data);
    } catch (error) {
      message.error(error);
    }
  };

  useEffect(() => {
    getAllData();
  }, [date]);

  return (
    <div className="tableTimeKeeping">
      <CusomPageHeader
        setMonth={setMonth}
        setYear={setYear}
        setDate={setDate}
        title={t('page_header.title')}
        subTitle={`${t('page_header.month')}`}
      />
      <Filter />
      <ButtonGroup />
      <div className="table">
        <TableTimeKeeping
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
              <p>{dataModal?.reasonType?.type}</p>
              <p>{dataModal?.fullname}</p>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default TimeKeepingTable;
