import { createRouter, createWebHistory } from "vue-router"
import Home from "../views/Home.vue"
import LPageLoopStudio from "../views/LPageLoopStudio.vue"
import LPageBlogr from "../views/LPageBlogr.vue"

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
  {
    path: "/blogr",
    name: "LPageBlogr",
    component: LPageBlogr,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
