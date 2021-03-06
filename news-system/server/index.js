const express = require("express")

const app = express();

app.get('/api/getMenuList', (req, res) => {
  const menuList = [
    { label: '首页', key: '/home' },
    {
      label: '用户管理',
      key: '/user-manager',
      children: [{ label: '用户列表', key: '/user-manager/list' }],
    },
    {
      label: '权限管理',
      key: '/right-manager',
      children: [
        { label: '角色列表', key: '/right-manager/role/list' },
        { label: '权限列表', key: '/right-manager/right/list' }
      ],
    },
    {
      label: '新闻管理',
      key: '/22',
      children: [
        { label: '用户列表', key: '/3' }
      ],
    },
    {
      label: '用户管理',
      key: '/33',
      children: [{ label: '用户列表', key: '/1',   }],
    },
    {
      label: '用户管理',
      key: '/11',
      children: [{ label: '用户列表', key: '/2',   }],
    },
  ]
  res.send(menuList)
})


app.listen(8888, () => {
  console.log('serve start at 8888 port')
})
