import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/About.vue")
  },
  {
    path: "/category",
    name: "category",
    component: () => import("../views/Restaurants/Category.vue")
  },
  {
    path: "/profile/:slug",
    name: "profile",
    component: () => import("../views/RestaurantProfile/Resturantprofile.vue")
  },
  {
    path: "/checkout",
    name: "checkout",
    component: () => import("../views/Checkout.vue")
  },
  {
    path: "/account",
    name: "account",
    component: () => import("../views/Account.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
