import { createApp } from "vue"
import App from "./App.vue"
import { createPinia } from "pinia"
import router from "./router"

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)
app.mount("#app")

// ← Esto DEBE ir después de montar pinia
import { useUserStore } from "@/stores/user"
const userStore = useUserStore()

// Si hay usuario persistido → carga perfil
if (userStore.user) {
  userStore.loadProfile()
}
