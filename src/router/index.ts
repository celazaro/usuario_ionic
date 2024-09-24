import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

import TabsPage from '../views/TabsPage.vue'
import HomeView from '@/views/HomeView.vue';
import LoginView from '../views/LoginView.vue'
import RegistrationView from '@/views/RegistrationView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component:HomeView
  },
  {
    path: '/login',
    component:LoginView
  },
  {
    path: '/registration',
    component:RegistrationView
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path:'/tabs/',
        redirect:'/tabs/tab1'
      },
  
      {
        path: 'tab1',
        component: () => import('@/views/Tab1Page.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2Page.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3Page.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
