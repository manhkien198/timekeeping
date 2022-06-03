import { DatePicker, PageHeader } from 'antd';
import { t } from 'i18next';
import moment from 'moment';
import DownIcon from './icons/DownIcon';
function CusomPageHeader({
  title,
  subTitle,
  setMonth,
  setYear,
  setDate,
  date,
  params,
  setParams,
}) {
  const momentNow = moment(Date.now()).format('MM/YYYY');
  const handleDatePicker = (value, valueString) => {
    const month = moment(value).month();
    const year = moment(value).year();
    if (setMonth && setYear) {
      setMonth(month + 1);
      setYear(year);
    }
    setParams({ ...params, date: `01/${valueString}` });
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
          allowClear={false}
          style={{
            border: 'none',
            height: 40,
            width: 180,
          }}
          defaultValue={
            moment(params.date, 'DD/MM/YYYY')
              ? moment(params.date, 'DD/MM/YYYY')
              : moment(momentNow, 'MM/YYYY')
          }
        />
      )}
    </PageHeader>
  );
}

export default CusomPageHeader;
