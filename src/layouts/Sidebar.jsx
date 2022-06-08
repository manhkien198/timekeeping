import { Divider, Menu } from 'antd';
import Sider from 'antd/lib/layout/Sider';
import SubMenu from 'antd/lib/menu/SubMenu';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { clearCookie } from '../api/Cookie';
import LogoutIcon from '../components/icons/LogoutIcon';
import SettingIcon from '../components/icons/SettingIcon';
import UserIcon from '../components/icons/UserIcon';
import {
  DEFAULT_SELECTED_ADMIN,
  DEFAULT_SELECTED_MENU_SIDEBAR,
  LOGOUT,
} from '../constants/common';

import { ADMIN_ROUTES, LIST_ROUTES } from '../constants/common/routes';
import AdminSidebar from './AdminSidebar';
import UserSidebar from './UserSidebar';
function Sidebar({ collapsed }) {
  const { t } = useTranslation();
  const location = useLocation();
  const [selectedKey, setSelectedKey] = useState('');
  const isAdmin = useSelector(state => state.layout.isAdmin);
  useEffect(() => {
    if (location.pathname.startsWith('/time_keeping')) {
      setSelectedKey('/time_keeping');
    } else if (location.pathname.startsWith('/calendar')) {
      setSelectedKey(`/calendar`);
    } else if (location.pathname.startsWith('/personal')) {
      setSelectedKey(`/personal`);
    } else if (location.pathname.startsWith('/setting')) {
      setSelectedKey(`/setting`);
    } else if (location.pathname.startsWith('/accept_request')) {
      setSelectedKey(`/accept_request`);
    } else if (location.pathname.startsWith('/statistic/timekeeping')) {
      setSelectedKey(`/statistic/timekeeping`);
    } else if (location.pathname.startsWith('/statistic/general')) {
      setSelectedKey(`/statistic/general`);
    } else if (location.pathname.startsWith('/statistic/personal')) {
      setSelectedKey(`/statistic/personal`);
    } else {
      setSelectedKey(location.pathname);
    }
  }, [location.pathname]);

  return (
    <Sider trigger={null} collapsible collapsed={collapsed} width={270}>
      <Menu
        theme="light"
        mode="inline"
        selectedKeys={[
          !isAdmin
            ? location.pathname.length > 1
              ? selectedKey
              : DEFAULT_SELECTED_MENU_SIDEBAR
            : location.pathname.length > 1
            ? selectedKey
            : DEFAULT_SELECTED_ADMIN,
        ]}
      >
        <div>
          {!isAdmin ? <UserSidebar /> : <AdminSidebar collapsed={collapsed} />}
        </div>
        <div className="general__item">
          {!collapsed && <Divider />}
          <Menu.Item key="/personal" icon={<UserIcon />} className="menu__item">
            <Link to="/personal">
              {!collapsed
                ? isAdmin
                  ? t(`sidebar.admin`)
                  : t(`sidebar.personal`)
                : ''}
            </Link>
          </Menu.Item>
          <Menu.Item
            key="/setting"
            icon={<SettingIcon />}
            className="menu__item"
          >
            <Link to="/setting">{collapsed ? '' : t(`sidebar.setting`)}</Link>
          </Menu.Item>
          <Menu.Item key="/login" icon={<LogoutIcon />} className="menu__item">
            <Link to="/login">{collapsed ? '' : t(`sidebar.logout`)}</Link>
          </Menu.Item>
        </div>
      </Menu>
    </Sider>
  );
}

export default Sidebar;
