<template>
  <header class="topbar">
    <div class="spacer"></div>

    <div class="topbar-right">
      <img class="avatar" :src="avatarUrl" alt="avatar" />
    </div>
  </header>
</template>

<script setup>
import { computed } from "vue"
import { useUserStore } from "@/stores/user"
import { supabase } from "@/supabaseClient"

const userStore = useUserStore()

// 🚀 Obtener avatar sin extensión (nombre = userId)
function getAvatarFromStorage() {
  if (!userStore.user?.id) return null

  const { data } = supabase.storage
    .from("avatars")
    .getPublicUrl(userStore.user.id)   // ← SIN .png ni .jpg

  return data?.publicUrl || null
}

// AVATAR FINAL A USAR
const avatarUrl = computed(() => {
  const storageAvatar = getAvatarFromStorage()

  // Si existe en Storage → usarlo
  if (storageAvatar) return storageAvatar

  // Si NO existe → usar fallback limpio (no roto)
  return "/default-avatar.png"
})
</script>

<style scoped>
.topbar {
  height: 70px;
  background: var(--panel-bg);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 24px;
}

.avatar {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #ddd;
}
</style>
