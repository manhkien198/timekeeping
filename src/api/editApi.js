import axiosClient from './axiosClient';
import { EDIT_URL, PERSONAL_LOGTIME_URL } from './common';

const editApi = {
  edit(params, user) {
    const url = `${EDIT_URL}/${user}`;
    return axiosClient.put(url, params);
  },
  getValueForm(params) {
    return axiosClient.get(PERSONAL_LOGTIME_URL, { params });
  },
};
export default editApi;
