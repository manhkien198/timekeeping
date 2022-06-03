import axiosClient from './axiosClient';
import { EDIT_URL, PERSONAL_STATISTIC_URL, REASON_TYPE_URL } from './common';

const personalStatisticApi = {
  getAll(params) {
    return axiosClient.get(PERSONAL_STATISTIC_URL, { params });
  },
  getReasonType(params) {
    return axiosClient.get(REASON_TYPE_URL, { params });
  },
  edit(user, params) {
    const url = `${EDIT_URL}/${user}`;
    return axiosClient.get(url, { params });
  },
};
export default personalStatisticApi;
