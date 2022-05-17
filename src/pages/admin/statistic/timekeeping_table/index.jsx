import React, { useEffect, useState } from 'react';
import TableTimeKeeping from './component/TableTimeKeeping';
import FilterTimeKeeping from './component/FilterTimeKeeping';
import { get_day_of_month } from './constant';
import { Tooltip } from 'antd';
function TimeKeepingTable(props) {
  const [month, setMonth] = useState('');
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
      <FilterTimeKeeping setMonth={setMonth} setYear={setYear} />
      <div className="table">
        <TableTimeKeeping listDayOnMonth={listDayOnMonth} />
      </div>
    </div>
  );
}

export default TimeKeepingTable;
