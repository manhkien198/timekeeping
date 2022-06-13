import { Divider, Menu } from 'antd';
import Sider from 'antd/lib/layout/Sider';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import AcceptIcon from '../components/icons/AcceptIcon';
import CalendarIcon from '../components/icons/CalendarIcon';
import ChartIcon from '../components/icons/ChartIcon';
import LogoutIcon from '../components/icons/LogoutIcon';
import SendIcon from '../components/icons/SendIcon';
import SettingIcon from '../components/icons/SettingIcon';
import StatisticIcon from '../components/icons/StatisticIcon';
import SubUserIcon from '../components/icons/SubUserIcon';
import UserIcon from '../components/icons/UserIcon';
import {
  DEFAULT_SELECTED_ADMIN,
  DEFAULT_SELECTED_MENU_SIDEBAR,
} from '../constants/common';

function Sidebar({ collapsed }) {
  const { t } = useTranslation();
  const location = useLocation();
  const [selectedKey, setSelectedKey] = useState('');
  console.log('selectedKey :', selectedKey);
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
      <div className={!collapsed ? 'logo' : 'logo-none'}>
        <p>CO.SY</p>
      </div>
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
        {!isAdmin ? (
          <>
            <Menu.Item key="/time_keeping" icon={<CalendarIcon />}>
              <Link to="/time_keeping">{t(`sidebar.time_keeping`)}</Link>
            </Menu.Item>
            <Menu.Item key="/request" icon={<SendIcon />}>
              <Link to="/request">{t(`sidebar.request`)}</Link>
            </Menu.Item>
          </>
        ) : (
          <>
            <Menu.Item
              className="removePadding"
              key="/accept_request"
              icon={<AcceptIcon />}
            >
              <Link to="/accept_request">{t(`sidebar.accept_request`)}</Link>
            </Menu.Item>

            <Menu.SubMenu
              key="/statistic"
              icon={<StatisticIcon />}
              title={t(`sidebar.statistic`)}
              className={
                collapsed ? 'statistic removePadding' : 'removePadding'
              }
            >
              <Menu.Item key="/statistic/timekeeping" icon={<CalendarIcon />}>
                <Link to="/statistic/timekeeping">
                  {t(`sidebar.timekeeping_table`)}
                </Link>
              </Menu.Item>
              <Menu.Item key="/statistic/general" icon={<ChartIcon />}>
                <Link to="/statistic/general">
                  {t(`sidebar.general_table`)}
                </Link>
              </Menu.Item>
              <Menu.Item key="/statistic/personal" icon={<SubUserIcon />}>
                <Link to="/statistic/personal">
                  {t(`sidebar.personal_statistic`)}
                </Link>
              </Menu.Item>
            </Menu.SubMenu>
          </>
        )}

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
