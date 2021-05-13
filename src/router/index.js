import { createRouter, createWebHistory } from "vue-router"
import Home from "../views/Home.vue"
import LandingPages from "../views/LandingPages.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/landingpages",
    name: "LandingPages",
    component: LandingPages,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
