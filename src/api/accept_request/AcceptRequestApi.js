import { ACCEPT_REQUEST_ADMIN } from "../../constants/common";
import axiosClient from "../axiosClient";
const AcceptRequestApi = {
  getAll(params) {
    return axiosClient.get(ACCEPT_REQUEST_ADMIN, { params });
  },
  post(data) {
    return axiosClient.post(ACCEPT_REQUEST_ADMIN, data);
  },
  getById(id) {
    const url = `${ACCEPT_REQUEST_ADMIN}/${id}`;
    return axiosClient.get(url);
  },
  putRequest(id,data) {
    const url = `${ACCEPT_REQUEST_ADMIN}/${id}`;
    return axiosClient.put(url, data);
  },
  deletePosition(id) {
    const url = `${ACCEPT_REQUEST_ADMIN}/${id}`;
    return axiosClient.delete(url);
  },
};
export default AcceptRequestApi;
