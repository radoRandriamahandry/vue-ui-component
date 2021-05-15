import { createRouter, createWebHistory } from "vue-router"
import Home from "../views/Home.vue"
import LPageLoopStudio from "../views/LPageLoopStudio.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/loopstudio",
    name: "LPageLoopStudio",
    component: LPageLoopStudio,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
