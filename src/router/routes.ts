import TheMain from '@/components/Layout/TheMain.vue'

export default [
  {
    path: '/',
    name: 'home',
    component: TheMain,
  },
  {
    path: '/list',
    name: 'list',
    component: () => import('@/views/VehiclesView.vue'),
  },
]
