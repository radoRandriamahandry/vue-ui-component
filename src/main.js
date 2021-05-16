import { createApp } from "vue"
import App from "./App.vue"
import router from "./router/index"
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import {
  faFacebookSquare,
  faTwitter,
  faPinterest,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"

import "./index.css"

library.add(faFacebookSquare, faTwitter, faPinterest, faInstagram, faBars)

const app = createApp(App)
app.component("FontAwesomeIcon", FontAwesomeIcon)
app.use(router)

app.mount("#app")
