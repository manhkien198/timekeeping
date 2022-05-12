import CalendarIcon from '../../layouts/icons/CalendarIcon';
import LogoutIcon from '../../layouts/icons/LogoutIcon';
import SendIcon from '../../layouts/icons/SendIcon';
import SettingIcon from '../../layouts/icons/SettingIcon';
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
