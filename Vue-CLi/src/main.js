import './css/_site.scss';
import Vue from 'vue'
import Vuex from 'vuex';
import VueRouter from 'vue-router';

Vue.use(Vuex)
Vue.use(VueRouter)


const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [{
      path: '/',
      component: require('./views/Hello.vue'),
      name: 'root'
    },
    {
      path: '/a',
      component: resolve => require(['./views/PageA.vue'], resolve),
      children: [{
        path: 'b',
        component: require('./views/PageB.vue'),
        name: 'a.b',
      }, {
        path: 'c',
        component: require('./views/PageC.vue'),
        name: 'a.c',
        beforeRouteEnter(route, from, next) {
          if (window.confirm('Продолжить?')) {
            next()
          } else {
            next('/')
          }
        }
      }]
    },
    {
      path: '/article/:id(\\d+)',
      component: require('./views/PageD.vue'),
      name: 'post'
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

new Vue({
  el: '#app',
  router,
  render: h => h(require('./App.vue'))
})