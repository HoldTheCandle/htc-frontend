<template>
  <aside class="sidebar">

    <!-- LOGO -->
    <div class="logo-wrapper">
      <img src="/logo.png" class="logo" alt="HTC Logo" />
    </div>

    <!-- MENU -->
    <nav class="menu">
      <router-link
        v-for="item in menu"
        :key="item.to"
        :to="item.to"
        class="menu-item"
        :class="{ active: route.path === item.to }"
      >
        <i :class="item.icon"></i>
      </router-link>
    </nav>

  </aside>
</template>

<script setup>
import { useRoute } from "vue-router"

const route = useRoute()

// 🔥 AQUÍ ESTÁN TODOS TUS BOTONES
const menu = [
  { to: "/resumen",      icon: "ri-dashboard-line" },
  { to: "/predictions",  icon: "ri-line-chart-line" },
  { to: "/backtesting",  icon: "ri-history-line" },
  { to: "/ml",           icon: "ri-cpu-line" },
  { to: "/alpaca",       icon: "ri-exchange-dollar-line" },
  { to: "/news",         icon: "ri-newspaper-line" },
  { to: "/perfil",       icon: "ri-user-3-line" }
]
</script>

<style scoped>
.sidebar {
  width: 90px;
  background: linear-gradient(180deg, #0f172a 0%, #111827 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 22px;
  gap: 32px;
}

.logo-wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
}

.logo {
  width: 42px;
  height: auto;
}

/* MENU */
.menu {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

/* BOTONES */
.menu-item {
  width: 52px;
  height: 52px;
  border-radius: 18px;
  color: rgba(255, 255, 255, 0.45);
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-size: 26px;
  transition: 0.2s ease;
}

.menu-item:hover {
  background: rgba(255, 255, 255, 0.08);
  color: white;
}

.menu-item.active {
  background: white;
  color: var(--primary);
  box-shadow: 0 10px 22px var(--shadow-blue);
}
</style>
