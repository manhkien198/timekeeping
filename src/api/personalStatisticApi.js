import axiosClient from './axiosClient';
import { EDIT_URL, PERSONAL_STATISTIC_URL, REASON_TYPE_URL } from './common';

const personalStatisticApi = {
  getAll(params) {
    return axiosClient.get(PERSONAL_STATISTIC_URL, { params });
  },
  getReasonType(params) {
    return axiosClient.get(REASON_TYPE_URL, { params });
  },

};
export default personalStatisticApi;
