import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
import Hola from 'components/Hola'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/hola',
      name: 'Hola',
      component: Hola
    }
  ],
  mode: 'history'
})
