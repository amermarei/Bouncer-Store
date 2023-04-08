import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import { createI18n } from 'vue-i18n'
// import Navbar from './locales/Navbar.json'
import messages from "./Locales/messages"
import "bootstrap"
import "@fortawesome/fontawesome-free/css/all.min.css"
import 'bootstrap/dist/css/bootstrap.min.css';
let language = localStorage.getItem("language")
const pinia = createPinia()
const i18n = createI18n({
  allowComposition: true,
  locale: `${language}`,
  messages
  })
createApp(App).use(pinia).use(router).use(i18n).mount('#app')
