import { createRouter, createWebHistory } from "vue-router";
import IsAuthenticated from "@/helpers/AuthUser";

import HomeViewVue from "@/views/HomeView";
import CreationJoinServerView from "@/views/CreationJoinServerView";
import DiffusionView from '@/views/DiffusionView'

const routes = [
  {
    path: "/",
    name: "Home page",
    component: HomeViewVue,
    meta: {
      requiresAuth: false,
    },
  },//home page
  {
    path: "/creation-join",
    name: "Creation and join page",
    component: CreationJoinServerView,
    meta: {
      requiresAuth: true,
    },
  },//creation-join
  {
    path:'/diffusion/:id',
    name:'Diffusion page',
    component:DiffusionView,
    meta:{
      requiresAuth:true
    }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async(to, from, next) => {
  if (to.matched.some((route) => route.meta.requiresAuth)) {
    if (IsAuthenticated()) {
      next();
    } else {
      next("/");
    }
  }
  next();
});

export default router;
