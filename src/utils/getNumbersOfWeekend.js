import moment from 'moment';

export function getNumbersOfWeekend(
  time = moment(Date.now()).format('YYYY-MM-DD'),
) {
  let weekend = 0;
  for (let i = 1; i <= moment(time).daysInMonth(); i++) {
    if (
      moment(`${moment(time).format('YYYY-MM')}-${i}`).day() === 5 ||
      moment(`${moment(time).format('YYYY-MM')}-${i}`).day() === 6
    ) {
      weekend++;
    }
  }
  return weekend;
}
