import axiosClient from './axiosClient';

const generalStatisticApi = {
  getAll(params) {
    const url = '/logs/summary';
    return axiosClient.get(url, { params });
  },
};
export default generalStatisticApi;
