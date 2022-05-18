const today = new Date();
const formatMonth = (date, format) => {
  const map = {
    mm: date.getMonth() + 1,
    yyy: date.getFullYear(),
  };
  return format.replace(/mm|yyy/gi, matched => map[matched]);
};
const month = formatMonth(today, 'mm/yyy');

const monthFormat = ' MM/YYYY';

export { month, monthFormat}