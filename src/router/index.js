import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },{
    path: '/category',
    name: 'category',
    component: () => import( '../views/Category.vue')

  },{
    path: '/profile',
    name: 'profile',
    component: () => import( '../views/Resturantprofile.vue')
  },{
    path: '/checkout',
    name: 'checkout',
    component: () => import( '../views/Checkout.vue')
  },
  {
    path: '/account',
    name: 'account',
    component: () => import( '../views/Account.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
