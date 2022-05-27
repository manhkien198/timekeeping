import axiosClient from "./axiosClient"
import {CONFIRM_LATE} from '../constants/common/index'
 const confirmLate = {
    getAll(params) {
        return axiosClient.get(CONFIRM_LATE, { params });
      },
    
      post(data) {
        return axiosClient.post(CONFIRM_LATE, data);
      },
      getById(id) {
        const url = `${CONFIRM_LATE}/${id}`;
        return axiosClient.get(url);
      },
    
}
export default confirmLate
