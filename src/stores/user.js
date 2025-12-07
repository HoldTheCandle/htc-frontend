import { defineStore } from "pinia";
import { supabase } from "@/supabaseClient";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null,
    profile: null,
  }),

  persist: true,

  actions: {
    async login(email, password) {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        console.error("Login error:", error.message);
        return false;
      }

      console.log("LOGIN OK: ", data.user);

      this.user = data.user;

      await this.loadProfile();

      return true;
    },

    async loadProfile() {
      if (!this.user) return;

      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", this.user.id)
        .single();

      if (error) {
        console.warn("No profile found, using user metadata.");        
        this.profile = null;
        return;
      }

      this.profile = data;
    },

    async logout() {
      await supabase.auth.signOut();
      this.user = null;
      this.profile = null;
    },

    isLogged() {
      return this.user !== null;
    },
  },
});
