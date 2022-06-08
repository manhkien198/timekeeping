import Cookies from 'js-cookie';
import moment from 'moment';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { getToken } from './api/Cookie';
import { refreshToken } from './api/refreshToken';
import './App.css';
import './assets/scss/app.scss';
import { REFRESH_TOKEN_TIME_UNIT } from './constants/common';
import MainLayout from './layouts';
import AcceptRequest from './pages/admin/accept_request';
import GeneralStatistic from './pages/admin/statistic/general_statistic';
import PersonalStatistic from './pages/admin/statistic/personal_statistic';
import Edit from './pages/admin/statistic/personal_statistic/Edit';
import TimeKeepingTable from './pages/admin/statistic/timekeeping_table';
import ForgotPassword from './pages/auth/ForgotPassword';
import Login from './pages/auth/Login';
import Personal from './pages/personal';
import Setting from './pages/setting';
import Request from './pages/user/calendar';
import TimeKeeping from './pages/user/timeKeeping';

function App() {
  const isAdmin = useSelector(state => state.layout.isAdmin);
  const navi = useNavigate();
  const sendRequest = async () => {
    const refresh_token = Cookies.get('Refresh_Token');
    const expires_in = getToken('expires_in');
    if (refresh_token) {
      try {
        await refreshToken(refresh_token);

        setTimeout(async () => {
          await sendRequest();
          console.log('refresh token at: ', moment().format('h:mm:ss'));
        }, Number(expires_in) * REFRESH_TOKEN_TIME_UNIT);
      } catch {
        navi('/login');
      }
    } else {
      navi('/login');
    }
  };

  useEffect(() => {
    sendRequest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />

      <Route path="/" element={<MainLayout />}>
        {!isAdmin ? (
          <>
            <Route path="time_keeping" element={<TimeKeeping />} />
            <Route index element={<TimeKeeping />} />
            <Route path="request" element={<Request />} />
          </>
        ) : (
          <>
            <Route path="accept_request" element={<AcceptRequest />} />
            <Route
              path="statistic/timekeeping"
              element={<TimeKeepingTable />}
            />
            <Route path="statistic/general" element={<GeneralStatistic />} />
            <Route path="statistic/personal" element={<PersonalStatistic />} />
            <Route path="/statistic/personal/edit" element={<Edit />} />
          </>
        )}
        <Route path="personal" element={<Personal />} />
        <Route path="setting" element={<Setting />} />
      </Route>
    </Routes>
  );
}

export default App;
