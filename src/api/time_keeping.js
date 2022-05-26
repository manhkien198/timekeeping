import axiosClient from "./axiosClient"
import {TIME_KEEPING} from '../constants/common/index'
 const time_keeping = {
    getAll(params) {
        return axiosClient.get(TIME_KEEPING, { params });
      },
    
      post(data) {
        return axiosClient.post(TIME_KEEPING, data);
      },
      getById(id) {
        const url = `${TIME_KEEPING}/${id}`;
        return axiosClient.get(url);
      },
    
}
export default time_keeping
