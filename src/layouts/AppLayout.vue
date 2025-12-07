<template>
  <div class="htc-layout">

    <!-- SIDEBAR -->
    <Sidebar class="sidebar" />

    <!-- MAIN AREA -->
    <div class="main-area">
      <Navbar />

      <div class="content-area">
        <router-view />
      </div>
    </div>

  </div>
</template>

<script setup>
import Sidebar from "@/components/Sidebar.vue"
import Navbar from "@/components/Navbar.vue"
</script>

<style scoped>
.htc-layout {
  display: flex;
  height: 100vh;
  width: 100vw;
  background: var(--bg);
  overflow: hidden;
}

/* MAIN COLUMN */
.main-area {
  flex: 1;
  display: flex;
  flex-direction: column;
}

/* CONTENT WRAPPER */
.content-area {
  flex: 1;
  padding: 24px;
  overflow-y: auto;
}

/* -------------------------------------- */
/* RESPONSIVE LAYOUT */
/* -------------------------------------- */

/* TABLET + MÓVIL */
@media (max-width: 1024px) {
  .htc-layout {
    flex-direction: column;
  }

  .sidebar {
    width: 100% !important;
    height: 60px !important;
    flex-direction: row !important;
    align-items: center !important;
    justify-content: space-evenly !important;
    padding: 0 !important;
  }

  .content-area {
    padding: 16px;
  }
}

/* MÓVIL */
@media (max-width: 600px) {
  .content-area {
    padding: 10px;
  }
}
</style>
