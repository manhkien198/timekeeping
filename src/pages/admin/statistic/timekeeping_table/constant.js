export const get_day_of_month = (year, month) => {
  return new Date(year, month, 0).getDate();
};
