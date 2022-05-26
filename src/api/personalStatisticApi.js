import axiosClient from './axiosClient';

const personalStatisticApi = {
  getAll(params) {
    const url = '/logs/members';
    return axiosClient.get(url, { params });
  },
  getReasonType(params) {
    const url = '/reason_type';
    return axiosClient.get(url, { params });
  },
  edit(user,params) {
    const url =`/log/member/${user}`
    return axiosClient.get(url, { params });

  }
};
export default personalStatisticApi;
