import moment from 'moment';
import { DATE_FORMAT } from '../constants/common';

export function getNumbersOfWeekend(
  time = moment(Date.now()).format(DATE_FORMAT),
) {
  let weekend = 0;
  for (let i = 1; i <= moment(time, DATE_FORMAT).daysInMonth(); i++) {
    const newTime =
      i < 10
        ? `0${i}/${moment(time, DATE_FORMAT).format('MM/YYYY')}`
        : `${i}/${moment(time, DATE_FORMAT).format('MM/YYYY')}`;
    if (
      moment(newTime, DATE_FORMAT).day() === 0 ||
      moment(newTime, DATE_FORMAT).day() === 6
    ) {
      weekend++;
    }
  }
  return weekend;
}
