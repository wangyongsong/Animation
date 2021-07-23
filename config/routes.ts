const routes = [
  { path: '/', component: '@/pages/home' },
  {
    name: '动画',
    path: '/Animation',
    icon: 'CodepenCircleOutlined',
    routes: [
      {
        name: '鸿蒙系统-开场动画',
        path: '/Animation/HarmonyOS',
        component: '@/pages/Animation/HarmonyOS',
      },
    ],
  },
];

export default routes;
