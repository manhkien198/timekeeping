import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import './assets/scss/app.scss';
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
import Calendar from './pages/user/calendar';
import TimeKeeping from './pages/user/timeKeeping';

function App() {
  const isAdmin = useSelector(state => state.layout.isAdmin);

  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />

      <Route path="/" element={<MainLayout />}>
        {!isAdmin ? (
          <>
            <Route path="time_keeping" element={<TimeKeeping />} />
            <Route index element={<TimeKeeping />} />
            <Route path="calendar" element={<Calendar />} />
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
