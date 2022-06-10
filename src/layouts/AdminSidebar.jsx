import { Menu } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import AcceptIcon from '../components/icons/AcceptIcon';
import CalendarIcon from '../components/icons/CalendarIcon';
import ChartIcon from '../components/icons/ChartIcon';
import StatisticIcon from '../components/icons/StatisticIcon';
import SubUserIcon from '../components/icons/SubUserIcon';

const { SubMenu } = Menu;

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
        <Menu.Item key="/statistic/timekeeping" icon={<CalendarIcon />}>
          <Link to="/statistic/timekeeping">
            {t(`sidebar.timekeeping_table`)}
          </Link>
        </Menu.Item>
        <Menu.Item key="/statistic/general" icon={<ChartIcon />}>
          <Link to="/statistic/general">{t(`sidebar.general_table`)}</Link>
        </Menu.Item>
        <Menu.Item key="/statistic/personal" icon={<SubUserIcon />}>
          <Link to="/statistic/personal">
            {t(`sidebar.personal_statistic`)}
          </Link>
        </Menu.Item>
      </SubMenu>
    </>
  );
}

export default AdminSidebar;
