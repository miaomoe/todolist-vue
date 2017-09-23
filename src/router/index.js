import Vue from 'vue'
import Router from 'vue-router'
import All from "../components/all"
import Active from "../components/active"
import Complete from "../components/complete"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/all',
      component: All
    },
    {
      path: '/active',
      component: Active
    },
    {
      path: '/complete',
      component: Complete
    },
    {
      path: '/',
      redirect: "/all"
    }
  ]
})
