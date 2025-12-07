import { defineStore } from 'pinia'
import { supabase } from '@/lib/supabase'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null
  }),

  actions: {
    async login(email, password) {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      })

      if (error) throw error

      this.user = data.user
      return data.user
    },

    async logout() {
      await supabase.auth.signOut()
      this.user = null
    },

    async loadUser() {
      const { data } = await supabase.auth.getUser()
      this.user = data?.user ?? null
    }
  },

  persist: true
})
