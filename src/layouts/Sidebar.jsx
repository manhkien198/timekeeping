import { Menu } from 'antd';
import Sider from 'antd/lib/layout/Sider';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { DEFAULT_SELECTED_MENU_SIDEBAR } from '../constants/common';

import { LIST_ROUTES } from '../constants/common/routes';
function Sidebar({ collapsed }) {
  const { t } = useTranslation();
  const location = useLocation();
  const [selectedKey, setSelectedKey] = useState('');
  useEffect(() => {
    if (location.pathname.startsWith('/time_keeping')) {
      setSelectedKey('/time_keeping');
    } else if (location.pathname.startsWith('/calendar')) {
      setSelectedKey(`/calendar`);
    } else if (location.pathname.startsWith('/personal')) {
      setSelectedKey(`/personal`);
    } else if (location.pathname.startsWith('/setting')) {
      setSelectedKey(`/setting`);
    } else {
      setSelectedKey(location.pathname);
    }
  }, [location.pathname]);
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <Menu
        theme="light"
        mode="inline"
        selectedKeys={[
          location.pathname.length > 1
            ? selectedKey
            : DEFAULT_SELECTED_MENU_SIDEBAR,
        ]}
      >
        {LIST_ROUTES.map(x => (
          <Menu.Item key={x.path} icon={x.icon}>
            <Link to={x.path}>{t(`sidebar.${x.title}`)}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  );
}

export default Sidebar;
