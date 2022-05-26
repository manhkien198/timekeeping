import axiosClient from './axiosClient';

const UsersApi = {
  getAll(params){
    const url = '/members';
    return axiosClient.get(url,{params})
  }
}
export default UsersApi;