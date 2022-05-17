import React, { useEffect, useState } from 'react';
import TableTimeKeeping from './component/TableTimeKeeping';
import { get_day_of_month } from './constant';
import { Tooltip } from 'antd';
import CusomPageHeader from '../../../../components/CusomPageHeader';
import ButtonGroup from '../../../../components/ButtonGroup';
import { useTranslation } from 'react-i18next';
import Filter from '../../../../components/Filter';
function TimeKeepingTable(props) {
  const [month, setMonth] = useState('');
  const { t } = useTranslation();
  const [year, setYear] = useState('');
  const [day, setDay] = useState('');
  const [listDayOnMonth, setListDayOnMonth] = useState('');

  useEffect(() => {
    const dayInMonth = get_day_of_month(year, month);
    setDay(dayInMonth);
  }, [year, month]);

  useEffect(() => {
    let arrDay = [];
    for (let i = 1; i <= day; i++) {
      let dayObj = {
        title: i.toString(),
        dataIndex: i.toString(),
        align: 'center',
        width: 100,
        key: i.toString(),
        render: status => {
          return (
            <div>
              {status?.onl ? (
                <div>
                  {status?.description ? (
                    <div>
                      <Tooltip
                        placement="topLeft"
                        title={status?.description}
                        style={{ color: '#E11274', backgroundColor: 'white' }}
                      >
                        <span style={{ color: '#E11274' }}>X</span>
                      </Tooltip>
                    </div>
                  ) : (
                    <span>X</span>
                  )}{' '}
                </div>
              ) : (
                ''
              )}
            </div>
          );
        },
      };
      arrDay.push(dayObj);
    }
    setListDayOnMonth(arrDay);
  }, [day]);
  return (
    <div className="tableTimeKeeping">
      <CusomPageHeader
        setMonth={setMonth}
        setYear={setYear}
        title={t('page_header.title')}
        subTitle={`${t('page_header.month')}`}
      />
      <Filter />
      <ButtonGroup />
      <div className="table">
        <TableTimeKeeping listDayOnMonth={listDayOnMonth} />
      </div>
    </div>
  );
}

export default TimeKeepingTable;
