export const get_day_of_month = (year, month) => {
  return new Date(year, month, 0).getDate();
};
export const isWeekend = (date = new Date()) => {
  return date.getDay() === 6 || date.getDay() === 0;
}