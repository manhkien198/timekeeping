import React from 'react';
import { DatePicker, PageHeader } from 'antd';
import DownIcon from './icons/DownIcon';
import moment from 'moment';
function CusomPageHeader({ title, subTitle, setMonth, setYear }) {
  const handleDatePicker = value => {
    const month = moment(value).month();
    const year = moment(value).year();
    setMonth(month + 1);
    setYear(year);
  };
  return (
    <PageHeader
      className="page-header-content"
      ghost={true}
      title={title}
      subTitle={subTitle}
    >
      <DatePicker
        picker="month"
        format="MM/YYYY"
        suffixIcon={<DownIcon />}
        onChange={handleDatePicker}
        style={{
          border: 'none',
          height: 40,
          width: 180,
          paddingTop: 0,
        }}
        defaultValue={moment('05/2022', 'MM/YYYY')}
      />
    </PageHeader>
  );
}

export default CusomPageHeader;
