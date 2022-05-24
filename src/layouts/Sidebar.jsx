import { Menu } from 'antd';
import Sider from 'antd/lib/layout/Sider';
import SubMenu from 'antd/lib/menu/SubMenu';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { clearCookie } from '../api/Cookie';
import {
  DEFAULT_SELECTED_ADMIN,
  DEFAULT_SELECTED_MENU_SIDEBAR,
  LOGOUT,
} from '../constants/common';

import { ADMIN_ROUTES, LIST_ROUTES } from '../constants/common/routes';
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
        {!isAdmin
          ? LIST_ROUTES.map(x => (
              <Menu.Item key={x.path} icon={x.icon}>
                <Link to={x.path}>{t(`sidebar.${x.title}`)}</Link>
              </Menu.Item>
            ))
          : ADMIN_ROUTES.map(x => {
              return x.childs?.length ? (
                <SubMenu
                  key={x.path}
                  icon={x.icon}
                  title={t(`sidebar.${x.title}`)}
                >
                  {x.childs.map(y => (
                    <Menu.Item key={y.path} icon={y.icon}>
                      <Link to={y.path}>{t(`sidebar.${y.title}`)}</Link>
                    </Menu.Item>
                  ))}
                </SubMenu>
              ) : (
                <Menu.Item
                  key={x.path}
                  icon={x.icon}
                  className={x.className ? x.className : ''}
                >
                  {x.title === LOGOUT ? (
                    <Link to={x.path} onClick={() => clearCookie()}>
                      {t(`sidebar.${x.title}`)}
                    </Link>
                  ) : (
                    <Link to={x.path}>{t(`sidebar.${x.title}`)}</Link>
                  )}
                </Menu.Item>
              );
            })}
      </Menu>
    </Sider>
  );
}

export default Sidebar;
