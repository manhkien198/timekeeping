import { TIME_KEEPING_ADMIN, TOTAL_TIME_KEEING } from '../../constants/common';
import axiosClient from '../axiosClient';
const TimeKeepingApi = {
  getAll(params) {
    return axiosClient.get(TIME_KEEPING_ADMIN, { params });
  },
  post(data) {
    return axiosClient.post(TIME_KEEPING_ADMIN, data);
  },
  getById(id) {
    const url = `${TIME_KEEPING_ADMIN}/${id}`;
    return axiosClient.get(url);
  },
  putRequest(id, data) {
    const url = `${TIME_KEEPING_ADMIN}/${id}`;
    return axiosClient.put(url, data);
  },
  deletePosition(id) {
    const url = `${TIME_KEEPING_ADMIN}/${id}`;
    return axiosClient.delete(url);
  },
  getTotalWorking(params){
    return axiosClient.get(TOTAL_TIME_KEEING, {params});
  }
};
export default TimeKeepingApi;
