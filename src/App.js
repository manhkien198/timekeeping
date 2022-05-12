import { Route, Routes } from 'react-router-dom';
import './App.css';
import './assets/scss/app.scss';
import MainLayout from './layouts';
import Calendar from './pages/calendar';
import Personal from './pages/personal';
import Setting from './pages/setting';
import TimeKeeping from './pages/timeKeeping';
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="time_keeping" element={<TimeKeeping />} />
        <Route index element={<TimeKeeping />} />
        <Route path="calendar" element={<Calendar />} />
        <Route path="personal" element={<Personal />} />
        <Route path="setting" element={<Setting />} />
      </Route>
    </Routes>
  );
}

export default App;
