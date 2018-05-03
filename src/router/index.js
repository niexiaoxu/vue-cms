import Vue from 'vue'
import Router from 'vue-router'
// import pages from '@/pages'
import Login from '@/pages/Login'
import Home from '@/pages/Home'
import Test from '@/pages/Test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    }
  ]
})
//
// const routes = []
//
// Object.keys(pages).forEach((component) => {
//   routes.push({
//     path: `/${pages[component].name}`,
//     name: component,
//     component: pages[component]
//   })
// })
//
// export default new Router({
//   routes
// })
