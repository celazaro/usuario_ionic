import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

import TabsPage from '../views/TabsPage.vue';
import HomeView from '@/views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegistrationView from '@/views/RegistrationView.vue'

import { Storage } from '@ionic/storage'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component:HomeView
  },
  {
    path: '/login',
    component:LoginView,
    beforeEnter: async (to, from, next) => {
      const res = await sesionActiva()
      if(res) {
        next( '/tabs/tab1' )
      }else{
        next( )
      }
    }
  },
  {
    path: '/registration',
    component:RegistrationView,
    beforeEnter: async (to, from, next) => {
      const res = await sesionActiva()
      if(res) {
        next( '/tabs/tab1' )
      }else{
        next( )
      }
    }
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
        component: () => import('@/views/Tab1Page.vue'),
        beforeEnter: async (to, from, next) => {
          const res = await sesionActiva()
          if(res) {
            next()
          }else{
            next('/login')
          }
        }
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2Page.vue'),
        beforeEnter: async (to, from, next) => {
          const res = await sesionActiva()
          if(res) {
            next()
          }else{
            next('/login')
          }
        }
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3Page.vue'),
        beforeEnter: async (to, from, next) => {
          const res = await sesionActiva()
          if(res) {
            next()
          }else{
            next('/login')
          }
        }
      }
    ]
  }
]

async function sesionActiva() {

  const storage = new Storage
  await storage.create()


  const usuario =  await storage.get('username')
  console.log(usuario)

  return (usuario)?true:false
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
