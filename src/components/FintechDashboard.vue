<template>
  <div class="dashboard">

    <!-- HEADER (saludo + avatar en fila) -->
    <div class="header">
      <h2 class="greeting">{{ greeting }}</h2>
      <img class="avatar" :src="userAvatar" alt="avatar" />
    </div>

    <!-- PANEL PRINCIPAL -->
    <PortfolioPanel />

    <!-- GRID RESPONSIVE -->
    <div class="grid">
      <BalanceCard />
      <DailyLimit />
      <ActionsPanel />
      <SavingPlans />
      <StatisticsPanel />
      <RecentActivity />
    </div>

  </div>
</template>

<script setup>
import { computed } from "vue";

import PortfolioPanel from "@/components/dashboard/PortfolioPanel.vue";
import BalanceCard from "@/components/dashboard/BalanceCard.vue";
import DailyLimit from "@/components/dashboard/DailyLimit.vue";
import ActionsPanel from "@/components/dashboard/ActionsPanel.vue";
import SavingPlans from "@/components/dashboard/SavingPlans.vue";
import StatisticsPanel from "@/components/dashboard/StatisticsPanel.vue";
import RecentActivity from "@/components/dashboard/RecentActivity.vue";

const userAvatar = "/avatars/default.png";

const greeting = computed(() => {
  const h = new Date().getHours();
  if (h < 12) return "Buenos días, pollagorda ☀️";
  if (h < 20) return "Buenas tardes, pollagorda 🌤️";
  return "Buenas noches, pollagorda 🌙";
});
</script>

<style scoped>

/* 🔥🔥🔥 MOBILE FIRST 🔥🔥🔥 */

.dashboard {
  width: 100%;
  padding: 20px 16px; /* margen derecho real en mobile */
  box-sizing: border-box;
  overflow-x: hidden;  /* evita scroll horizontal */
}

/* HEADER */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 22px;
}

.greeting {
  font-size: 20px;
  font-weight: 700;
  line-height: 1.2;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}


/* GRID — MOBILE FIRST */

.grid {
  display: grid;
  grid-template-columns: 1fr;   /* 📱 default 1 columna */
  gap: 16px;
}

/* Tablet */
@media (min-width: 600px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Laptop */
@media (min-width: 900px) {
  .dashboard {
    padding: 30px 32px; /* más margen en desktop */
  }
  .grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
}

/* Desktop grande */
@media (min-width: 1300px) {
  .grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

/* Ultra wide */
@media (min-width: 1800px) {
  .dashboard {
    padding: 40px 48px;
  }
}

</style>
