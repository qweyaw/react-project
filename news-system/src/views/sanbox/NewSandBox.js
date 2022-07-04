import { Layout } from "antd";
import React from "react";
import { Outlet } from "react-router-dom"
import "./NewSandBox.css";
import SideMenu from "../../components/sandbox/SideMenu";
import TopHeader from "../../components/sandbox/TopHeader";
const { Content } = Layout;

export default function NewSandBox() {
  return (
    <Layout className='fl-row w-100vw h-100vh'>
      <SideMenu></SideMenu>
      <Layout>
        <TopHeader></TopHeader>
        <Content
          style={{
            height: "100%",
            padding: 24
          }}
        >
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              height: "100%",
              minHeight: 360,
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}
