<template>
  <div class="htc-layout">

    <!-- SIDEBAR -->
    <Sidebar />

    <!-- MAIN AREA -->
    <div class="main-area">

      <!-- TOPBAR -->
      <Navbar />

      <!-- CONTENT -->
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
  overflow: hidden;
  background: var(--bg);
}

.main-area {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: var(--bg);
}

.content-area {
  flex: 1;
  padding: 24px 28px;
  overflow-y: auto;
}
</style>
