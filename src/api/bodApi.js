import axiosClient from './axiosClient';

const BodApi = {
  getAll(params) {
    const url = '/bod/members';
    return axiosClient.get(url, { params });
  },
};
export default BodApi;
