import axiosClient from './axiosClient';
import { GENERAL_STATISTIC_URL } from './common';

const generalStatisticApi = {
  getAll(params) {
    return axiosClient.get(GENERAL_STATISTIC_URL, { params });
  },
};
export default generalStatisticApi;
