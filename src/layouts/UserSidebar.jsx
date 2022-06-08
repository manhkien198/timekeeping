import { Menu } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import SendIcon from '../components/icons/SendIcon';

function UserSidebar(props) {
  const { t } = useTranslation();
  return (
    <>
      <Menu.Item key="/time_keeping" icon={<SendIcon />}>
        <Link to="/time_keeping">{t(`sidebar.time_keeping`)}</Link>
      </Menu.Item>
      <Menu.Item key="/request" icon={<SendIcon />}>
        <Link to="/request">{t(`sidebar.request`)}</Link>
      </Menu.Item>
    </>
  );
}

export default UserSidebar;
