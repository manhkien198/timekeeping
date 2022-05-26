import { Divider } from 'antd';
import AcceptIcon from '../../components/icons/AcceptIcon';
import CalendarIcon from '../../components/icons/CalendarIcon';
import LogoutIcon from '../../components/icons/LogoutIcon';
import SendIcon from '../../components/icons/SendIcon';
import SettingIcon from '../../components/icons/SettingIcon';
import StatisticIcon from '../../components/icons/StatisticIcon';
import UserIcon from '../../components/icons/UserIcon';

export const LIST_ROUTES = [
  {
    path: '/time_keeping',

    title: 'time_keeping',
    icon: <SendIcon />,
  },
  {
    path: '/calendar',

    title: 'calendar',
    icon: <CalendarIcon />,
  },
  {
    path: '/personal',
    title: 'personal',
    icon: <UserIcon />,
  },
  {
    path: '/setting',
    title: 'setting',
    icon: <SettingIcon />,
  },
  {
    path: '/login',
    title: 'logout',
    icon: <LogoutIcon />,
  },
];
export const ADMIN_ROUTES = [
  {
    path: '/accept_request',

    title: 'accept_request',
    icon: <AcceptIcon />,
    childs: [],
  },
  {
    path: '/statistic',

    title: 'statistic',
    icon: <StatisticIcon />,
    childs: [
      {
        path: '/statistic/timekeeping',
        title: 'timekeeping_table',
        icon: '',
        childs: [],
      },
      {
        path: '/statistic/general',
        title: 'general_table',
        icon: '',
        childs: [],
      },
      {
        path: '/statistic/personal',
        title: 'personal_statistic',
        icon: '',
        childs: [],
      },
    ],
  },
  {
    path: '',
    title: '',
    icon: <Divider />,
    childs: [],
    className: 'divider',
  },
  {
    path: '/personal',
    title: 'admin',
    icon: <UserIcon />,
    childs: [],
  },
  {
    path: '/setting',
    title: 'setting',
    icon: <SettingIcon />,
    child: [],
  },
  {
    path: '/login',
    title: 'logout',
    icon: <LogoutIcon />,
    child: [],
  },
];
