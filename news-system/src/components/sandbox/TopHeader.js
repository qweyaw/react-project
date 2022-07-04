import React, { useState } from "react";
import { Layout, Dropdown, Avatar, Menu, Space } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined } from "@ant-design/icons";
const { Header } = Layout;
const menu = (
  <Menu
    items={[
      {
        key: '1',
        label: (
          <span>超级管理员</span>
        ),
      },
      {
        key: '2',
        danger: true,
        label: (
         <span>退出</span>
        ),
      },
    ]}
  />
);
export default function TopHeader() {
  const [collapsed, setCollapsed] = useState(false);
  function changeCollapsed () {
    setCollapsed(!collapsed)
  }
  return (
    <Header
      className="site-layout-background"
      style={{
        padding: '0 16px',
        color: "white"
      }}
    >
      {collapsed ? <MenuUnfoldOutlined onClick={changeCollapsed}/> : <MenuFoldOutlined onClick={changeCollapsed}/>}

      <div className='fr'>
        <Space size={22}>
          <span>欢迎回来</span>
          <Dropdown className='point' overlay={menu}>
            <Avatar icon={<UserOutlined />} />
          </Dropdown>
        </Space>
      </div>
    </Header>
  );
}
