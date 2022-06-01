import React from 'react';
import { DatePicker, PageHeader } from 'antd';
import DownIcon from './icons/DownIcon';
import moment from 'moment';
import { t } from 'i18next';
function CusomPageHeader({ title, subTitle, setMonth, setYear, setDate }) {
  const handleDatePicker = (value, valueString) => {
    const month = moment(value).month();
    const year = moment(value).year();
    if (setMonth && setYear) {
      setMonth(month + 1);
      setYear(year);
    }
    setDate(`01/${valueString}`);
  };
  return (
    <PageHeader
      className="page-header-content"
      ghost={true}
      title={title}
      subTitle={subTitle}
    >
      {title === t('acceptRequestor.request') ? (
        ''
      ) : (
        <DatePicker
          picker="month"
          format="MM/YYYY"
          suffixIcon={<DownIcon />}
          onChange={handleDatePicker}
          style={{
            border: 'none',
            height: 40,
            width: 180,
          }}
          allowClear={false}
          defaultValue={moment('05/2022', 'MM/YYYY')}
        />
      )}
    </PageHeader>
  );
}

export default CusomPageHeader;
