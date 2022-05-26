import React, { useEffect, useState } from 'react';
import TableTimeKeeping from './component/TableTimeKeeping';
import { get_day_of_month } from './constant';
import { Modal, Tooltip,message } from 'antd';
import CusomPageHeader from '../../../../components/CusomPageHeader';
import ButtonGroup from '../../../../components/ButtonGroup';
import { useTranslation } from 'react-i18next';
import Filter from '../../../../components/Filter';
import TimeKeepingApi from "../../../../api/time_keeping/TimeKeepingApi";
import moment from "moment";
function TimeKeepingTable(props) {
  const [date, setDate] = useState(); 
  const { t } = useTranslation();
  const [month, setMonth] = useState();
  const [year, setYear] = useState();
  const [day, setDay] = useState('');
  const [listDayOnMonth, setListDayOnMonth] = useState('');
  const [isShowModal, setIsShowModal] = useState(false);
  const [data, setData] = useState();
  const [dataModal, setDataModal] = useState({})
  const [loading, setLoading]= useState(false);
  const [listParam ,setListParam] = useState({})

  useEffect(() => {
    const date = new Date();
    setDate(moment(date).format('DD/MM/YYYY'))
    setMonth(moment(date).format('MM'))
    setYear(moment(date).format('YYYY'))
  }, [])
  
  useEffect(() => {
    const dayInMonth = get_day_of_month(year, month);
    setDay(dayInMonth);
    setListParam({
      date: `${date}`
    })
  }, [date]);

  const handleShowModal = (fullname, item)=>{
    setIsShowModal(true)
    setDataModal({fullname,...item})
  }

  useEffect(() => {
    let arrDay = [];
    for (let i = 1; i <= day; i++) {
      let dayObj = {
        title: i.toString(),
        dataIndex: 'date',
        align: 'center',
        width: 100,
        key: i.toString(),
        render: (status,value) => {
          const date = i<10 ? `0${i}`:i
          const months = `${month}<10`? `0${month}`:`${month}`
          return (
            <div>
              { value.logTimes?.map(item=> {
                if(item.date === `${date}/${months}`&& item.reasonType !== null){
                  return (
                    <Tooltip
                        placement="topLeft"
                        title={item.reasonType.type}
                        style={{ color: '#E11274', backgroundColor: 'white' }}
                      >
                        <span
                          onClick={() => {
                            handleShowModal(value.fullname, item)
                          }}
                          style={{ color: '#E11274' }}
                        >
                          X
                        </span>
                      </Tooltip>
                  )
                }else if (item.date === `${date}/${months}`){
                  return (
                    <span>X</span>
                  )
                }
                return;
              })}
            </div>
          );
        },
      };
      arrDay.push(dayObj);
    }
    setListDayOnMonth(arrDay);
  }, [day]);

  const getAllData = async()=>{
    try {
      const {data} = await TimeKeepingApi.getAll(listParam)
      setData(data)
    } catch (error) {
      message.error(error)
    }
  }

  useEffect(() => {
    getAllData();
  }, [listParam])
  
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
        <TableTimeKeeping data={data} listDayOnMonth={listDayOnMonth} />
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
