import { message } from 'antd';
import axios from 'axios';
import qs from 'query-string';
import { clearCookie, setToken } from './Cookie';
import i18n from '../translation/i18n';

export const refreshToken = async refresh_token => {
  await axios
    .post(
      process.env.REACT_APP_LOGIN,
      qs.stringify({
        grant_type: 'refresh_token',
        refresh_token: refresh_token,
        client_id: process.env.REACT_APP_AUTH_PLATFORM,
      }),
      { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } },
    )
    .then(response => {
      setToken(response.data.access_token, 'Access_Token');
      setToken(response.data.refresh_token, 'Refresh_Token');
      setToken(response.data.expires_in, 'expires_in');
    })
    .catch(error => {
      message.error(i18n.t('login.timeout'));
      clearCookie();
      window.location.href = '/login';
    });
};
