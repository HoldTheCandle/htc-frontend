<template>
  <header class="topbar">
    <div></div>

    <div class="actions">
      <i class="ri-chat-3-line"></i>
      <i class="ri-notification-3-line"></i>

      <img class="avatar" :src="avatarUrl" />
    </div>
  </header>
</template>

<script setup>
import { computed } from "vue"
import { useUserStore } from "../stores/user"

const userStore = useUserStore()

const avatarUrl = computed(() =>
  userStore.avatar || "/avatar.png"
)
</script>

<style scoped>
.topbar {
  height: 80px;
  padding: 0 25px;
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.actions {
  display: flex;
  gap: 20px;
  align-items: center;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
</style>
