import AcceptIcon from '../../layouts/icons/AcceptIcon';
import CalendarIcon from '../../layouts/icons/CalendarIcon';
import LogoutIcon from '../../layouts/icons/LogoutIcon';
import SendIcon from '../../layouts/icons/SendIcon';
import SettingIcon from '../../layouts/icons/SettingIcon';
import StatisticIcon from '../../layouts/icons/StatisticIcon';
import UserIcon from '../../layouts/icons/UserIcon';

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
    path: '/logout',
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
    path: '/personal',
    title: 'personal',
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
    path: '/logout',
    title: 'logout',
    icon: <LogoutIcon />,
    child: [],
  },
];
