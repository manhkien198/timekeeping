import axiosClient from './axiosClient';

const editApi = {
  edit(params, user) {
    const url = `/log/members/${user}`;
    return axiosClient.post(url, { params });
  },
  getValueForm(params) {
    const url = `/log/members`;
    return axiosClient.get(url, { params });
  },
};
export default editApi;
