import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import NotFound from '@/components/NotFound'
import SignIn from '@/components/SignIn'

Vue.use(Router)

const router = new Router({
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

router.beforeEach((to, from, next) => {
  const requiresAuth = !to.matched.some(record => record.meta.nonRequiresAuth)
  const isLoginPage = to.matched.some(record => record.meta.loginPage)
  const isAuthenticated = localStorage.getItem("auth")
  if (requiresAuth && !isAuthenticated) {
    next('/signIn')
  } else if (isLoginPage && isAuthenticated) {
    router.push('/')
  }
  next()
})

export default router
