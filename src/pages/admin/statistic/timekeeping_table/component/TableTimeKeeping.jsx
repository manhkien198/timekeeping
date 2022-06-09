import { Table, Tooltip } from 'antd';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { isWeekend } from "../constant";
const TableTimeKeeping = ({ data, month, day, handleShowModal, loading, year }) => {
  const [listDayOnMonth, setListDayOnMonth] = useState([]);
  const { t } = useTranslation();
  const renderDayOnMonth = () => {
    let arrDay = [];
    for (let i = 1; i <= day; i++) {
      const date = i < 10 ? `0${i}` : i;
      let day = new Date(`${year}/${month}/${date}`)
      let dayObj = {
        title: (
          <div>
            {isWeekend(day) ? <span className="weekend">{i.toString()}</span>: <span>{i.toString()}</span>}
          </div>
        ),
        dataIndex: 'date',
        align: 'center',
        width: 100,
        key: i.toString(),
        render: (status, value) => {
      
          return (
            <div>
              {value?.logTimeReportList &&
                value?.logTimeReportList?.map(item => {
                  if (
                    item?.date === `${date}/${month}` &&
                    item?.reasonType !== null
                  ){
                    if(item.checkInTime !== null){
                    return (
                      <Tooltip
                        placement="topLeft"
                        title={item?.reasonType?.type}
                        className="weekend"
                        style={{ backgroundColor: 'white' }}
                      >
                        <span
                          onClick={() => handleShowModal(value?.fullname, item)}
                          className="weekend"
                        >
                          X
                        </span>
                      </Tooltip>
                    )
                  }else{
                    return (
                    <Tooltip
                    placement="topLeft"
                    title={item?.reasonType?.type}
                    className="weekend bg-white"
                  >
                    <span
                      onClick={() => handleShowModal(value?.fullname, item)}
                      className="weekend"
                    >
                      O
                    </span>
                  </Tooltip>
                    )
                  }
                  }
                   else if (item?.date === `${date}/${month}`) {
                    return <span>X</span>;
                  }
                  return <></>;
                })}
            </div>
          );
        },
      };
      arrDay = [...arrDay, dayObj];
    }
    setListDayOnMonth([...arrDay]);
  };

  const column = [
    {
      title: t('time_keeping.id'),
      dataIndex: 'id',
      align: 'center',
      key: t('time_keeping.id'),
      fixed: 'left',
      width: 75,
      render: (id, record, index) => {
        return <p>{index + 1}</p>;
      },
    },
    {
      title: t('time_keeping.fullName'),
      dataIndex: 'fullname',
      align: 'center',
      fixed: 'left',
      width: 200,
      key: t('time_keeping.fullName'),
      render: fullname => {
        return <p>{fullname}</p>;
      },
    },
    ...listDayOnMonth,
    {
      title: t('time_keeping.workingDay'),
      dataIndex: 'workingDay',
      align: 'center',
      fixed: 'right',
      width: 100,
      key: t('time_keeping.workingDay'),
      render: (totalWork, record) => {
        return <p>{record.totalWorks}</p>;
      },
    },
  ];

  useEffect(() => {
    renderDayOnMonth();
  }, [day]);

  return (
    <div>
      <Table
        // loading={loading}
        rowKey={'id'}
        columns={column}
        dataSource={data}
        scroll={{ x: 800, y: 700 }}
        style={{ maxWidth: 'calc(100vw - 348px)' }}
      />
    </div>
  );
};

export default TableTimeKeeping;
