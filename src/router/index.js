import { createRouter, createWebHistory } from "vue-router";
import { useUserStore } from "@/stores/user";

// Páginas
import Login from "@/pages/Login.vue";
import Resumen from "@/pages/Resumen.vue";
import Perfil from "@/pages/Perfil.vue";

const routes = [
  { path: "/", redirect: "/resumen" },
  { path: "/login", name: "login", component: Login },
  {
    path: "/resumen",
    name: "resumen",
    component: Resumen,
    meta: { requiresAuth: true },
  },
  {
    path: "/perfil",
    name: "perfil",
    component: Perfil,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// ==============================
// 🔒 Protección de rutas
// ==============================
router.beforeEach((to) => {
  const userStore = useUserStore();

  // ⛔ Si la ruta requiere login Y NO hay user → volver a login
  if (to.meta.requiresAuth && !userStore.isLogged()) {
    return "/login";
  }

  // ⛔ Si ya está logueado y va a login → mandar al dashboard
  if (to.path === "/login" && userStore.isLogged()) {
    return "/resumen";
  }

  // 👍 Permitir navegación
  return true;
});

export default router;
