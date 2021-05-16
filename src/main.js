import { createApp } from "vue"
import App from "./App.vue"
import router from "./router/index"
import { library } from "@fortawesome/fontawesome-svg-core"
import {
  faFacebookSquare,
  faTwitter,
  faPinterest,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

import "./index.css"

library.add(faFacebookSquare, faTwitter, faPinterest, faInstagram)

const app = createApp(App)
app.component("FontAwesomeIcon", FontAwesomeIcon)
app.use(router)

app.mount("#app")
