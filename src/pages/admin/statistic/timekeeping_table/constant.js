export const get_day_of_month = (year, month) => {
  return new Date(year, month, 0).getDate();
};
export const isWeekend = (date = new Date()) => {
  return date.getDay() === 6 || date.getDay() === 0;
}
export const checkOrderbyValue = (listParams, field)=>{
  let orderBy = '';
  if (listParams?.orderby) {
    const arrFromOrder = listParams.orderby.split('-');
    if (arrFromOrder[0] === field) {
      orderBy = arrFromOrder[1] === 'ASC' ? 'ascend' : 'descend';
    }
  }

  return orderBy;
};