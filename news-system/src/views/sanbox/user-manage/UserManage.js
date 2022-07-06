import React from "react";
import './UserManage.css'
import * as datav from '@jiaminghi/data-view-react'
const { BorderBox1, Decoration9, PercentPond } = datav

export default function UserManage() {
  const preConfig = {value: 66}
  return <div style={{width: "100%", height: "100%"}}>
    <BorderBox1>
      <Decoration9 style={{width: '150px', height: '150px'}}>66%</Decoration9>
      <PercentPond config={preConfig} style={{width: '200px', height: '100px'}} />
    </BorderBox1>
  </div>
}
