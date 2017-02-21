import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
import Doremi from 'components/Doremi'

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
      name: 'Doremi',
      component: Doremi
    }
  ],
  mode: 'history'
})
