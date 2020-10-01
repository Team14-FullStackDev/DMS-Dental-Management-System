import Vue from 'vue'
import Router from 'vue-router'
import DashboardLayout from '@/layout/DashboardLayout'
import AuthLayout from '@/layout/AuthLayout'
Vue.use(Router)

export default new Router({
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: 'overview',
      component: DashboardLayout,
      children: [
        {
          path: '/overview',
          name: 'overview',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "demo" */ './views/Overview.vue')
        },
        {
          path: '/calendar',
          name: 'calendar',
          component: () => import(/* webpackChunkName: "demo" */ './views/Calendar.vue')
        },
        {
          path: '/patient-list',
          name: 'patient list',
          component: () => import(/* webpackChunkName: "demo" */ './views/PatientList.vue')
        },
        {
          path: '/payment-info',
          name: 'payment information',
          component: () => import(/* webpackChunkName: "demo" */ './views/PaymentInfo.vue')
        },
        {
          path: '/settings',
          name: 'settings',
          component: () => import(/* webpackChunkName: "demo" */ './views/Tables.vue')
        },
        {
          path: '/patientinfo',
          name: 'patientinfo',
          component: () => import(/* webpackChunkName: "demo" */ './views/PatientList/PatientInfo.vue')
        }
      ]
    },
    {
      path: '/',
      redirect: 'login',
      component: AuthLayout,
      children: [
        {
          path: '/login',
          name: 'login',
          component: () => import(/* webpackChunkName: "demo" */ './views/Login.vue')
        },
        {
          path: '/register',
          name: 'register',
          component: () => import(/* webpackChunkName: "demo" */ './views/Register.vue')
        }
      ]
    }
  ]
})
