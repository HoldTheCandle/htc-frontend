<template>
  <!-- Si estamos en /login → NO hay layout (solo la página) -->
  <router-view v-if="layoutlessRoutes.includes(route.path)" />

  <!-- Si NO estamos en /login → usamos el AppLayout -->
  <AppLayout v-else />
</template>

<script setup>
import { useRoute } from "vue-router"
import { computed } from "vue"

// Importamos el layout completo
import AppLayout from "@/layouts/AppLayout.vue"

const route = useRoute()

// Rutas que NO deben tener layout (solo login ahora mismo)
const layoutlessRoutes = ["/login"]
</script>
