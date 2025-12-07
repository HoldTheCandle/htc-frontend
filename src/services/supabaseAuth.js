import { supabase } from '@/lib/supabase'

export const supabaseAuth = {
  async login(email, password) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })
    if (error) throw error
    return data.user
  },

  async logout() {
    await supabase.auth.signOut()
  },

  async getUser() {
    const { data } = await supabase.auth.getUser()
    return data?.user ?? null
  }
}
