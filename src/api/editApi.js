import axiosClient from './axiosClient';

const editApi = {
  edit(params, user) {
    const url = `/logs/member/${user}`;
    return axiosClient.put(url, params);
  },
  getValueForm(params) {
    const url = `/log/members`;
    return axiosClient.get(url, { params });
  },
};
export default editApi;
