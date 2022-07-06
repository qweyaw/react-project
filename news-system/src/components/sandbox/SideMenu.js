import { Menu } from "antd";
import Sider from "antd/lib/layout/Sider";
import React, {useEffect, useState} from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom"
import {BarsOutlined} from "@ant-design/icons";
import { getMenuList } from "../../constans";
import store from "../../store/store";

export default function SideMenu() {
  const {collapsedReducer} = store.getState()
  console.log(store.getState())
  const [items, setItems] = useState([{ label: '首页', key: '/home', icon: <BarsOutlined /> },
    {
      label: '用户管理',
      key: '/user-manager',
      icon: <BarsOutlined />,
      children: [{ label: '用户列表', key: '/user-manage/list' }],
    },])
  const navigate = useNavigate()
  const location = useLocation()
  useEffect(() => {
    // getMenuItem()
  }, [])
  function getMenuItem () {
    axios.get(getMenuList).then(res => {
      function menuAddIcon (data) {
        data.forEach(item => {
          if (item.children) {
            menuAddIcon(item.children)
          }
          item.icon = <BarsOutlined />
        })
      }
      menuAddIcon(res.data)
      setItems( res.data )
    })
  }
  function menuChange (e) {
    console.log(e)
    navigate(e.key)
  }
  const pathname = location.pathname
  const defaultOpenMenu = '/' +pathname.split('/')[1]
  return (
      <Sider trigger={null} collapsible collapsed={collapsedReducer} collapsedWidth={60}>
        <div className="col-w ta-c fz-24 lh-64 h-64">news system</div>
          <Menu items={items} onClick={menuChange} theme="dark" defaultOpenKeys={[defaultOpenMenu]} defaultSelectedKeys={[pathname]} mode="inline">
          </Menu>
      </Sider>
  );
}
