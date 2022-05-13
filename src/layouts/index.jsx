import { MenuOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import HeaderPage from './Header';
import Sidebar from './Sidebar';

function MainLayout(props) {
  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => {
    setCollapsed(!collapsed);
  };
  const { Header, Content } = Layout;
  return (
    <Layout>
      <HeaderPage />
      <Content>
        <Layout className="main-layout">
          <Sidebar collapsed={collapsed} />
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }}>
              {React.createElement(MenuOutlined, {
                className: 'trigger',
                onClick: toggle,
              })}
            </Header>
            <Content
              className="site-layout-background"
              style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
              }}
            >
              <Outlet />
            </Content>
          </Layout>
        </Layout>
      </Content>
    </Layout>
  );
}

export default MainLayout;
