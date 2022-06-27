import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "../views/login/login";
import NewSandBox from "../views/sanbox/NewSandBox";
import Home from "../views/sanbox/home/Home";
import UserList from "../views/sanbox/user-manage/UserManage";
import RoleList from "../views/sanbox/right-manage/RoleManage";
import RightList from "../views/sanbox/right-manage/RightManage";
import NoPermission from "../views/nopermission/NoPermission";
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<Navigate to="/home" />}></Route>
        <Route path="/" element={<NewSandBox />}>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/user-manage/list" element={<UserList />}></Route>
          <Route path="/right-manage/role/list" element={<RoleList />}></Route>
          <Route
            path="/right-manager/right/list"
            element={<RightList />}
          ></Route>
          <Route path="*" element={<NoPermission />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
