import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import signIt from './views/step2.vue'
import upload from './views/step3.vue'
import success from './views/success.vue'
import uhoh from './views/unoh.vue'
import waiverStatus from './views/waiverstatus.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/uhoh'
    },
    {
      path: '/step1/:id',
      name: 'home',
      component: Home
    },
    {
      path: '/waiverstatus/:id',
      name: 'waiver status',
      component: waiverStatus
    },
    {
      path: '/p/:id',
      name: 'home small',
      component: Home
    },
    {
      path: '/step2/:id',
      name: 'sign it',
      component: signIt
    },
    {
      path: '/step3/:id',
      name: 'upload',
      component: upload
    },
    {
      path: '/success/:id',
      name: 'success',
      component: success
    },
    {
      path: '/uhoh',
      name: 'uhoh',
      component: uhoh
    }
  ]
})
