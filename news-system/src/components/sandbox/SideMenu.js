import { Menu } from "antd";
import Sider from "antd/lib/layout/Sider";
import React, {useEffect, useState} from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom"
import {BarsOutlined} from "@ant-design/icons";

export default function SideMenu() {
  const [items, setItems] = useState([])
  const navigate = useNavigate()
  const location = useLocation()
  useEffect(() => {
    getMenuItem()
  }, [])
  function getMenuItem () {
    axios.get('/posts').then(res => {
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
      <Sider trigger={null} collapsible collapsed={false} collapsedWidth={60}>
        <div className="col-w ta-c fz-24 lh-64 h-64">news system</div>
          <Menu items={items} onClick={menuChange} theme="dark" defaultOpenKeys={[defaultOpenMenu]} defaultSelectedKeys={[pathname]} mode="inline">
          </Menu>
      </Sider>
  );
}
