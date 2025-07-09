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
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/LoginView.vue'),
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('@/views/SignUp.vue'),
  },
]
