import { Menu } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import AcceptIcon from '../components/icons/AcceptIcon';
import StatisticIcon from '../components/icons/StatisticIcon';

function AdminSidebar({ collapsed }) {
  const { t } = useTranslation();
  return (
    <>
      <Menu.Item key="/accept_request" icon={<AcceptIcon />}>
        <Link to="/accept_request">{t(`sidebar.accept_request`)}</Link>
      </Menu.Item>
      <SubMenu
        key="/statistic"
        icon={<StatisticIcon />}
        title={t(`sidebar.statistic`)}
        className={collapsed ? 'statistic' : ''}
      >
        <Menu.Item key="/statistic/timekeeping">
          <Link to="/statistic/timekeeping">
            {t(`sidebar.timekeeping_table`)}
          </Link>
        </Menu.Item>
        <Menu.Item key="/statistic/general">
          <Link to="/statistic/general">{t(`sidebar.general_table`)}</Link>
        </Menu.Item>
        <Menu.Item key="/statistic/personal">
          <Link to="/statistic/personal">
            {t(`sidebar.personal_statistic`)}
          </Link>
        </Menu.Item>
      </SubMenu>
    </>
  );
}

export default AdminSidebar;
