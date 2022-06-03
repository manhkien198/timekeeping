import axiosClient from './axiosClient';
import { GENERAL_STATISTIC_URL } from './common';

const generalStatisticApi = {
  getAll(params) {
    const url = GENERAL_STATISTIC_URL;
    return axiosClient.get(url, { params });
  },
};
export default generalStatisticApi;
