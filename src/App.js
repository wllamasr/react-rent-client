import React from 'react';
import './App.css';
import Router from './Router';
import { Layout, Menu } from 'antd';
import moment from 'moment';

const { Header, Content, Footer } = Layout;
function App() {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content">
          <Router />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Rent Platform &copy; {moment().format('YYYY')} Created by Wilmer Llamas</Footer>
    </Layout>
  );
}

export default App;
