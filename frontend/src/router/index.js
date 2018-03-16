import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import NotFound from '@/components/NotFound'
import SignIn from '@/components/SignIn'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/signIn',
      name: 'signIn',
      component: SignIn,
      meta: {loginPage: true, nonRequiresAuth: true},
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})
