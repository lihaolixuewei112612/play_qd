import Vue from 'vue'
import Router from 'vue-router'
import AppIndex from '@/components/home/AppIndex'
import Login from '@/components/Login'
import Home from '../components/Home'
import LibraryIndex from '../components/library/LibraryIndex'
import ArticleDetails from '../components/jotter/ArticleDetails'
import XyzxIndex from '../components/xyzx/XyzxIndex'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
      // home页面并不需要被访问
      redirect: '/index',
      children: [
        {
          path: '/index',
          name: 'AppIndex',
          component: AppIndex,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/library',
          name: 'Library',
          component: LibraryIndex,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/jotter',
          name: 'Jotter',
          component: ArticleDetails,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/xyzx',
          name: 'Xyzx',
          component: XyzxIndex,
          meta: {
            requireAuth: true
          }
        }
      ]
    },

    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]

})
