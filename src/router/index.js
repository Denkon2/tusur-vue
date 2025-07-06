import { createRouter, createWebHistory } from 'vue-router'
import home from "@/pages/index";

const routes = [
  {
    path: "/",
    name: "home",
    component: home
  },
  {
      path: "/contacts",
      name: "contacts",
      component: () => import("@/pages/contacts") //dynamic loading
  },
  {
      path: "/rules",
      name: "rules",
      component: () => import("@/pages/rules") //dynamic loading
  },
  {
    path: "/:id",
    name: "card",
    component: () => import("@/components/home/HomeCardDetail")
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
